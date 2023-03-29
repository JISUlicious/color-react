import "../styles/App.scss";
import { authActionCreator, useAuthContext, useAuthDispatchContext } from "../contexts/AuthContext";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Auth = () => {
  
  // context
  const { auth } = useAuthContext();
  const authDispatch = useAuthDispatchContext();
  // id pw state
  const [inputId, setInputId] = useState(null);
  const [inputPw, setInputPw] = useState(null);
  
  const onChangeId = (event) => {
    setInputId(event.target.value);
  };
  const onChangePw = (event) => {
    setInputPw(event.target.value);
  };
  const onSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, inputId, inputPw)
      .then((user) => {
        authDispatch(authActionCreator.signIn(user.uid));
      });
  };

  return (
    <div className="sign-in">
      <h1>Color Calendar</h1>
      
      <form onSubmit={onSignIn}>
        <label>
          ID: <input onChange={onChangeId} placeholder="ID" />
        </label>
        <label>
          PW: <input onChange={onChangePw} placeholder="PW" type="password" />
        </label>
        <button type="submit">Sign In</button>
      </form>
      
    </div>

  );
};
