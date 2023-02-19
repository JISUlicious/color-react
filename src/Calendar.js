/* 
creates Calendar component
creates DayBox div with loop
*/
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const numColunms = 13; // num months + day index col
const numRows = 32; // num max days in a month + month index row

export const Calendar = () => { // 나중에 year를 받아서 날짜에 맞춰서 DayBox를 활성화할 예정 (2월 29일 활성/비활성)
  const boxes = [];
  for (let colCount = 0; colCount < numColunms; colCount++) {
    for (let rowCount = 0; rowCount < numRows; rowCount++) {
      boxes.push(<div
          className="day-box"
          key={`c${colCount}r${rowCount}`}
          id={`c${colCount}r${rowCount}`}
          data-col={colCount}
          data-row={rowCount}
          style={{
            gridArea:`${rowCount+1}/${colCount+1}/${rowCount+2}/${colCount+2}`
          }}>
            {colCount === 0 && rowCount > 0 && rowCount}
            {rowCount === 0 && colCount > 0 && monthNames[colCount-1]}
          </div>);
    }
  }

  const calendar = <div 
    className="calendar" 
    style={{
      gridTemplate:`repeat(${numRows}, 1fr)/repeat(${numColunms}, 1fr)`
    }}
  >
    {boxes}
  </div>;
  return calendar;
};
