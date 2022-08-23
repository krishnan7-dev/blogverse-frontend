import Logo from '../images/logo.svg';
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const { useJwt } = require('react-jwt');

const Navbar = () => {
    const accessToken = localStorage.getItem('accessToken');
    const { decodedToken, isExpired } = useJwt(accessToken);

    console.log(decodedToken);
    console.log(isExpired);
    (decodedToken && !isExpired) ? console.log('Logged in') : console.log('Not logged in');

    return (
        <nav id="navbar">
            <Link to="/">
                <div className="logo">
                    <img src={ Logo } alt="" />
                </div>
            </Link>
            <div className="links">
                { (decodedToken && !isExpired) ? (
                    <ul>
                        <Link to="/create"><NavLink text="Create" /></Link>
                        <Link to="/blogs"><NavLink text="Blogs" /></Link>
                        <Link to="/profile"><NavLink text="Your Profile" /></Link>
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