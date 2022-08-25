import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';

import { userUrl } from "../apiurls";

const Profile = () => {
    const [id, setId] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const accessToken = localStorage.getItem('accessToken');
    const decodedToken = jwt_decode(accessToken);

    /* eslint-disable */
    useEffect(() => {
        setId(decodedToken.id);
        setUsername(decodedToken.username);
        setEmail(decodedToken.email);
        setPassword(decodedToken.password);
    }, []);

    const togglePasswordVisibility = () => {
        const passwordField = document.querySelectorAll('.form-container form input')[2];
        passwordField.type = (passwordField.type === 'password') ? 'text' : 'password';
    };

    const updateProfile = () => {
        fetch(`${userUrl}/${ id }`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        })
            .then(res => res.text())
            .then(data => {
                // Check for errors here
                const { accessToken } = JSON.parse(data);
                localStorage.setItem('accessToken', accessToken);
                alert('Your profile has been updated');
            });
    };

    return (
        <div className="form">
            <div className="form-container">
                <h1 className="form-title">Profile</h1>
                <form>
                    <input className="text-center" type="text" value={ username } onChange={ e => setUsername(e.target.value) } placeholder="Username"/>
                    <input className="text-center" type="email" value={ email } placeholder="Email" onChange={ e => setEmail(e.target.value)}/>
                    <input className="text-center" type="password" value={ password } onChange={ e => setPassword(e.target.value) } placeholder="Password"/>
                </form>
                <button onClick={ togglePasswordVisibility }>See Password</button>
                <button onClick={ updateProfile }>Update Profile</button>
            </div>
        </div>
    );
}
 
export default Profile;