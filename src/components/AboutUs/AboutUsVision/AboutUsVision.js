import { useEffect, useRef, useState } from "react"
import "./AboutUsVision.css"

export default function AboutUsVision(){
    const [visible, setVisible] = useState(false)
    const visionRef = useRef()
    useEffect(function(){
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            if(entry.isIntersecting){
                setVisible(true)
            }
        },{threshold:[0.7,1]})
        observer.observe(visionRef.current)
    },[])
    return(
        <div ref={visionRef} className={`about-vision ${visible ? "visible" : ""}`}>
            <div className="shade"></div>
            <h1>Vision</h1>
            <p>Our vision is to create a just, inclusive, and empowered society in Africa—one where human rights are protected, marginalized groups are empowered, communities are resilient, and all individuals can thrive in a sustainable environment. We aspire to a future in which each person has equitable access to opportunities for education, employment, healthcare, and a clean, safe environment, and where their voices are heard and respected in all decisions that impact their lives..</p>
        </div>
    )
}