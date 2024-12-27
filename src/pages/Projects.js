import { useEffect } from "react";
import ProjectsContainer from "../components/Projects/ProjectsContainer/ProjectsContainer";
import ProjectsHeader from "../components/Projects/ProjectsHeader/ProjectsHeader";

export default function Projects() {
  useEffect(function(){
    window.scrollTo({
      top:0,
      behavior:"instant"
    })
  },[])
  return (
    <>
      <ProjectsHeader />
      <ProjectsContainer />
    </>
  );
}
