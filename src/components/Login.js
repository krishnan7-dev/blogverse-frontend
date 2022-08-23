import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleClick = () => {
        fetch(`http://localhost:5000/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ credential, password })
        })
            .then((res) => res.text())
            .then((data) => {
                const error = JSON.parse(data).err;
                if (error) {
                    alert(error);
                    return;
                } else {
                    const { accessToken } = JSON.parse(data);
                    localStorage.setItem('accessToken', accessToken);
                    navigate('/blogs');
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