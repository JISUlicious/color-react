import { dateToKey } from "../functions/dateToKey";
import { referenceColors } from "../params";
import {
  actionCreator,
  useCalendarContext,
  useCalendarDispatchContext
} from "../contexts/CalendarContext";

export const DayBox = ({date, gridArea, disabled, indices, children}) => {
  
  const dateKey = dateToKey(date);
  
  const {records} = useCalendarContext();
  const calendarStateDispatch = useCalendarDispatchContext();
  const record = records ? records : {};

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
      calendarStateDispatch(actionCreator.setDate(date));
    }}
  >
    {children}
  </div>
};

