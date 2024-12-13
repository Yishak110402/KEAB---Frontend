import { useContext, useEffect } from "react";
import AboutPreview from "../components/Homepage/AboutPreview/AboutPreview";
import Hero from "../components/Homepage/Hero/Hero";
import OurCoreValues from "../components/Homepage/OurCoreValues/OurCoreValues";
import OurProjectsPreview from "../components/Homepage/OurProjectsPreview/OurProjectsPreview";
import MessagePreview from "../components/Homepage/MessagePreview/MessagePreview";
import { GeneralContext } from "../hooks/GeneralContext";

export default function Homepage() {
    const {apiURL} = useContext(GeneralContext)
    useEffect(function(){
        async function test(){
            const res = await fetch(`${apiURL}/test`)
            const data = await res.json()
            console.log(data);            
        }
        test()
    },[apiURL])
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
            <OurCoreValues />
            <OurProjectsPreview />
        </>
    );
}