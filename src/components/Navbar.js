import Logo from '../images/logo.svg';
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const Navbar = () => {
    return (
        <nav id="navbar">
            <Link to="/">
                <div className="logo">
                    <img src={ Logo } alt="" />
                </div>
            </Link>
            <div className="links">
                <ul>
                    <Link to="/"><NavLink text="Home" /></Link>
                    <Link to="/blogs"><NavLink text="Blogs" /></Link>
                    <Link to="/login"><NavLink text="Login" /></Link>
                    <Link to="/signup"><NavLink text="Sign Up" /></Link>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;