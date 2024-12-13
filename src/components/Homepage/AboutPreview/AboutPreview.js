import { Link } from "react-router-dom";
import "./AboutPreview.css"
export default function AboutPreview() {
    return (
            <div className="about-preview">
                <div className="shade"></div>
                <h1>KEAB</h1>
                <p>KEABI Africa Community Development and Human Rights Promotion Organization (KACDHRPO) is a dedicated civil society organization based in Hawassa, Ethiopia. Founded with the belief that community-centered approaches lead to sustainable development, we are committed to fostering justice, equality, and opportunity for all. Our work spans diverse fields—from human rights advocacy to environmental protection and community empowerment—to build resilient communities across Ethiopia and Africa.</p>
                <Link to="/aboutus">Read More</Link>                
            </div>
    );
}