/* 
creates Calendar component
creates DayBox div with loop
*/
import { monthNames, referenceColors } from "../params";
import { dateToKey } from "../functions/dateToKey";

const numColunms = 13; // num months + day index col
const numRows = 32; // num max days in a month + month index row

export const Calendar = ({ year, setDate, records }) => {
  const boxes = [];
  for (let colCount = 0; colCount < numColunms; colCount++) {
    for (let rowCount = 0; rowCount < numRows; rowCount++) {
      const daysInMonth = new Date(year, colCount, 0).getDate();
      const key = dateToKey({year, month:colCount, day:rowCount});

      const disabled = rowCount > daysInMonth;
      const indices = colCount === 0 || rowCount === 0;
      const box = (
        <div
          className={`day-box ${disabled ? "disabled" : ""}`}
          key={key}
          style={{
            gridArea: `${rowCount + 1}/${colCount + 1}/${rowCount + 2}/${
              colCount + 2
            }`,
            backgroundColor: `${
              disabled ? "dimgrey" 
              : records[key] ? referenceColors[records[key].color] 
              : null}`,
            border: records[key] ? "1px solid black" : null
          }}
          onClick={disabled || indices ? null : () => {
            setDate({
              year: year,
              month: colCount,
              day: rowCount,
            });
          }}
        >
          {colCount === 0 && rowCount > 0 && rowCount}
          {rowCount === 0 && colCount > 0 && monthNames[colCount - 1]}
        </div>
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
