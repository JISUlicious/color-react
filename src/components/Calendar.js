/* 
creates Calendar component
creates DayBox div with loop
*/

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const numColunms = 13; // num months + day index col
const numRows = 32; // num max days in a month + month index row

export const Calendar = ({ year, setDate, colors }) => {
  console.log("rendering Calendar");
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
              month: monthNames[colCount - 1],
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
