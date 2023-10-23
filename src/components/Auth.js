import "../styles/App.scss";
import "../styles/Auth.scss";
import { useState } from "react";
import { SocialSignIn } from "./SocialSignIn";
import { AuthInput } from "./AuthInput";


export const Auth = () => {
  const [signUp, setSignUp] = useState(false);
  
  return <>
      <div className="sign-in">
        <div className="auth-wrapper">
          <h1>Color Calendar</h1>
          <AuthInput isSignUp={ signUp } />
          { !signUp && <SocialSignIn />}
        <button
          className={"sign-up"}
          onClick={() => setSignUp(!signUp)}
        >
          {signUp ? "Already have an account" : "Sign up for new account"}
        </button>
        </div>
      </div>
    </>;
};
