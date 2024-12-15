import { useNavigate } from "react-router-dom"
import "./Member.css"
export default function Member({team, index}){
    const navigate = useNavigate()    
    return(
        <div onClick={()=>(navigate(`/team/${index}`))} className="member">
            <img src={team.image} alt="" />
            <h3>{team.name}</h3>
            <h4>{team.position}</h4>
        </div>
    )
}