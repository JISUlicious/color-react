import { forwardRef } from "react";
import "../styles/Write.scss";

export const Write = forwardRef(({ date, setDate }, ref) => {
  return (
    <div ref={ref} className="write">
      <button
        onClick={() => {
          setDate();
          ref.current.classList.add("hidden");
        }}
      >
        close
      </button>
      <h1>{date ? `${date["day"]} ${date["month"]} ${date["year"]}` : ""}</h1>
      <input placeholder="Write here"></input>
      <button>color1</button>
      <button>color2</button>
      <button>color3</button>
      <button>color4</button>
      <button>color5</button>
      <button>submit</button>
    </div>
  );
});
