import { useEffect } from "react";
import AboutUsMission from "../components/AboutUs/AboutUsMission/AboutUsMission";
import AboutUsShort from "../components/AboutUs/AboutUsShort/AboutUsShort";
import AboutUsVision from "../components/AboutUs/AboutUsVision/AboutUsVision";
import KeyFocusAreas from "../components/AboutUs/KeyFocusAreas/KeyFocusAreas";

export default function AboutUs() {
  useEffect(function(){
    window.scrollTo(
        {
            top:0,
            behavior:'instant'
        }
    )
},[])
  return (
    <>
      <AboutUsShort />
      <AboutUsVision />
      <AboutUsMission />
      <KeyFocusAreas />
    </>
  );
}
