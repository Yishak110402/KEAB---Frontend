import { useNavigate } from "react-router-dom"
import "./Member.css"
export default function Member({team, index}){
    const navigate = useNavigate()    
    const splitName = team.name.split(" ")
    return(
        <div onClick={()=>(navigate(`/team/${splitName[0]}-${splitName[1]}`))} className="member">
            <img src={team.image} alt="" />
            <h3>{team.name}</h3>
            <h4>{team.position}</h4>
        </div>
    )
}