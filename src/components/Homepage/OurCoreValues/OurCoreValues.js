import { useContext } from "react"
import "./OurCoreValues.css"
import Value from "./Value"
import { GeneralContext } from "../../../hooks/GeneralContext"
export default function OurCoreValues(){
    const {coreValues}= useContext(GeneralContext)
    console.log(coreValues);
    
    return(
        <div className="core-values">
            <h1>Our Core values</h1>
            <div className="values">
                {
                    coreValues.map((coreValue)=>(
                        <Value coreValue={coreValue}/>
                    ))
                }
            </div>
        </div>
    )
}