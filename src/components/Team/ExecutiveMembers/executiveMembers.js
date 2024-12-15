import Member from "../Member/Member";

export default function ExecutiveMembers(){
    return(
        <div className="teams-list">
            <h1>Executive Team</h1>
            <div className="container">
                <Member />
                <Member />
                <Member />
                <Member />
            </div>
        </div>
    )
}