import { useParams } from "react-router-dom"

export default function TeamBio(){
    const {id} = useParams()
    return(
        <div className="team-bio">
            <h1>{id}</h1>
        </div>
    )
}