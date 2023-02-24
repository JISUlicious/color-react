import { monthNames } from "../params";
import "../styles/Write.scss";

export const Write = ({ date, colors, setColor, hide}) => {
  const monthName = monthNames[date["month"]-1]
  const key = `c${date["year"]}${monthName}${date["day"]}`;
  const onColorSetButtonClick = (i) => {
    const newObj = {};
    newObj[key] = i;
    setColor(Object.assign({...colors}, newObj));
  }
  return (
    <div className="write">
      <button
        onClick={() => {
          hide();
        }}
      >
        close
      </button>
      <h1>{`${date["day"]} ${monthName} ${date["year"]}`}</h1>
      <input placeholder="Write here"></input>
      {colors["ref"].map((v,i) => {
        return (
          <button 
            key={i}
            style={{
              backgroundColor: `${v}`
            }}
            onClick={() => {onColorSetButtonClick(i);}}
          >{i}</button>);
      })}
      <button>submit</button>
    </div>
  );
};
