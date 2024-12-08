import { Link } from "react-router-dom";
import "./TeamPreview.css";
export default function TeamPreview() {
  return (
    <div className="team-preview">
      <div className="shade" />
      <div className="content">
        <Link to="/team">Learn More about our Team Members</Link>
      </div>
    </div>
  );
}
