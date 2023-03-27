import { useState } from "react";
import { monthNames, referenceColors } from "../params";
import { dateToKey } from "../functions/dateToKey";
import "../styles/Write.scss";
import {
  actionCreator,
  useCalendarContext,
  useCalendarDispatchContext
} from "../contexts/CalendarContext";

export const Write = () => {
  
  const {records, date, year} = useCalendarContext();
  const calendarStateDispatch = useCalendarDispatchContext();
  
  const dateKey = dateToKey(date);
  const record = records[dateKey] ? records[dateKey] : {};
  const hide = () => {
    calendarStateDispatch(actionCreator.setDate(null))
  };
  
  const monthName = monthNames[date.month-1];
  
  const [inputText, setInputText] = useState(record ? record.text : undefined);
  const [colorIndex, setColorIndex] = useState(record ? record.color : undefined);
  const onColorSetButtonClick = (i) => {
    setColorIndex(i);
  };
  const onTextChange = (event) => {
    setInputText(event.target.value);
  };
  const onSubmitText = (event) => {
    event.preventDefault();
    calendarStateDispatch(actionCreator.addRecord(date, {text: inputText, color: colorIndex}));
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
        <h1>{`${date.day} ${monthName} ${year}`}</h1>
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
