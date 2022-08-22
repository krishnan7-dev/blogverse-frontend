import { useState } from "react";
import { Link } from "react-router-dom";

import { generateKeyPair } from 'crypto'
import jwt from 'jsonwebtoken'

const Login = () => {
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {
        fetch(`http://localhost:5000/user/${ credential }`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: { credential, password }
        })
            .then((res) => res.text())
            .then((data) => {
                const error = JSON.parse(data).err;
                if (error) {
                    alert(error);
                    return;
                } else {
                    // Generate jwt
                    console.log('You are logged in');
                }
            });
    };

    return (
        <div className="form">
            <div className="form-container">
                <h1 className="form-title">Login</h1>
                <form>
                    <input type="text" placeholder="Enter Username or Email"  onChange={ e => setCredential(e.target.value) }/>
                    <input type="password" placeholder="Password" onChange={ e => setPassword(e.target.value) }/>
                </form>
                <button onClick={ handleClick }>Login</button>
                <p>New to Blogverse? <Link style={{ color: "var(--navy-blue)" }} to="/signup">Join Here</Link></p>
            </div>
        </div>
    );
}
 
export default Login;