import { useEffect } from "react";
import MessageSection from "../components/CompleteExecMessage/MessageSection";

export default function CompleteExecMessage(){
    useEffect(function(){
        window.scrollTo({
            top:0,
            behavior:'instant'
        })
    })
    return(
        <>
            <MessageSection />
        </>
    )
}