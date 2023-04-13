import "../styles/App.scss";
import "../styles/Auth.scss";
import { useState } from "react";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";


export const Auth = () => {
  const [signUp, setSignUp] = useState(false);

  return <>
    { signUp ? <SignUp setSignUp={setSignUp}/> : <SignIn setSignUp={setSignUp}/>}
    </>;
};
