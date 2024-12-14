import './Projects.css'
import ProjectsHeader from '../components/Projects/Projects Header/ProjectsHeader'
import ProjectsMainComponent from '../components/Projects/Projects Main Content/ProjectsMainComponent'
import ProjectDetail from '../components/Projects/Projects Detail/ProjectDetail'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const projects=[
  {
      title:"Strengthening Democracy and Promotion of Good Governance Bootcamp for selected Young Leaders",
      dateLocation:"Dec 15, 2024 - Hawassa, Ethiopia",
      description:"This project aims to empower young leaders in Hawassa City by strengthening their understanding of democracy, good governance, and human rights. Through capacity-building training, it focuses on enhancing accountability, transparency, conflict management, and vision development to inspire positive change within their communities.This project aims to empower young leaders in Hawassa City by strengthening their understanding of democracy, good governance, and human rights. Through capacity-building training, it focuses on enhancing accountability, transparency, conflict management, and vision development to inspire positive change within their communities.This project aims to empower young leaders in Hawassa City by strengthening their understanding of democracy, good governance, and human rights. Through capacity-building training, it focuses on enhancing accountability, transparency, conflict management, and vision development to inspire positive change within their communities.This project aims to empower young leaders in Hawassa City by strengthening their understanding of democracy, good governance, and human rights. Through capacity-building training, it focuses on enhancing accountability, transparency, conflict management, and vision development to inspire positive change within their communities.This project aims to empower young leaders in Hawassa City by strengthening their understanding of democracy, good governance, and human rights. Through capacity-building training, it focuses on enhancing accountability, transparency, conflict management, and vision development to inspire positive change within their communities.This project aims to empower young leaders in Hawassa City by strengthening their understanding of democracy, good governance, and human rights. Through capacity-building training, it focuses on enhancing accountability, transparency, conflict management, and vision development to inspire positive change within their communities.",
      imageName:"./assets/bootcamp2.jpg"
  },
  {
      title:"Strengthening Democracy and Promotion of Good Governance Bootcamp for selected Young Leaders",
      dateLocation:"Dec 15, 2024 - Hawassa, Ethiopia",
      description:"This project aims to empower young leaders in Hawassa City by strengthening their understanding of democracy, good governance, and human rights. Through capacity-building training, it focuses on enhancing accountability, transparency, conflict management, and vision development to inspire positive change within their communities.This project aims to empower young leaders in Hawassa City by strengthening their understanding of democracy, good governance, and human rights. Through capacity-building training, it focuses on enhancing accountability, transparency, conflict management, and vision development to inspire positive change within their communities.This project aims to empower young leaders in Hawassa City by strengthening their understanding of democracy, good governance, and human rights. Through capacity-building training, it focuses on enhancing accountability, transparency, conflict management, and vision development to inspire positive change within their communities.This project aims to empower young leaders in Hawassa City by strengthening their understanding of democracy, good governance, and human rights. Through capacity-building training, it focuses on enhancing accountability, transparency, conflict management, and vision development to inspire positive change within their communities.This project aims to empower young leaders in Hawassa City by strengthening their understanding of democracy, good governance, and human rights. Through capacity-building training, it focuses on enhancing accountability, transparency, conflict management, and vision development to inspire positive change within their communities.This project aims to empower young leaders in Hawassa City by strengthening their understanding of democracy, good governance, and human rights. Through capacity-building training, it focuses on enhancing accountability, transparency, conflict management, and vision development to inspire positive change within their communities.",
      imageName:"./assets/bootcamp2.jpg"
  },
  {
      title:"t1 Strengthening Democracy and Promotion of Good Governance Bootcamp for selected Young Leaders",
      dateLocation:"Dec 15, 2024 - Hawassa, Ethiopia",
      description:"This project aims to empower young leaders in Hawassa City by strengthening their understanding of democracy, good governance, and human rights. Through capacity-building training, it focuses on enhancing accountability, transparency, conflict management, and vision development to inspire positive change within their communities.This project aims to empower young leaders in Hawassa City by strengthening their understanding of democracy, good governance, and human rights. Through capacity-building training, it focuses on enhancing accountability, transparency, conflict management, and vision development to inspire positive change within their communities.This project aims to empower young leaders in Hawassa City by strengthening their understanding of democracy, good governance, and human rights. Through capacity-building training, it focuses on enhancing accountability, transparency, conflict management, and vision development to inspire positive change within their communities.This project aims to empower young leaders in Hawassa City by strengthening their understanding of democracy, good governance, and human rights. Through capacity-building training, it focuses on enhancing accountability, transparency, conflict management, and vision development to inspire positive change within their communities.This project aims to empower young leaders in Hawassa City by strengthening their understanding of democracy, good governance, and human rights. Through capacity-building training, it focuses on enhancing accountability, transparency, conflict management, and vision development to inspire positive change within their communities.This project aims to empower young leaders in Hawassa City by strengthening their understanding of democracy, good governance, and human rights. Through capacity-building training, it focuses on enhancing accountability, transparency, conflict management, and vision development to inspire positive change within their communities.",
      imageName:"./assets/bootcamp2.jpg"
  },

  {
    title:"t2 Strengthening Democracy and Promotion of Good Governance Bootcamp for selected Young Leaders",
    dateLocation:"Dec 15, 2024 - Hawassa, Ethiopia",
    description:"This project aims to empower young leaders in Hawassa City by strengthening their understanding of democracy, good governance, and human rights. Through capacity-building training, it focuses on enhancing accountability, transparency, conflict management, and vision development to inspire positive change within their communities.This project aims to empower young leaders in Hawassa City by strengthening their understanding of democracy, good governance, and human rights. Through capacity-building training, it focuses on enhancing accountability, transparency, conflict management, and vision development to inspire positive change within their communities.This project aims to empower young leaders in Hawassa City by strengthening their understanding of democracy, good governance, and human rights. Through capacity-building training, it focuses on enhancing accountability, transparency, conflict management, and vision development to inspire positive change within their communities.This project aims to empower young leaders in Hawassa City by strengthening their understanding of democracy, good governance, and human rights. Through capacity-building training, it focuses on enhancing accountability, transparency, conflict management, and vision development to inspire positive change within their communities.This project aims to empower young leaders in Hawassa City by strengthening their understanding of democracy, good governance, and human rights. Through capacity-building training, it focuses on enhancing accountability, transparency, conflict management, and vision development to inspire positive change within their communities.This project aims to empower young leaders in Hawassa City by strengthening their understanding of democracy, good governance, and human rights. Through capacity-building training, it focuses on enhancing accountability, transparency, conflict management, and vision development to inspire positive change within their communities.",
    imageName:"./assets/bootcamp2.jpg"
  }
]


export default function Projects() {
  const [projectDetail,setProjectDetail]=useState(false)
  const [selectedProject, setSelectedProject]=useState(null)
  const navigate = useNavigate()
  return (
    <div className='projects'>
        {/* <Navbar/> */}
        <ProjectsHeader/>
        {projectDetail ? (
            <>
            <ProjectDetail 
                selectedProject={projects[selectedProject]}
                setProjectDetail={setProjectDetail}
            />
            <div className="call-to-action"> 
                    <img src="./assets/call to action.jpg" alt="call to action" />
                    <div className="prompt">
                        <h1>Ready to Make a Difference?</h1>
                        <p>Contact us to learn how you can support or join our mission.</p>
                        <button onClick={()=>(navigate('/contact'))}>Contact Us</button>
                    </div>
             </div> 
            </>
        ) : (
            <>
                <ProjectsMainComponent
                    setProjectDetail={setProjectDetail}
                    setSelectedProject={setSelectedProject}
                    projects={projects}
                />
            </>
        )}
    </div>
  )
}
