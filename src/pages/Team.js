import { useEffect } from "react";
import TeamContainer from "../components/Team/TeamContainer/TeamContainer";
import TeamHeader from "../components/Team/TeamHeader/TeamHeader";

export default function Team(){
    useEffect(function(){
        window.scrollTo({
            top:0,
            behavior:"instant"
        })
    },[])
    return(
        <>
            <TeamHeader />
            <TeamContainer />
        </>
    )
}