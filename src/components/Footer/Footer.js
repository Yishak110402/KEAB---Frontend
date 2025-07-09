import { Link } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <img src="https://i.postimg.cc/9QP2MTv1/editted-logo.jpg" alt="" />
        <h1>KEAB Africa</h1>
      </div>
      <div className="essential-links">
        <h3>Essential Links</h3>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/events">Events</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </div>
      <div className="team-links">
        <h3>Team Links</h3>
        <ul>
          <Link to="/founders">Founders</Link>
          <Link to="/boardmembers">Board Members</Link>
          <Link to="/advisoryteam">Advisory Team</Link>
          <Link to="/technologyteam">Technology Team</Link>
          <Link to="/supportteam">Support Team</Link>
        </ul>
      </div>
      <div className="social-links">
        <h3>Social Links</h3>
        <ul>
          <a
            href="https://www.instagram.com/keab_africa_com.dev_hrs_org/profilecard/?igsh=MW12M2EyaTV2aDVhag=="
            target="_blank"
            rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.facebook.com/profile.php?id=100085925589696" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://www.linkedin.com/search/results/all/?origin=GLOBAL_SEARCH_HEADER&sid=c~Y" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://t.me/+M2MLYhtcZH83YjBk" target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a href="https://chat.whatsapp.com/LJ3dN8FmEnN6Kaoh5MR1qH" target="_blank" rel="noreferrer">
            Whatsapp
          </a>
        </ul>
      </div>

    </footer>
  );
}
