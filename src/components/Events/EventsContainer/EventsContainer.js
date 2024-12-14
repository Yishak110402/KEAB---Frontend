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
        events.map((event) => <Event event={event} />)}
        {
            events.length === 0 && !loadingEvent &&(
                <div className="no-events">
                    <p>No Events have been posted</p>
                    </div>
            )
        }
    </div>
  );
}
