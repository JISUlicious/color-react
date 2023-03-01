import { useState } from "react";
import { monthNames, referenceColors } from "../params";
import { dateToKey } from "../functions/dateToKey";
import "../styles/Write.scss";

export const Write = ({ date, records, setRecords, hide}) => {
  const monthName = monthNames[date.month-1];
  const key = dateToKey(date);
  const [inputText, setInputText] = useState(records[key] ? records[key].text : undefined);
  const onColorSetButtonClick = (i) => {
    setRecords({...records, [key]: {...records[key], color: i}});
  };
  const onTextChange = (event) => {
    setInputText(event.target.value);
  };
  const onSubmitText = (event) => {
    event.preventDefault();
    setRecords({...records, [key]: {...records[key], text: inputText}});
  };

  return (
    <div 
      className="backdrop"
      onClick={() => {
        hide();
      }} 
    >
      <div 
        className="write"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={() => {
            hide();
          }}
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
        <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};
