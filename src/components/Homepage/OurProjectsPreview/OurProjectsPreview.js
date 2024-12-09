import { useNavigate } from "react-router-dom";
import './OurProjectsPreview.css'

export default function OurProjectsPreview() {
const navigate = useNavigate()
  return (
    <div className="projects-preview">
      <div className="txt-content">
        <h1>
          Our organization has been involved in several projects that aimed at
          benefiting the community and the environment
        </h1>
        <button onClick={()=>(navigate('/projects'))}>Check out these projects</button>
      </div>
      <div className="img-content">
        <img src="https://i.postimg.cc/HL1CmXMq/project-preview.jpg" alt="img-preview" />
      </div>
    </div>
  );
}
