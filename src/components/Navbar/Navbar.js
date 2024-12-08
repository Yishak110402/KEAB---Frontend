import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <div className="contacts">
          <p>Phone Number: +251 912345677</p>
          <p>Email: keabafrica@gmail.com</p>
        </div>
      </div>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img
              src="https://i.postimg.cc/nLDxSvRj/KEAB-logo.jpg"
              alt="KEAB Logo"
            />
          </Link>
        </div>
        <ul className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/aboutus">About us</NavLink>
          <NavLink>Team</NavLink>
          <NavLink>Contact</NavLink>
          <NavLink>Home</NavLink>
        </ul>
      </nav>
    </>
  );
}
