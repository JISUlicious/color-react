
import "../styles/Write.scss";

export const Write = ({ date, setDate, colors, setColor, hide}) => {
  console.log("rendering Write");
  const key = `c${date["year"]}${date["month"]}${date["day"]}`;
  const onColorSetButtonClick = (i) => {
    const newObj = {};
    newObj[key] = i;
    setColor(Object.assign({...colors}, newObj));
  }
  return (
    <div className="write">
      <button
        onClick={() => {
          setDate(null);
          hide();
        }}
      >
        close
      </button>
      <h1>{`${date["day"]} ${date["month"]} ${date["year"]}`}</h1>
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
