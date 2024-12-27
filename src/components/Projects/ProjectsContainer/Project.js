export default function Project({project}){
    return(
        <div style={{
            backgroundImage:`url(${project.images[0]})`
        }} className="project">
            <h1>{project.name}</h1>
            <button>See Full Project Detail</button>
            <div className="shade"  />
        </div>
    )
}