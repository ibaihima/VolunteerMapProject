import React,{useState} from "react";



function LoginForm({onLogin}){
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
        }),
        })
        .then((r) => {
            if(r.ok){
                r.json().then(onLogin)
            }
            else{
                r.json().then(e => setErrors(Object.entries(e.error).flat()))
            }
        })
        e.target.reset();
    }
    return(
        <div>
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="username">
                Username
                <br/>
            </label>
                <input
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            <label htmlFor="password"> 
                Password
                <br/>
            </label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            <button type="submit">Login</button> 
        </form>
        </div>
    )

}

export default LoginForm;