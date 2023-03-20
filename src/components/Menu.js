import "../styles/Menu.scss"
import "../styles/App.scss"
import {useContext} from "react";
import {CalendarContext, CalendarContextDispatcher} from "../contexts/CalenderContext";

export const Menu = () => {
  const calendarState = useContext(CalendarContext);
  const calendarStateDispatcher = useContext(CalendarContextDispatcher);
  return (
    <dialog
      open={calendarState.showMenu}
      className="backdrop"
      onClick={() => calendarStateDispatcher({
        type: "hideMenu",
        showMenu: false
      })}
    >
      <div 
        className="menu"
        onClick={(event) => event.stopPropagation()}
      >      
        <button onClick={() => calendarStateDispatcher({
          type: "hideMenu",
          showMenu: false
        })}>close</button>
        <ul>
          <li>dialog</li>
          <li>create new calendar</li>
          <li>select calendar</li>
          <li>set ref colors - color picker</li>
          <li>logout</li>
        </ul>
      </div>
    </dialog>
  )
}