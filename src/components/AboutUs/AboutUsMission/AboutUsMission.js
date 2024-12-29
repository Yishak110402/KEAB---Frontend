import { useEffect, useRef, useState } from "react"
import "./AboutUsMission.css"
export default function AboutUsMission(){
    const [visible, setVisible] = useState(false)
        const missionRef = useRef()
        useEffect(function(){
            const observer = new IntersectionObserver((entries)=>{
                const entry = entries[0]
                if(entry.isIntersecting){
                    setVisible(true)
                }
            },{threshold:[0.7,1]})
            observer.observe(missionRef.current)
        },[])
    return(
        <div ref={missionRef} className={`about-mission ${visible ? "visible" : ""}`}>
            <div className="shade"></div>
            <h1>Mission</h1>
            <p>KEAB Africa’s mission is to advance community development and human rights by promoting social justice, equality, and environmental sustainability. Our focus is on advocacy, education, civic engagement, and the provision of essential social services. We aim to ensure that marginalized groups—especially women, youth, and children—are not only beneficiaries of these efforts but are also actively involved in shaping and driving the change they want to see.</p>
        </div>
    )
}