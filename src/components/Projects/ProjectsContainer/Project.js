import { useContext } from "react"
import { GeneralContext } from "../../../hooks/GeneralContext"

export default function Project(){
    const {projects} = useContext(GeneralContext)
    return(
        <div className="project">
            
        </div>
    )
}