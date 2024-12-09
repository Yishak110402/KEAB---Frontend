import { useEffect } from "react";
import AboutPreview from "../components/Homepage/AboutPreview/AboutPreview";
import Hero from "../components/Homepage/Hero/Hero";
import OurCoreValues from "../components/Homepage/OurCoreValues/OurCoreValues";

export default function Homepage() {
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
            <Hero />
            <AboutPreview />
            <OurCoreValues />
        </>
    );
}