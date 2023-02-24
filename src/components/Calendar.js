/* 
creates Calendar component
creates DayBox div with loop
*/
import { numColunms, numRows, monthNames } from "../params";

export const Calendar = ({ year, setDate, colors }) => {
  const boxes = [];
  for (let colCount = 0; colCount < numColunms; colCount++) {
    for (let rowCount = 0; rowCount < numRows; rowCount++) {
      const daysInMonth = new Date(year, colCount, 0).getDate();
      const key = `c${year}${monthNames[colCount - 1]}${rowCount}`;
      const colorIndex = colors[key];
      const box = (
        <div
          className={`day-box ${rowCount > daysInMonth ? "disabled" : ""}`}
          key={`${key}`}
          style={{
            gridArea: `${rowCount + 1}/${colCount + 1}/${rowCount + 2}/${
              colCount + 2
            }`,
            backgroundColor: `${colors["ref"][colorIndex]}`
          }}
          onClick={() => {
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
