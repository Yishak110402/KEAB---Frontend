import { Link } from "react-router-dom";
import "./AboutPreview.css"
import { useEffect, useRef, useState } from "react";
export default function AboutPreview() {
    const [visible, setVisible] = useState(false)
    const aboutRef = useRef()
    useEffect(function(){
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            if(entry.isIntersecting){
                setVisible(true)
            }
        })
        observer.observe(aboutRef.current)
    },[])
    return (
            <div ref={aboutRef}  className={`about-preview ${visible ? "visible" : ""}`}>
                <div className="shade"></div>
                <h1>KEAB</h1>
                <p>KEAB Africa Community Development and Human Rights Promotion Organization (KACDHRPO) is a dedicated civil society organization based in Hawassa, Ethiopia. Founded with the belief that community-centered approaches lead to sustainable development, we are committed to fostering justice, equality, and opportunity for all. Our work spans diverse fields—from human rights advocacy to environmental protection and community empowerment—to build resilient communities across Ethiopia and Africa.</p>
                <Link to="/aboutus">Read More</Link>                
            </div>
    );
}