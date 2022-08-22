import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');

    const navigate = useNavigate();

    const handleClick = () => {
        if (password !== retypePassword) {
            alert("Password and Re-type password fields don't match");
            return;
        }

        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        })
            .then(res => res.text())
            .then((data) => {
                /* eslint-disable */
                const error = JSON.parse(data).err;
                if (error) {
                    let message = '';
                    switch (error) {
                        case 'Invalid Username':
                            message = '';
                            break;
                        
                        case 'Invalid Email':
                            message = '';
                            break;

                        case 'Invalid Password':
                            message = '';
                            break;
                    }
                    alert(message);
                    return;
                }
                navigate('/login');
                alert('Your registration is successfull. You may login using your credentials.')
             })
            .catch(err => console.error(err));
    }

    return (
        <div className="form">
            <div className="form-container">
                <h1 className="form-title">Sign Up</h1>
                <form>
                    <input type="text" onChange={ e => setUsername(e.target.value) } placeholder="Username"/>
                    <input type="email" placeholder="Email" onChange={ e => setEmail(e.target.value)}/>
                    <input type="password" onChange={ e => setPassword(e.target.value) } placeholder="Password"/>
                    <input type="password" placeholder="Re-Type Password" onChange={ e => setRetypePassword(e.target.value) }/>
                </form>
                <button onClick={ handleClick }>Submit</button>
                <p>Already signed up? <Link style={{ color: "var(--navy-blue)" }} to="/login">Login Here</Link></p>
            </div>
        </div>
    );
}
 
export default Signup;