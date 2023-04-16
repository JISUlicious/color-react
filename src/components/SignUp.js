import "../styles/App.scss";
import "../styles/Auth.scss";
import { useState } from "react";
import { signUpEmail } from "../functions/auth";

export const SignUp = ({setSignUp}) => {
  
  const [inputId, setInputId] = useState(null);
  const [inputPw, setInputPw] = useState(null);
  
  const onChangeId = (event) => {
    setInputId(event.target.value);
  };
  const onChangePw = (event) => {
    setInputPw(event.target.value);
  };
  const onSignUp = (event) => {
    event.preventDefault();
    signUpEmail(inputId, inputPw)
      .catch(error => {
        console.log(error);
      });
  };
  
  const onBackToSignIn = () => {
    setSignUp(null);
  };
  
  return (<div className="sign-in">
    <div className="auth-wrapper">
      <h1>Color Calendar</h1>
      <form onSubmit={onSignUp}>
        <label>
          <input onChange={onChangeId} placeholder="ID" required={true}/>
        </label>
        <label>
          <input onChange={onChangePw} placeholder="PW" required={true} type="password" />
        </label>
          <button type="submit">Sign Up</button>
      </form>
      <button
        className="sign-up"
        onClick={onBackToSignIn}
      >
        Already have an account
      </button>
    </div>
  
  </div>);
};