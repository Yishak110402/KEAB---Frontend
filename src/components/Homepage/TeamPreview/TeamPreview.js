import { Link } from "react-router-dom";
import "./TeamPreview.css";
export default function TeamPreview() {
  return (
    <div className="team-preview">
      <div className="content">
        <Link to="/team">Learn more about our team members</Link>
      </div>
      <div className="team-image">
        <img src="https://i.postimg.cc/ncZChfGS/teams-preview.jpg" alt="" />
      </div>
    </div>
  );
}
