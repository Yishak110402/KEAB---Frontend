import { useContext } from "react"
import "./SupportTeam.css"
import { GeneralContext } from "../../../hooks/GeneralContext"
export default function SupportTeam(){
    const {team} = useContext(GeneralContext)
    const supportTeam = team.filter((t)=>(
        t.team === "support"
    ))
    console.log(supportTeam);
    
    return(
        <div className="support-team">
            <h1>Support Team</h1>
            <div className="support-team-list">
                {
                    supportTeam.map((team)=>(
                        <div className="support-member">
                            <h2>{team.name}</h2>
                            <h3>{team.position}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}