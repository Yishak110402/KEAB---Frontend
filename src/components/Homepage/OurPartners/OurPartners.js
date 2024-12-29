import { useEffect, useRef, useState } from "react"
import "./OurPartners.css"

export default function OurPartners(){
    const partnersRef = useRef()
    const [visible, setVisible] = useState(false)
    useEffect(function(){
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            if(entry.isIntersecting){
                setVisible(true)
            }
        },{
            threshold:[0.2,1]
        })
        observer.observe(partnersRef.current)
    },[])
    return(
        <div ref={partnersRef} className={`our-partners ${visible ? "visible" : ""}`}>
            <h1>Our Partners</h1>
            <div className="partners-container">
                <div className="partner">
                    <img src="https://i.postimg.cc/sgzshFqY/Gudumale-2.png" alt="GSI logo" />
                    <h2>Gudumale Sustainability Initiative</h2>
                </div>
                <div className="partner">
                    <img src="https://i.postimg.cc/G3sCgh1P/Hale.png" alt="HALE logo" />
                    <h2>HALE-Human Rights and Inclusion Network</h2>
                </div>
                <div className="partner">
                    <img src="https://i.postimg.cc/C1Rggwng/vitallogo.jpg" alt="GSI logo" />
                    <h2>Vital Water Purifier and Birtu Society</h2>
                </div>
            </div>
        </div>
    )
}