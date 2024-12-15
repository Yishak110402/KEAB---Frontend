import { useContext } from "react";
import Member from "../Member/Member";
import { GeneralContext } from "../../../hooks/GeneralContext";

export default function ExecutiveMembers(){
    const {team} = useContext(GeneralContext)
    const execTeam = team.filter((t)=>(t.team === "executive"))
    return(
        <div className="teams-list">
            <h1>Founders</h1>
            <div className="container">
               {
                execTeam.map((team, index)=>(
                    <Member team = {team} index = {index} />
                ))
               }
            </div>
        </div>
    )
}