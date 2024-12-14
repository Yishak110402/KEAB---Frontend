import { useState } from 'react'
import './ProjectsMainComponent.css'

const arr=[1,2,3,4]

export default function ProjectsMainComponent({setProjectDetail,setSelectedProject,projects}) {


  function handleChange(index){
      setProjectDetail(true)
      setSelectedProject(index)
  }

  return (
    <div className='projects-main-component'>
        <div className="latest-project">
              <div className="project-img">
                  <img src="./assets/bootcamp2.jpg" alt="jjj" />
              </div>
              <div className="project-description">
                  <h1>Strengthening Democracy and Promotion of Good Governance Bootcamp for selected Young Leaders</h1>
                  <span className='date-location'>Dec 15, 2024 - Hawassa, Ethiopia</span>
                  <p className='short-description'>This project aims to empower young leaders in Hawassa City by strengthening their understanding of democracy, good governance, and human rights. Through capacity-building training, it focuses on enhancing accountability, transparency, conflict management, and vision development to inspire positive change within their communities.</p>
                  <button onClick={()=>handleChange(0)}>Read more</button>
              </div>
       </div>

       <div className="other-projects">
            <h1>Explore Our Other Initiatives</h1>
            <div className="projects-container">
                  {projects.map((card,index) =>(
                        <div className="project-card">
                              <img src="./assets/bootcamp 1.jpg" alt="img" />
                              <span>
                                  <h4 className='title'>{projects[index].title}</h4>
                                  <button onClick={()=>handleChange(index)}>Read more</button>
                              </span>
                      </div>
                  ))}
            </div>
            
       </div>
      
    </div>
  )
}
