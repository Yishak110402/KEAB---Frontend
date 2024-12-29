import { useEffect, useRef, useState } from 'react'
import './KeyFocusAreas.css'
export default function KeyFocusAreas(){
    const [visible, setVisible] = useState(false)
    const keyAreasRef = useRef()
    useEffect(function(){
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0]    
            if(entry.isIntersecting){
                setVisible(true)
            }
        },{threshold:[0.4,1]})
        observer.observe(keyAreasRef.current)
    },[])
    return(
        <div ref={keyAreasRef} className={`focus-areas ${visible ? "visible" : ""}` }>
            <h1>Programs and Key Focus Areas</h1>
            <div className='focus-areas-list'>
                <div className='list'>
                    <h3>Community-Centered Justice</h3>
                    <p>Providing legal support and advocacy for equitable justice systems that serve all community members</p>
                </div>
                <div className='list'>
                    <h3>Environmental Justice and Protection</h3>
                    <p>Engaging in environmental advocacy, consercation, and resilience-building programs to protect natural resources and promote sustainable practices.</p>
                </div>
                <div className='list'>
                    <h3>Democracy, Good Governance, and Civic Engagement</h3>
                    <p>Empowering communities through education and dialogur to strengthen democratic governanve, promote transparency, and encourage civic participation</p>
                </div>
                <div className='list'>
                    <h3>Public Diplomacy and Dialogue</h3>
                    <p>Building bridges across communities and fostering mutual understanding to advocate for human rights and social Justice</p>
                </div>
                <div className='list'>
                    <h3>Human Rights</h3>
                    <p>Advocating for the protection and promotion of human rights, with a focus on addressing discrimination and supporting the rights of vulnerable populations</p>
                </div>
                <div className='list'>
                    <h3>Social Work Activities</h3>
                    <p>Delivering essential social services and support to underserved communities, including counseling and welfare services</p>
                </div>
                <div className='list'>
                    <h3>Women and Youth Empowerment</h3>
                    <p>Developing programs that provide skills training, economic oppurtunities, and leadership development for women and youth</p>
                </div>
                <div className='list'>
                    <h3>Child Advocacy</h3>
                    <p>Protecting the rights of children through advocacy and support services aimed at preventing abuse, ensuring access to education, and promoting health</p>
                </div>
                <div className='list'>
                    <h3>Community Library and Educational Initiatives</h3>
                    <p>Establishing community libraries and educational programs to foster lifelong learning and literacy</p>
                </div>
                <div className='list'>
                    <h3>Health Extension and Awareness Programs</h3>
                    <p>Conducting health awareness campaigns and programs to promote public health, hygiene, and wellness</p>
                </div>
                <div className='list'>
                    <h3>Peace Building and Conflict Resolution</h3>
                    <p>Facilitating dialogues and interventions to promote peaceful co-existence, mediate conflicts, and build resilient communities</p>
                </div>
            </div>
        </div>
    )
}