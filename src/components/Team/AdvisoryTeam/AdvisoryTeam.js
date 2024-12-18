import { useContext } from "react";
import Member from "../Member/Member";
import { GeneralContext } from "../../../hooks/GeneralContext";
export default function AdvisoryTeam() {
  const { team } = useContext(GeneralContext);
  const advisoryTeam = team.filter((t) => t.team === "advisory");
  return (
    <div className="teams-list">
      <h1>Advisory Team</h1>
      <div className="container">
        {advisoryTeam.map((team, index) => (
          <Member team={team} index={index} />
        ))}
      </div>
    </div>
  );
}
