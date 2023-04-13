import "../styles/App.scss";
import "../styles/Auth.scss";
import { useState } from "react";
import { OAuthProviderName, signInEmail, signInOAuth } from "../functions/auth";
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";

export const SignIn = ({setSignUp}) => {
  
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
  
  const onSocialLogin = (name) => {
    signInOAuth(name)
      .catch((error) => {
        console.log(error);
      });
  };
  
  const onSignUp = () => {
    setSignUp(true);
  };
  
  
  return (<div className="sign-in">
    <div className="auth-wrapper">
      <h1>Color Calendar</h1>
      <form onSubmit={onSignIn}>
        <label>
          <input onChange={onChangeId} placeholder="ID" required={true} />
        </label>
        <label>
          <input onChange={onChangePw} placeholder="PW" required={true} type="password" />
        </label>

        <button type="submit">Sign In</button>

      </form>
      <GoogleLoginButton
        onClick={() => onSocialLogin(OAuthProviderName.google)}
        iconSize={20}
        size={30}
        style={{
          fontSize: 14,
          width: 'calc(100% - 30px)'
        }}
        align={"center"}
      />
      <FacebookLoginButton
        onClick={() => onSocialLogin(OAuthProviderName.facebook)}
        iconSize={20}
        size={30}
        style={{
          fontSize: 14,
          width: 'calc(100% - 30px)'
        }}
        align={"center"}
      />
      <button
        className={"sign-up"}
        onClick={onSignUp}
      >
        Sign up for new account
      </button>
    </div>
  
  </div>);
};