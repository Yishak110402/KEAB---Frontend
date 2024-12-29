import { useContext, useEffect, useRef, useState } from "react"
import "./OurCoreValues.css"
import Value from "./Value"
import { GeneralContext } from "../../../hooks/GeneralContext"
export default function OurCoreValues(){
    const {coreValues}= useContext(GeneralContext)
    const h1Ref = useRef()
    const [visible, setVisible] = useState(false)
    useEffect(function(){
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            if(entry.isIntersecting){
                setVisible(true)
            }
        },{
            threshold:[0.9,1]
        })
        observer.observe(h1Ref.current)
    },[])
    return(
        <div className={`core-values ${visible ? "visible" : ""}`}>
            <h1 ref={h1Ref}>Our Core values</h1>
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