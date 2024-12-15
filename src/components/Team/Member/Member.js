import { useContext } from "react"
import "./Member.css"
import { GeneralContext } from "../../../hooks/GeneralContext"
export default function Member(){
    const {team} = useContext(GeneralContext)
    return(
        <div className="member">
            <img src="https://i.postimg.cc/s2vXWD1W/natnael-ashenafi-bio.jpg" alt="" />
            <h3>{team[0].name}</h3>
            <h4>{team[0].position}</h4>
        </div>
    )
}