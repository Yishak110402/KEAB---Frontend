import { useParams } from "react-router-dom";
import "./EventContent.css";
import { useContext, useState } from "react";
import { GeneralContext } from "../../../hooks/GeneralContext";
export default function EventContent() {
  const { id } = useParams();
  const { events } = useContext(GeneralContext);
  const wantedEvent = events[id];
  const [wantedImage, setWantedImage] = useState(0)
  return (
    <div className="event-content">
      {wantedEvent && <h1>{wantedEvent.name}</h1>}
      {wantedEvent && wantedEvent.description.map((d) => <p>{d}</p>)}
      {wantedEvent && (
        <div className="event-images">
          <div className="selected-image">
            <img src={wantedEvent.images[wantedImage]} alt="" />
          </div>
          <div className="all-images">
            {wantedEvent.images.map((image, index) => (
              <img className={`${wantedImage === index ? "selected" : ""}`} onClick={()=>(setWantedImage(index))} src={image} alt="" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
