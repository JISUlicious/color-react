import "../styles/Menu.scss"
import "../styles/App.scss"
import { useAuthContext } from "../contexts/AuthContext";
import { signOutApp } from "../functions/auth";

export const Menu = ({visible, hide}) => {
  
  const { auth } = useAuthContext();
  const onSignOut = () => {
    signOutApp(auth).then(() => {
      hide();
    }).catch((error) => {
      console.log(error);
    });
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
        <ul>
          <li><button>manage calendar(선택,설정)</button></li>
          <li onClick={onSignOut}><button>Sign Out</button></li>
        </ul>
      </div>
    </dialog>
  )
};