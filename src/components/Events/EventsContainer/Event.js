import { useNavigate } from "react-router-dom";

export default function Event({event, id}) {
  const navigate = useNavigate()
  let formattedDate = new Date(event.date)
  formattedDate = formattedDate.toDateString() 
  return (
    <div className="event">
      <img
        src={event.images[0]}
        alt="KEAB Logo"
        loading="lazy"
      />
      <h3>{event.name}</h3>
      <h4>Date: {formattedDate}</h4>
      <button onClick={()=>(navigate(`/events/${id}`))}>See Full Detail</button>
    </div>
  );
}
