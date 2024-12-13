import { useEffect } from "react";
import AboutPreview from "../components/Homepage/AboutPreview/AboutPreview";
import Hero from "../components/Homepage/Hero/Hero";
import OurCoreValues from "../components/Homepage/OurCoreValues/OurCoreValues";
import OurProjectsPreview from "../components/Homepage/OurProjectsPreview/OurProjectsPreview";
import MessagePreview from "../components/Homepage/MessagePreview/MessagePreview";

export default function Homepage() {
    useEffect(function(){
        window.scrollTo(
            {
                top:0,
                behavior:'instant'
            }
        )
    })
    return (
        <>
            <Hero />
            <AboutPreview />
            <MessagePreview />
            {/* <OurCoreValues /> */}
            {/* <OurProjectsPreview /> */}
        </>
    );
}