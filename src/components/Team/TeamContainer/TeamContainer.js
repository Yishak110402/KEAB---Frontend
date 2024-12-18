import AdvisoryTeam from "../AdvisoryTeam/AdvisoryTeam";
import ExecutiveMembers from "../ExecutiveMembers/executiveMembers";
import TechnologyTeam from "../TechnologyTeam/TechnologyTeam";
import "./TeamContainer.css"

export default function TeamContainer(){
    return(
        <div className="teams-container">
            <ExecutiveMembers />
            <AdvisoryTeam />
            <TechnologyTeam />
        </div>
    )
}