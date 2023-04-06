import { useState } from "react";
import { monthNames } from "../params";
import "../styles/Write.scss";
import {
  actionCreator,
  useCalendarContext,
  useCalendarDispatchContext
} from "../contexts/CalendarContext";
import { useAuthContext } from "../contexts/AuthContext";
import { addItem, updateItem } from "../functions/storage";
import { dateToKey } from "../functions/dateToKey";

export const Write = () => {
  
  const {user} = useAuthContext();
  const {calendar, selectedRecord, recordIds, year, colors} = useCalendarContext();
  const calendarStateDispatch = useCalendarDispatchContext();
  const hide = () => {
    calendarStateDispatch(actionCreator.setSelectedRecord(null));
  };
  
  const monthName = monthNames[selectedRecord.month-1];
  const dateKey = dateToKey(selectedRecord);
  
  const [inputText, setInputText] = useState("text" in selectedRecord ? selectedRecord.text : undefined);
  const [colorIndex, setColorIndex] = useState("color" in selectedRecord ? selectedRecord.color : undefined);
  const onColorSetButtonClick = (i) => {
    setColorIndex(i);
  };
  const onTextChange = (event) => {
    setInputText(event.target.value);
  };
  const onSubmitText = (event) => {
    event.preventDefault();
    const key = `users/${user.uid}/calendars/${calendar.calendarId}`;
    const newRecord = {
      ...selectedRecord,
      text: inputText,
      color: colorIndex
    };
    
    if (selectedRecord.text) {
      const keyForUpdateItem = key + `/records/${recordIds[dateKey]}`;
      updateItem(keyForUpdateItem, newRecord).catch(error => console.log(error));
    } else {
      const keyForAddItem = key + `/records`;
      addItem(keyForAddItem, newRecord).catch(error => console.log(error));
    }
    hide();
  };

  return (<div
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
        <h1>{`${selectedRecord.day} ${monthName} ${year}`}</h1>
        {colors.map((v,i) => {
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
          <button style={{backgroundColor:colors[colorIndex]}} type="submit">submit</button>
        </form>
      </div>
    </div>);
};
