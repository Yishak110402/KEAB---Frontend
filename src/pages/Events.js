import { useEffect } from "react";
import EventsContainer from "../components/Events/EventsContainer/EventsContainer";
import EventsHeader from "../components/Events/EventsHeader/EventsHeader";

export default function Events(){
    useEffect(function(){
        window.scrollTo({
            top:0,
            behavior:"instant"
        })
    },[])
    return(
        <>
            <EventsHeader />
            <EventsContainer />
        </>
    )
}