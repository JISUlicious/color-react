/* 
creates Calendar component
creates DayBox div with loop
*/
import { monthNames } from "../params";
import { dateToKey } from "../functions/dateToKey";
import { DayBox } from "./DayBox";
import { useCalendarContext } from "../contexts/CalendarContext";

const numColumns = 13; // num months + day index col
const numRows = 32; // num max days in a month + month index row

export const Calendar = () => {
  
  const {year} = useCalendarContext();
  
  const boxes = [];
  for (let colCount = 0; colCount < numColumns; colCount++) {
    for (let rowCount = 0; rowCount < numRows; rowCount++) {
      const boxDate = {year: year, month: colCount, day: rowCount};
      const key = dateToKey(boxDate);

      const daysInMonth = new Date(year, colCount, 0).getDate();
      const disabled = rowCount > daysInMonth;
      const indices = colCount === 0 || rowCount === 0;
      const box = (
        <DayBox
          key={key}
          date={boxDate}
          gridArea={`${rowCount + 1}/${colCount + 1}/${rowCount + 2}/${
            colCount + 2
          }`}
          disabled={disabled}
          indices={indices}
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
        gridTemplate: `repeat(${numRows}, 1fr)/repeat(${numColumns}, 1fr)`,
      }}
    >
      {boxes}
    </div>
  );
};
