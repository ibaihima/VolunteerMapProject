import React,{useState} from "react";



function Login({setCurrentUser}){
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("")
    const [login, setLogin] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            username, 
            password
        }
        fetch("/users", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        })
        .then((r) => {
            if(r.ok){
                r.json().then(setCurrentUser)
            }
            else{
                r.json().then(e => setErrors(Object.entries(e.error).flat()))
            }
        })
    }
    return(
        <form className="form" onSubmit={handleSubmit}>
        <label>
            Username
            <br/>
        </label>
            <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        <label> 
            Password
            <br/>
        </label>
            <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        <button type="submit">Login</button> 
        </form>
    )

}

export default Login;