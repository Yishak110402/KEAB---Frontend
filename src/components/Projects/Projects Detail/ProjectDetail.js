import './ProjectDetail.css'

export default function ProjectDetail({selectedProject,setProjectDetail}) {
  return (
    <div className='project-detail'>
                    <button onClick={()=>setProjectDetail(false)}>Back</button>
                  <h1>{selectedProject.title}</h1>
            <div className="project-img">
                  <img src={selectedProject.imageName} alt="jjj" />
              </div>
                  <span className='date-location'>{selectedProject.dateLocation}</span>
              <div className="project-description">
                  <p className='short-description'>{selectedProject.description}</p>
              </div>
              
    </div>
  )
}
