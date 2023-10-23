import { useState } from "react";
import { signInEmail, signUpEmail } from "../functions/auth";


export const AuthInput = ({isSignUp}) => {
  
  const [inputId, setInputId] = useState(null);
  const [inputPw, setInputPw] = useState(null);
  
  const onChangeId = (event) => {
    setInputId(event.target.value);
  };
  const onChangePw = (event) => {
    setInputPw(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (isSignUp) {
      signUpEmail(inputId, inputPw)
        .catch(error => {
          console.log(error);
        });
    } else {
      signInEmail(inputId, inputPw)
        .catch((error) => {
          console.log(error);
        });
      
    }
  };
  
  const buttonText = isSignUp ? "Sign Up" : "Sign In";
  
  return (
      <form onSubmit={onSubmit}>
        <label>
          <input onChange={onChangeId} placeholder="ID" required={true} />
        </label>
        <label>
          <input onChange={onChangePw} placeholder="PW" required={true} type="password" />
        </label>
        <button type="submit">{buttonText}</button>
      </form>);
};