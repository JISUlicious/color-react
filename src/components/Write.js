import { useState } from "react";
import { monthNames } from "../params";
import "../styles/App.scss";
import "../styles/Write.scss";
import {
  actionCreator,
  useCalendarContext,
  useCalendarDispatchContext
} from "../contexts/CalendarContext";
import { useAuthContext } from "../contexts/AuthContext";
import { addItem, updateItem } from "../functions/storage";
import { dateToKey } from "../functions/dateToKey";
import { DayBox } from "./DayBox";

export const Write = () => {
  
  const {user} = useAuthContext();
  const {calendar, selectedRecord, records, year} = useCalendarContext();
  const calendarStateDispatch = useCalendarDispatchContext();
  const hide = () => {
    calendarStateDispatch(actionCreator.setSelectedRecord(null));
  };
  const colors = calendar.data().colors;
  const monthName = monthNames[selectedRecord.month-1];
  const dateKey = dateToKey(selectedRecord);
  
  const [inputText, setInputText] = useState("text" in selectedRecord ? selectedRecord.text : "");
  const [colorIndex, setColorIndex] = useState("color" in selectedRecord ? selectedRecord.color : 2);
  const onColorSetButtonClick = (i) => {
    setColorIndex(i);
  };
  const onTextChange = (event) => {
    setInputText(event.target.value);
  };
  const onSubmitText = (event) => {
    event.preventDefault();
    const key = `users/${user.uid}/calendars/${calendar.id}`;
    const newRecord = {
      ...selectedRecord,
      text: inputText,
      color: colorIndex
    };
    
    if (selectedRecord.text) {
      const keyForUpdateItem = key + `/records/${records[dateKey].id}`;
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
        <div style={{display:"inline-flex"}}>{colors.map((v,i) => {
          return (
            <DayBox
              key={i}
              className={""}
              style={{
                backgroundColor: v
              }}
              onClick={() => onColorSetButtonClick(i)}
              content={null}
            ></DayBox>);
        })}</div>
        <form onSubmit={onSubmitText}>
          <textarea value={inputText} placeholder="Write here" onChange={onTextChange}></textarea>
          <button style={{backgroundColor:colors[colorIndex]}} type="submit">SUBMIT</button>
        </form>
      </div>
    </div>);
};
