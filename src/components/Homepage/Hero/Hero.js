import { useContext, useEffect, useRef, useState } from "react";
import "./Hero.css";
import { GeneralContext } from "../../../hooks/GeneralContext";
export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const { heroImages } = useContext(GeneralContext);
  useEffect(function () {
    const imagesInterval = setInterval(() => {
      setCurrentImage((lastImage) => (lastImage + 1) % heroImages.length);
    }, 10000);
    return ()=>{
        clearInterval(imagesInterval)
    }
  },[currentImage, heroImages.length]);
  const h1Ref = useRef()
  const [visible, setVisible] = useState(false)
  useEffect(function(){
    const observer = new IntersectionObserver((entries)=>{
      const entry = entries[0]
      if(entry.isIntersecting){
        setVisible(true)
      }
    },{
      threshold:[0.8, 1]
    })
    observer.observe(h1Ref.current)
  },[])
  return (
    <div className={`hero ${visible ?"visible" : ''}`}>
      <div className="hero-company-name">
        <h1 ref={h1Ref}>
          Welcome to KEAB Africa Community Development and Human Rights
          Organization (KACDHRO)
        </h1>
      </div>
      <div className="hero-image">
        <img
          src={heroImages[currentImage]}
          alt="KEAB Logo"
          loading="lazy"
          key={currentImage}
        />
      </div>
    </div>
  );
}
