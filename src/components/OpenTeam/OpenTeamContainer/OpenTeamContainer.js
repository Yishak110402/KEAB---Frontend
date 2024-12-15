import { useParams } from "react-router-dom"
import "./OpenTeamContainer.css"

export default function OpenTeamContainer(){
    const {id} = useParams()
    return(
        <div className="open-team-container">
            <h1>{id}</h1>
        </div>
    )
}