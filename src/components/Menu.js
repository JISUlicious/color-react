import "../styles/Menu.scss"
import "../styles/App.scss"
import { authActionCreator, useAuthContext, useAuthDispatchContext } from "../contexts/AuthContext";
import { signOutApp } from "../functions/auth";

export const Menu = ({visible, hide}) => {
  
  const { auth } = useAuthContext();
  const authDispatch = useAuthDispatchContext();
  const onSignOut = () => {
    signOutApp(auth).then(() => {
      authDispatch(authActionCreator.signOut(auth));
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