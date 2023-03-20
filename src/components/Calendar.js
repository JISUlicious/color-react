/* 
creates Calendar component
creates DayBox div with loop
*/
import { monthNames } from "../params";
import { dateToKey } from "../functions/dateToKey";
import { DayBox } from "./DayBox";
import {useContext} from "react";
import {CalendarContext, CalendarContextDispatcher} from "../contexts/CalenderContext";

const numColunms = 13; // num months + day index col
const numRows = 32; // num max days in a month + month index row

export const Calendar = () => {
  
  const calendarState = useContext(CalendarContext);
  const calendarStateDispatcher = useContext(CalendarContextDispatcher);
  
  
  const boxes = [];
  for (let colCount = 0; colCount < numColunms; colCount++) {
    for (let rowCount = 0; rowCount < numRows; rowCount++) {
      const daysInMonth = new Date(calendarState.year, colCount, 0).getDate();
      const date = {year:calendarState.year, month:colCount, day:rowCount};
      const key = dateToKey(date);

      const disabled = rowCount > daysInMonth;
      const indices = colCount === 0 || rowCount === 0;
      const box = (
        <DayBox
          key={key}
          date={date}
          gridArea={`${rowCount + 1}/${colCount + 1}/${rowCount + 2}/${
            colCount + 2
          }`}
          disabled={disabled}
          indices={indices}
          onClick={() => {
            calendarStateDispatcher(
              {
                type: "setDate",
                date: date
              });
          }}
        >
          {colCount === 0 && rowCount > 0 && rowCount}
          {rowCount === 0 && colCount > 0 && monthNames[colCount - 1]}
        </DayBox>
      );
      boxes.push(box);
    }
  }

  return (
    <div
      className="calendar"
      style={{
        gridTemplate: `repeat(${numRows}, 1fr)/repeat(${numColunms}, 1fr)`,
      }}
    >
      {boxes}
    </div>
  );
};
