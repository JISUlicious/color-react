import "../styles/App.scss";
import "../styles/Auth.scss";
import { OAuthProviderName, signInOAuth } from "../functions/auth";
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";

export const SocialSignIn = ({setSignUp}) => {
  
  const onSocialLogin = (name) => {
    signInOAuth(name)
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (<>
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
  </>);
};