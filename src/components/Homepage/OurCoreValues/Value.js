import { useEffect, useRef, useState } from "react";

export default function Value({coreValue}) {
  const [visible, setVisible] = useState(false)
  const valueRef = useRef()
  useEffect(function(){
    const observer = new IntersectionObserver((entries)=>{
      const entry = entries[0]
      if(entry.isIntersecting){
        setVisible(true)
      }
    },{
      threshold:[0.9,1]
    })
    observer.observe(valueRef.current)
  },[])
  return (
    <div ref={valueRef} className={`value ${visible ? "visible" : ""}`}>
      <h3>{coreValue.title}</h3>
      <p>{coreValue.description}</p>
    </div>
  );
}
