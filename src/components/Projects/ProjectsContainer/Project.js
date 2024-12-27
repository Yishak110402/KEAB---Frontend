import { useContext } from "react"
import { GeneralContext } from "../../../hooks/GeneralContext"

export default function Project(){
    const {projects} = useContext(GeneralContext)
    return(
        <div style={{
            backgroundImage:`url(${projects[0].images[0]})`
        }} className="project">
            <h1>{projects[0].name}</h1>
        </div>
    )
}