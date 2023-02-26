import { useState } from "react";
import { monthNames, referenceColors } from "../params";
import { keyGenerater } from "../functions/keyGenerater";
import "../styles/Write.scss";

export const Write = ({ date, colors, setColor, hide}) => {
  const monthName = monthNames[date.month-1];
  const key = keyGenerater(date);
  const [inpuText, setInputText] = useState(null);
  const onColorSetButtonClick = (i) => {
    setColor({...colors, [key]: {color: i}});
  };
  const onTextChange = (event) => {
    setInputText(event.target.value);
  };
  const onSubmitText = () => {
    setColor({...colors, [key]: {text: inpuText}});
  };

  return (
    <div 
      className="backdrop"
      onClick={() => {
        hide();
      }} 
    >
      <div className="write">
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
                backgroundColor: `${v}`
              }}
              onClick={() => {onColorSetButtonClick(i);}}
            >{i}</button>);
        })}
        <form onSubmit={onSubmitText}>
        <textarea value={inpuText ? inpuText : colors[key] ? colors[key].text : null} placeholder="Write here" onChange={onTextChange}></textarea>
        <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};
