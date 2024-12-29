import { useEffect, useRef, useState } from 'react'
import './AboutUsShort.css'
export default function AboutUsShort(){
    const shortRef = useRef()
    const [visible, setVisible] = useState(false)
    useEffect(function(){
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            if(entry.isIntersecting){
                setVisible(true)
            }
        },{
            threshold:[0.9,1]
        })
        observer.observe(shortRef.current)
    },[])
    return(
        <div ref={shortRef} className={`about-us-short ${visible ? "visible" : ""}`}>
            <h1>About The Organization</h1>
            <p>KEAB Africa Community Development and Human Rights Organization (KACDHRO) is a prominent civil society organization located in Hawassa, Ethiopia. Our organization was founded with the conviction that sustainable development and human rights cannot be separated, and that real change is only possible when communities are directly involved in the development process. We envision a world where every individual, especially those from marginalized backgrounds, can fully participate in and benefit from the democratic, social, and economic systems that shape their lives.</p>
            <p>At KACDHRO, we integrate a holistic approach that recognizes the interconnectedness of human rights, social justice, economic development, and environmental sustainability. Our work is focused on addressing the challenges that people face, particularly in Ethiopia and the broader African context. These include issues such as poverty, gender inequality, youth unemployment, and environmental degradation. We aim to empower communities to overcome these barriers by providing the knowledge, tools, and support needed to foster long-term positive change.</p>
            <p>We believe that when communities are equipped with the right resources and support systems, they are able to drive their own development. Our work spans advocacy, capacity building, social services, legal support, and grassroots mobilization—ensuring that our approach is both comprehensive and community-driven.</p>
            <p></p>
        </div>    
    )
}