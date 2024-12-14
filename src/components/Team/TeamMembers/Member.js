import { useNavigate } from "react-router-dom"
import "./Member.css"
export default function Member({id,member={
    image : "https://i.postimg.cc/prLGNbnY/yohanan-bio-image.jpg",
    name:"Yohanan Yokamo Yotona (LLB, BSc, LLM, PhD Cand)",
    position:"Founder and Executive Director | Human Rights Advocate | Ph.D. in Community Development Fellow | Law Lecturer, Community Development and Governance Specialist"
}}){
    const navigate = useNavigate()
    return(
        <div onClick={()=>(navigate(`/team/${id}`))} className="member">
            <img src={member.image} alt="bio img" />
            <h3>{member.name}</h3>
            <h4>{member.position}</h4>
        </div>
    )
}