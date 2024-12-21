import { useContext } from "react";
import Member from "../Member/Member";
import { GeneralContext } from "../../../hooks/GeneralContext";
export default function BoardMembers() {
  const { team } = useContext(GeneralContext);
  const boardMembers = team.filter((t) => t.team === "board");
  return (
    <div className="teams-list">
      <h1>Board Members</h1>
      <div className="container">
        {boardMembers.map((team, index) => (
          <Member team={team} index={index} />
        ))}
      </div>
    </div>
  );
}
