import "../styles/Menu.scss"
import "../styles/App.scss"
import {
  actionCreator, actionTypes,
  useCalendarContext,
  useCalendarDispatchContext
} from "../contexts/CalenderContext";

export const Menu = () => {
  const {showMenu} = useCalendarContext();
  const calendarStateDispatch = useCalendarDispatchContext();

  const hide = () => calendarStateDispatch(actionCreator(
    actionTypes.hideMenu,
    {showMenu: false}
  ));
  return (
    <dialog
      open={showMenu}
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
};