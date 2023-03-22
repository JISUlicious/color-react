import "../styles/Menu.scss"
import "../styles/App.scss"
import {
  useCalendarContext,
  useCalendarDispatcherContext
} from "../contexts/CalenderContext";

export const Menu = () => {
  const calendarState = useCalendarContext();
  const calendarStateDispatcher = useCalendarDispatcherContext();

  const hide = () => calendarStateDispatcher({
    type: "hideMenu",
    showMenu: false
  });
  return (
    <dialog
      open={calendarState.showMenu}
      className="backdrop"
      onClick={() => hide()}
    >
      <div
        className="menu"
        onClick={(event) => event.stopPropagation()}
      >      
        <button onClick={() => hide()}>close</button>
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