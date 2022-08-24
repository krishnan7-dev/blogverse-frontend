import Logo from '../images/logo.svg';
import { Link, useNavigate } from "react-router-dom";
import NavLink from "./NavLink";
import { useEffect } from 'react';

const { useJwt } = require('react-jwt');

const Navbar = () => {
    const accessToken = localStorage.getItem('accessToken');
    const { decodedToken, isExpired } = useJwt(accessToken);

    const navigate = useNavigate();

    useEffect(() => {
        if (decodedToken && !isExpired) {
            if (window.location.pathname === '/login') {
                navigate('/blogs');
            }
        }

        if (window.location.pathname === '/logout') {
            localStorage.removeItem('accessToken');
            navigate('/login');
        }
    })

    return (
        <nav id="navbar">
            <Link to="/">
                <div className="logo">
                    <img src={ Logo } alt="" />
                </div>
            </Link>
            <div className="links">
                { (decodedToken && !isExpired && !(window.location.pathname === '/signup') && !(window.location.pathname === '/')) ? (
                    <ul>
                        <Link to="/create"><NavLink text="Create" /></Link>
                        <Link to="/blogs"><NavLink text="Blogs" /></Link>
                        <Link to="/profile"><NavLink text="Your Profile" /></Link>
                        <Link to="/logout"><NavLink text="Logout" /></Link>
                    </ul>
                ) : (
                    <ul>
                        <Link to="/"><NavLink text="Home" /></Link>
                        <Link to="/blogs"><NavLink text="Blogs" /></Link>
                        <Link to="/login"><NavLink text="Login" /></Link>
                        <Link to="/signup"><NavLink text="Sign Up" /></Link>
                    </ul>
                ) }
            </div>
        </nav>
    );
}
 
export default Navbar;