import AboutPreview from "../components/Homepage/AboutPreview/AboutPreview";
import Hero from "../components/Homepage/Hero/Hero";
import OurCoreValues from "../components/Homepage/OurCoreValues/OurCoreValues";
import TeamPreview from "../components/Homepage/TeamPreview/TeamPreview";

export default function Homepage() {
    return (
        <>
            <Hero />
            <AboutPreview />
            <OurCoreValues />
            <TeamPreview />
        </>
    );
}