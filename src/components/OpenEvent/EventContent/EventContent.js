import { useParams } from "react-router-dom"
import './EventContent.css'
import { useContext } from "react"
import { GeneralContext } from "../../../hooks/GeneralContext"
export default function EventContent(){
    const {id} = useParams()
    const {events} = useContext(GeneralContext)
    const wantedEvent = events[id]
    console.log(wantedEvent);
    
    return(
        <div className="event-content">
            {
                wantedEvent &&
            <h1>{wantedEvent.name}</h1>
        }
        {
            wantedEvent && 
            wantedEvent.description.map((d)=>(
                <p>{d}</p>
            ))
        }
        </div>
)
}