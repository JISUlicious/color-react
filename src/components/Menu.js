import "../styles/Menu.scss"
import "../styles/App.scss"

export const Menu = ({isMenuVisible, hide}) => {
  return (
    <dialog
      open={isMenuVisible} 
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