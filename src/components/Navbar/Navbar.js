import { NavLink } from "react-router-dom";
import './Navbar.css'

export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                Our Logo
            </div>
            <ul className="nav-links">
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='./aboutus'>About us</NavLink>
                <NavLink>Team</NavLink>
                <NavLink>Contact</NavLink>
                <NavLink>Home</NavLink>
            </ul>
        </nav>
    )
}