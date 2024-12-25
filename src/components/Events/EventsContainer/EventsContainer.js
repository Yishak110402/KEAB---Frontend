import { useContext } from "react";
import Event from "./Event";
import "./EventsContainer.css";
import { GeneralContext } from "../../../hooks/GeneralContext";
export default function EventsContainer() {
  const { events, loadingEvent } = useContext(GeneralContext);
  console.log(events);

  return (
    <div className="events-container">
      {events.length !== 0 &&
        !loadingEvent &&
        events.map((event, id) => <Event event={event} id = {id}  />)}
      {events.length === 0 && !loadingEvent && (
        <div className="no-events">
          <p>No Events have been posted</p>
        </div>
      )}
      {
        loadingEvent && (
            <div className="loader">
                <img src="https://i.postimg.cc/9QP2MTv1/editted-logo.jpg" alt="KEAB Logo" />
            </div>
        )
      }
    </div>
  );
}
