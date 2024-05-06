import { useState } from "react";


const Login = () => {

    const [username, setUsername] = useState("");

    const setUsernameHandler = (event) => {
        const updatedUsername = event.target.value;
        setUsername(updatedUsername);
        updatedUsername.toLowerCase().includes("o") ? alert("Por favor, ¡Nombres de usuario sin letra 'o'!") : 0;
    }

    const submitUsernameHandler = (event) => {
        event.preventDefault();
        username.toLowerCase().includes("o") || username.trim() == ""
        ? alert("Usuario inválido para registrarse.")
        : alert("Usuario registrado correctamente.");

        setUsername("");
    }

    return(
        <>
            <label id="username">Nombre de usuario: </label>
            <input id="username" type="text" onChange={setUsernameHandler} value={username}></input>
            <button id="register-btn" type="submit" onClick={submitUsernameHandler}>Registrarse</button>
            <p>{username}</p>
        </>
    );
};

export default Login;
