import { useContext } from "react"
import Project from "./Project"
import "./ProjectsContainer.css"
import { GeneralContext } from "../../../hooks/GeneralContext"
export default function ProjectsContainer(){
    const {projects} = useContext(GeneralContext)
    return(
        <div className="projects-container">
            {
                projects.map((project, index)=>(
                    <Project index={index} project = {project} />
                ))
            }
        </div>
    )
}