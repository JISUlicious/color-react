import { dateToKey } from "../functions/dateToKey";
import { referenceColors } from "../params";
import {
  actionCreator,
  actionTypes,
  useCalendarContext,
  useCalendarDispatchContext
} from "../contexts/CalenderContext";

export const DayBox = ({date, gridArea, disabled, indices, children}) => {
  
  const dateKey = dateToKey(date);
  
  const {calendarRecord} = useCalendarContext();
  const calendarStateDispatch = useCalendarDispatchContext();
  const record = calendarRecord ? calendarRecord : {};

  return <div
    className={`day-box ${disabled ? "disabled" : ""}`}
    style={{
      gridArea,
      backgroundColor:
        disabled ? "dimgrey"
        : record[dateKey] ? referenceColors[record[dateKey].color]
        : null,
      border: record[dateKey] && "1px solid black"
    }}
    onClick={disabled || indices ? null : () => {
      calendarStateDispatch(actionCreator(
        actionTypes.setDate,
        {date: date}
      ));
    }}
  >
    {children}
  </div>
}