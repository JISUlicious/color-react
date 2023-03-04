import "../styles/Menu.scss"
import "../styles/App.scss"

export const Menu = ({show, hide}) => {
  return (
    <dialog
      open={show} 
      className="backdrop"
      onClick={() => {hide();}}
    >
      <div 
        className="menu"
        onClick={(event) => {event.stopPropagation();}}
      >
        <button onClick={() => {hide();}}>close</button>
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