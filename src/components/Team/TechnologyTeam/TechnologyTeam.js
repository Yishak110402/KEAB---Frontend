import { useContext } from "react"
import { GeneralContext } from "../../../hooks/GeneralContext"
import Member from "../Member/Member"

export default function TechnologyTeam(){
    const {team} = useContext(GeneralContext)
    const techTeam = team.filter((t)=>(t.team === "technology"))
    return(
        <div className="teams-list">
            <h1>Technology Team</h1>
            <div className="container">
            {
                techTeam.map((team, index)=>(
                    <Member team={team} index = {index} />
                ))
            }
            </div>
        </div>
    )
}