import "../styles/Menu.scss"
import "../styles/App.scss"
import { signOutApp } from "../functions/auth";
import { useAuthContext } from "../contexts/AuthContext";

export const Menu = ({visible, hide}) => {
  const { user } = useAuthContext();
  const onSignOut = () => {
    signOutApp()
      .catch((error) => {
        console.log(error);
      });
  };
  
  const onManageCalendar = () => {
    // do something
  };
  
  return (
    <dialog
      open={visible}
      className="backdrop"
      onClick={() => hide()}
    >
      <div
        className="menu"
        onClick={(event) => event.stopPropagation()}
      >      
        <button onClick={() => hide()}>close</button>
        <div>
          {user.displayName ? user.displayName : user.email}
        </div>
        <ul>
          <li onClick={onManageCalendar}><button>manage calendar(선택,설정)</button></li>
          <li onClick={onSignOut}><button>Sign Out</button></li>
        </ul>
      </div>
    </dialog>
  )
};