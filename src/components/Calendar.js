/* 
creates Calendar component
creates DayBox div with loop
*/
import { monthNames, referenceColors } from "../params";
import { dateToKey } from "../functions/dateToKey";
import { DayBox } from "./DayBox";
import { actionCreator, useCalendarContext, useCalendarDispatchContext } from "../contexts/CalendarContext";

const numColumns = 13; // num months + day index col
const numRows = 32; // num max days in a month + month index row

const DayBoxContainer = (date, records, dispatch) => {
  const key = dateToKey(date);
  const {year, month, day} = date;
  const daysInMonth = new Date(year, month, 0).getDate();
  const disabled = day > daysInMonth;
  const indices = month === 0 || day === 0;
  
  const className = ` ${disabled ? "disabled" : ""}${indices ? "index" : ""}`;
  // define style of DayBox
  const record = !records ? null : records[key] ? records[key] : null;
  const backgroundColor = disabled ? "dimgrey"
    : record ? referenceColors[record.color]
      : null;
  const border = record && "1px solid black"
  const gridArea = `${day + 1}/${month + 1}/${day + 2}/${month + 2}`
  const style = {backgroundColor, border, gridArea};
  // define action of DayBox
  const onClick = disabled || indices ? null : () => {
    dispatch(actionCreator.setDate(date));
  };
  // define content of DayBox
  const content = month === 0 && day > 0 ? day
    : day === 0 && month > 0 ? monthNames[month - 1]
      : null;
  
  return (<DayBox
    key={key}
    className={className}
    style={style}
    onClick={onClick}
    content={content}
  />);
};

export const Calendar = () => {
  
  const {year, records} = useCalendarContext();
  const dispatch = useCalendarDispatchContext();
  
  const boxes = [];
  for (let colCount = 0; colCount < numColumns; colCount++) {
    for (let rowCount = 0; rowCount < numRows; rowCount++) {
      const date = {year: year, month: colCount, day: rowCount};
      const box = DayBoxContainer(date, records, dispatch);
      boxes.push(box);
    }
  }

  return (
    <div
      className="calendar"
      style={{
        gridTemplate: `repeat(${numRows}, 1fr)/repeat(${numColumns}, 1fr)`,
      }}
    >
      {boxes}
    </div>
  );
};

