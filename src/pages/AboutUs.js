import AboutUsMission from "../components/AboutUs/AboutUsMission/AboutUsMission";
import AboutUsShort from "../components/AboutUs/AboutUsShort/AboutUsShort";
import AboutUsVision from "../components/AboutUs/AboutUsVision/AboutUsVision";
import KeyFocusAreas from "../components/AboutUs/KeyFocusAreas/KeyFocusAreas";

export default function AboutUs() {
  return (
    <>
      <AboutUsShort />
      <AboutUsVision />
      <AboutUsMission />
      <KeyFocusAreas />
    </>
  );
}
