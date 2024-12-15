import "./Member.css"
export default function Member({team, index}){    
    return(
        <div className="member">
            <img src={team.image} alt="" />
            <h3>{team.name}</h3>
            <h4>{team.position}</h4>
        </div>
    )
}