import { useContext, useEffect, useState } from "react";
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
  }, [currentImage]);
  return (
    <div className="hero">
      <div className="hero-company-name">
        <h1>
          Welcome to KEABI Africa Community Development and Human Rights
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
