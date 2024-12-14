import ExecutiveMembers from "../ExecutiveMembers/ExecutiveMembers"
import "./TeamMembers.css"
export default function TeamMember(){
    return(
        <div className="team-members">
            <h1>Team Members</h1>
            <ExecutiveMembers />
        </div>
    )
}