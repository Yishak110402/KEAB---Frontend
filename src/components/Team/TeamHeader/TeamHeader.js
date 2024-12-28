import { useEffect } from "react"
import "./TeamHeader.css"
export default function TeamHeader(){
    useEffect(function(){
        window.scrollTo({
            top:0,
            behavior:"instant"
        })
    },[])
    return(
        <div className="team-header">
            <h1>Our Team</h1>
        </div>
    )
}