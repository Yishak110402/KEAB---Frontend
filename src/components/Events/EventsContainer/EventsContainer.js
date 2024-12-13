import Event from "./Event"
import "./EventsContainer.css"
export default function EventsContainer() {
    return (
        <div className="events-container">
            <Event />
            <Event />
            <Event />
        </div>
    )
}