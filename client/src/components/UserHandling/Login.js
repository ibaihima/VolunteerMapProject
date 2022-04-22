
   
import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="login_container">
        <img className="user_logo" src= "./assets/home-logo.png" alt="Volunteer logo"/>
        {showLogin? (
            <>
                <LoginForm onLogin={onLogin}/>
                <p className="signin_prompt">Don't have an account?
                <button className="login_button" onClick={() => setShowLogin(false)}>Sign Up</button>
                </p>
            </>
        ) : (
            <>
                <SignUpForm onLogin={onLogin}/>
                <p className="signin_prompt">Already have an account?
                <button className="login_button" onClick={() => setShowLogin(true)}>Log in </button>
                </p>
            </>
        )
        }
    </div>
  );
}
export default Login;