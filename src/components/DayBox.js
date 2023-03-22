import { dateToKey } from "../functions/dateToKey";
import { referenceColors } from "../params";
import {
  useCalendarContext,
  useCalendarDispatcherContext
} from "../contexts/CalenderContext";

export const DayBox = ({date, gridArea, disabled, indices, children}) => {
  
  const dateKey = dateToKey(date);
  
  const calendarState = useCalendarContext();
  const calendarStateDispatcher = useCalendarDispatcherContext();
  const record = calendarState.calendarRecord ? calendarState.calendarRecord : {};

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
      calendarStateDispatcher({
        type: "setDate",
        date: date
      });
    }}
  >
    {children}
  </div>
}