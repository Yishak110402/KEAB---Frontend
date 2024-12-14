import { useEffect } from "react";
import EventContent from "../components/OpenEvent/EventContent/EventContent";

export default function OpenEvent(){
    useEffect(function(){
        window.scrollTo({
            top:0,
            behavior:"instant"
        })
    },[])
    return(
        <>
            <EventContent />
        </>
    )
}