import { useParams } from "react-router-dom";
import "./OpenTeamContainer.css";
import { GeneralContext } from "../../../hooks/GeneralContext";
import { useContext, useEffect } from "react";

export default function OpenTeamContainer() {
  useEffect(function () {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  const { id } = useParams();
  const splitName = id.split("-");
  const name = splitName[0] + " " + splitName[1];
  const { team } = useContext(GeneralContext);
  const selectedMember = team.filter((t) => t.name.includes(name))[0];
  return (
    <div className="open-team-container">
      <div className="img-container">
        <img src={selectedMember.image} alt={selectedMember.name} />
      </div>
      <div className="bio-container">
        <h1>{selectedMember.name}</h1>
        <h3>{selectedMember.position}</h3>
        {selectedMember.description.map((d) => (
          <p>{d}</p>
        ))}
      </div>
    </div>
  );
}
