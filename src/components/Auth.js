import "../styles/App.scss";
import { useState } from "react";
import { signInEmail } from "../functions/auth";

export const Auth = () => {
  
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
    signInEmail(inputId, inputPw)
      .catch((error) => {
        console.log(error);
      });
  };

  return (<div className="sign-in">
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
  </div>);
};
