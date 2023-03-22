import { useState } from "react";
import { monthNames, referenceColors } from "../params";
import { dateToKey } from "../functions/dateToKey";
import "../styles/Write.scss";
import { useCalendarContext, useCalendarDispatcherContext } from "../contexts/CalenderContext";

export const Write = () => {
  
  const calendarState = useCalendarContext();
  const calendarStateDispatcher = useCalendarDispatcherContext();
  
  const date = calendarState.date;
  const dateKey = dateToKey(date);
  const record = calendarState.calendarRecord;
  const hide = () => {calendarStateDispatcher({
    type: "setDate",
    date: null
  })};
  
  const monthName = monthNames[date.month-1];
  
  const [inputText, setInputText] = useState(record[dateKey] ? record[dateKey].text : undefined);
  const [colorIndex, setColorIndex] = useState(record[dateKey] ? record[dateKey].color : undefined);
  const onColorSetButtonClick = (i) => {
    setColorIndex(i);
  };
  const onTextChange = (event) => {
    setInputText(event.target.value);
  };
  const onSubmitText = (event) => {
    event.preventDefault();
    calendarStateDispatcher({
      type: "addRecord",
      newRecord: {
        year:""+calendarState.year,
        dateKey:dateKey,
        value: {text: inputText, color: colorIndex}
      }
    });
    hide();
    
  };

  return (
    <div 
      className="backdrop"
      onClick={() => hide()}
    >
      <div 
        className="write"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={() => hide()}
        >
          close
        </button>
        <h1>{`${date.day} ${monthName} ${date.year}`}</h1>
        {referenceColors.map((v,i) => {
          return (
            <button 
              key={i}
              style={{
                backgroundColor: v
              }}
              onClick={() => onColorSetButtonClick(i)}
            >{i}</button>);
        })}
        <form onSubmit={onSubmitText}>
        <textarea value={inputText} placeholder="Write here" onChange={onTextChange}></textarea>
        <button style={{backgroundColor:referenceColors[colorIndex]}} type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};
