import { useContext } from "react";
import Member from "../TeamMembers/Member";
import { GeneralContext } from "../../../hooks/GeneralContext";

export default function ExecutiveMembers(){
    const {team} = useContext(GeneralContext)
    return(
        <div className="team-list">
            <h2>Executive Team</h2>
            <div className="members">
               {
                team.executiveTeam.map((member, i)=>(
                    <Member member={member} id = {i}/>
                ))
               }
            </div>
        </div>
    )
}