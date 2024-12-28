import { useEffect } from "react";
import OpenProjectContainer from "../components/OpenProject/OpenProjectContainer/OpenProjectContainer";

export default function OpenProject(){
    useEffect(function(){
        window.scrollTo({
            top:0,
            behavior:"instant"
        })
    },[])
    return(
        <>
            <OpenProjectContainer />
        </>
    )
}