/* 
creates Calendar component
creates DayBox div with loop
*/
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const numColunms = 13; // num months + day index col
const numRows = 32; // num max days in a month + month index row

export const Calendar = () => { // 나중에 year를 받아서 날짜에 맞춰서 DayBox를 활성화할 예정 (2월 29일 활성/비활성)
    const nameDayBox = (colCount, rowCount)=>{
        if (colCount === 0 & rowCount === 0)  {
            return null;
        } else if (colCount === 0) {
            return rowCount
        } else if (rowCount === 0) {
            return monthNames[colCount-1]
        } else {
            return null
        }
    }
    const boxes = [];
    for (let colCount = 0; colCount < numColunms; colCount++) {
      for (let rowCount = 0; rowCount < numRows; rowCount++) {
        boxes.push(<div // 이렇게 쓰는게 맞나...
            className="DayBox" 
            key={"c"+String(colCount)+"r"+String(rowCount)}
            id={"c"+String(colCount)+"r"+String(rowCount)}
            data-col={colCount}
            data-row={rowCount}
            style={
                {gridArea:`${rowCount+1}/${colCount+1}/${rowCount+2}/${colCount+2}`}
            }>
              {nameDayBox(colCount, rowCount)}
            </div>)
      }
    }

    const calendar = <div 
      className="Calendar" 
      style={
        {gridTemplate:`repeat(${numRows}, 1fr)/repeat(${numColunms}, 1fr)`}
      }
    >
      {boxes}
    </div>

    return calendar
  };
