import { useEffect, useRef, useState } from "react"
import "./AdditionalInisights.css"

export default function AdditionalInsights(){
    const [visible, setVisible] = useState(false)
    const insightRef = useRef()
    useEffect(function(){
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            if(entry.isIntersecting){
                setVisible(true)
            }
        },{threshold:[0.4, 1]})
        observer.observe(insightRef.current)
    },[])
    return(
        <div ref={insightRef} className={`additional-insights ${visible ? "visible" : ""}`}>
            <div className="shade" />
            <h1>Additional Insights</h1>
            <p>In addition to our primary programs, KEAB Africa is also deeply involved in advocacy for systemic change. We aim to influence national and regional policies on issues such as gender equality, environmental justice, and the protection of human rights. We advocate for stronger legal frameworks that support marginalized communities and strive to build a network of informed, empowered citizens who can act as changemakers.</p>
            <p>Furthermore, our commitment to innovative solutions is reflected in our approach to technology and digital inclusion. We leverage technology to expand our reach, enhance the effectiveness of our programs, and engage with communities in new and meaningful ways. Digital platforms are used to deliver educational content, provide legal advice, and connect communities with the resources they need to thrive.</p>
            <p>At KACDHRO, we are driven by the belief that true change begins at the grassroots level. Through our extensive network of community partners and stakeholders, we are able to amplify the voices of those who are most affected by injustice and inequality, ensuring they are at the center of every solution. By promoting collective action, we aim to create lasting, transformative change that uplifts all people across Ethiopia and beyond.</p>
            <p>KEAB Africa Community Development and Human Rights Organization (KACDHRO) continues to work toward building an Africa where everyone has the chance to live a life of dignity, peace, and opportunity.</p>
        </div>
    )
}