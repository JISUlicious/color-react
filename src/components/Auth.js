import "../styles/App.scss";
import "../styles/Auth.scss";
import { useState } from "react";
import { OAuthProviderName, signInEmail, signInOAuth, signUpEmail } from "../functions/auth";
import { GoogleLoginButton, FacebookLoginButton } from "react-social-login-buttons";


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
  
  const onSocialLogin = (name) => {
    signInOAuth(name)
      .catch((error) => {
        console.log(error);
      });
  };
  
  const onSignUp = () => {
    signUpEmail(inputId, inputPw)
      .catch(error => {
        console.log(error);
      });
  };

  
  return (<div className="sign-in">
    <div className="auth-wrapper">
      <h1>Color Calendar</h1>
      <form onSubmit={onSignIn}>
        <label>
          <input onChange={onChangeId} placeholder="ID" />
        </label>
        <br/>
        <label>
          <input onChange={onChangePw} placeholder="PW" type="password" />
        </label>
        <button type="submit">Sign In</button>
      </form>
      <GoogleLoginButton
        onClick={() => onSocialLogin(OAuthProviderName.google)}
        iconSize={20}
        size={30}
        style={{
          fontSize: 14
        }}
        align={"center"}
      />
      <FacebookLoginButton
        onClick={() => onSocialLogin(OAuthProviderName.facebook)}
        iconSize={20}
        size={30}
        style={{
          fontSize: 14
        }}
        align={"center"}
      />
      <button
        className={"sign-up"}
        onClick={onSignUp}
      >
        Sign up and make your own calendar
      </button>
      
    </div>
    
  </div>);
};
