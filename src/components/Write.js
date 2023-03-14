import { useContext, useState } from "react";
import { monthNames, referenceColors } from "../params";
import "../styles/Write.scss";
import { RecordContext } from "../App";

export const Write = ({ date, hide }) => {
  const monthName = monthNames[date.month-1];

  const [[record, setRecord], setContext] = useContext(RecordContext);

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
    setRecord({...record, text: inputText, color: colorIndex});
    setContext(null);
    hide();

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
        <button style={{backgroundColor:referenceColors[colorIndex]}} type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};
