import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext, useEffect } from "react";
import { GeneralContext } from "../../hooks/GeneralContext";

export default function Navbar() {
  const{navOpen, setNavOpen, setTeamNavOpen, teamNavOpen} = useContext(GeneralContext)
  useEffect(function(){
    if (navOpen){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'visible'
    }
    return ()=>{
      document.body.style.overflow = 'visible'
    }
  },[navOpen])
  function handleNav(){
    setNavOpen(false)
    setTeamNavOpen(false)
  }
  return (
    <>
      <div className="info">
        <div className="contacts">
          <p>Phone Number: +251-956-02-30-21</p>
          <p>Email: keabafrica@gmail.com</p>
        </div>
      </div>
      <nav className={`navbar ${navOpen ? "" : "closed"}`}>
        <div className="logo">
          <Link to="/">
            <img
              src="https://i.postimg.cc/nLDxSvRj/KEAB-logo.jpg"
              alt="KEAB Logo"
            />
          </Link>
        </div>
        <ul className="nav-links">
          <NavLink onClick={handleNav} to="/">Home</NavLink>
          <NavLink onClick={handleNav} to="/aboutus">About us</NavLink>
          <button onClick={()=>{
            setTeamNavOpen((n)=>(!n))
          }}>Team</button>
          <ul className={`teams-menu dropdown-menu ${teamNavOpen ? "open" : ""}`}>
            <NavLink onClick={handleNav} to='/founders'>Founders</NavLink>
            <NavLink onClick={handleNav} to='/boardmembers'>Board Members</NavLink>
            <NavLink onClick={handleNav} to='/advisoryteam'>Advisory Team</NavLink>
            <NavLink onClick={handleNav} to='/technologyteam'>Technology Team</NavLink>
            <NavLink onClick={handleNav} to='/supportteam'>Support Team</NavLink>
          </ul>
          <NavLink onClick={handleNav} to='/projects'>Projects</NavLink>
          <NavLink onClick={handleNav} to='/events'>Events</NavLink>
          <NavLink onClick={handleNav} to='/contact'>Contact</NavLink>
      
        </ul>
        <div className="hamburger">
        <svg onClick={()=>(setNavOpen((n)=>(!n)))} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </div>
      </nav>
    </>
  );
}
