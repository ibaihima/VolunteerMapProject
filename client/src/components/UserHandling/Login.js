
   
import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
        <h1>Volunteer</h1>
        {showLogin? (
            <>
                <LoginForm onLogin={onLogin}/>
                <p>Don't have an account?
                <button onClick={() => setShowLogin(false)}>Sign Up</button>
                </p>
            </>
        ) : (
            <>
                <SignUpForm onLogin={onLogin}/>
                <p>Already have an account?
                <button onClick={() => setShowLogin(true)}>Log in </button>
                </p>
            </>
        )
        }
    </div>
  );
}
export default Login;