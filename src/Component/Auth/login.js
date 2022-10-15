import React, {useState} from "react";
import axios from "axios";
import "../../Styles/login.css";

export default function Login({setToken}) {

    const [credential, setCredential] = useState({
        username: "",
        password: "",
    });

    const handleSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/auth", credential).then((res) => {
            setToken(res.data);
        });
    }

    const handleChange = (e) => {
        setCredential({
          ...credential,
          [e.target.name] : e.target.value,
        })
      }
   
    return (
        <>
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                <p>Username</p>
                <input type="text" name="username" onChange={handleChange} />
                </label>
                <label>
                <p>Password</p>
                <input type="password" name="password" onChange={handleChange} />
                </label>
                <div>
                <button type="submit">Submit</button>
                </div>
            </form>
        </div>

        </>
    );
}