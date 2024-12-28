import { useParams } from "react-router-dom"
import "./OpenProjectContainer.css"
import { useContext, useState } from "react"
import {GeneralContext} from "./../../../hooks/GeneralContext"
export default function OpenProjectContainer(){
    const {id} = useParams()
    const {projects} = useContext(GeneralContext)
    const [selectedImage, setSelectedImage] = useState(0)
    return(
        <div className="open-project">
            <div className="title-container" style={{
                backgroundImage:`url(${projects[id].images[0]})`
            }}>
                <h1>{projects[id].name}</h1>
                <div className="shade" />
            </div>
            <div className="description-container">
                {
                    projects[id].description.map((description)=>(
                        <p>{description}</p>
                    ))
                }
            </div>
            <div className="images-container">
                <div className="all-images">
                    {
                        projects[id].images.map((image, index)=>(
                            <img className={selectedImage === index ? "selected" : ''} onClick={()=>(setSelectedImage(index))} src={image} alt="" />
                        ))
                    }
                </div>
                <div className="selected-image">
                    <img src={projects[id].images[selectedImage]} alt="" />
                </div>
            </div>
        </div>
    )
}