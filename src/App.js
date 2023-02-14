import { useState, createElement } from "react";
import "./App.css";

function App() {
  const currDatetime = new Date();
  const [calendarYear, setCalendarYear] = useState(currDatetime.getFullYear());

  const yearNavButtonClicked = (event) => {
    if (event.target.innerText === "next") {
      setCalendarYear((prev) => prev + 1);
    } else {
      setCalendarYear((prev) => prev - 1);
    }
  };

  const Header = () => {
    // Header component
    // contains yearNavButtons, year, menuButton
    return (
      <div className="Header">
        <span className="yearNavButton" onClick={yearNavButtonClicked}>
          prev
        </span>
        <span>{calendarYear}</span>
        <span className="yearNavButton" onClick={yearNavButtonClicked}>
          next
        </span>
      </div>
    );
  };

  const Calendar = () => {
    const numColunms = 13;
    const numRows = 32;
    const boxes = [];
    let colCount, rowCount;
    for (colCount = 1; colCount <= numColunms; colCount++) {
      for (rowCount = 1; rowCount <= numRows; rowCount++) {
        const box = createElement("div", {
          className: "DayBox",
          dataCol:colCount,
          dataRow:rowCount,
          style: {
            height: "20px",
            width: "20px",
            borderRadius: "5px",
            gridArea: `${rowCount}/${colCount}/${rowCount+1}/${colCount+1}`,
          },
        });
        boxes.push(box)
      }
    }

    const calendar = createElement(
      "div",
      {
        className: "Calendar",
        style: {
          gridTemplate: `repeat(${numRows}, 1fr)/repeat(${numColunms}, 1fr)`,
        },
      },
      boxes
    );

    return calendar;
  };

  return (
    <div className="App">
      <Header />
      <Calendar />
    </div>
  );
}

export default App;
