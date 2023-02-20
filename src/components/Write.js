import "../styles/Write.css";

export const Write = ({date, setDate}) => {
    return (<div className="write">
        <button onClick={()=>{setDate({})}}>close</button>
        <h1>{date ? `${date["day"]} ${date["month"]} ${date["year"]}` : ""}</h1>
        <input placeholder="Write here"></input>
        <button>color1</button>
        <button>color2</button>
        <button>color3</button>
        <button>color4</button>
        <button>color5</button>
        <button>submit</button>
    </div>); 
};