import { useNavigate } from "react-router-dom"

export default function Project({project, index}){
    const navigate = useNavigate()
    return(
        <div style={{
            backgroundImage:`url(${project.images[0]})`
        }} className="project">
            <h1>{project.name}</h1>
            <button onClick={()=>(navigate(`/projects/${index}`))}>See Full Project Detail</button>
            <div className="shade"  />
        </div>
    )
}