import { useParams } from "react-router-dom";
import "./OpenTeamContainer.css";
import { GeneralContext } from "../../../hooks/GeneralContext";
import { useContext } from "react";

export default function OpenTeamContainer() {
  const { id } = useParams();
  const splitName = id.split("-");
  const name = splitName[0] + " " + splitName[1];
  const { team } = useContext(GeneralContext);
  const selectedMember = team.filter((t) => t.name.includes(name))[0];
  return (
    <div className="open-team-container">
      <h1>{selectedMember.name}</h1>
      
    </div>
  );
}
