import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import Homepage from "./pages/Homepage";
import GeneralProvider from "./hooks/GeneralContext";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import CompleteExecMessage from "./pages/CompleteExecMessage";
import Events from "./pages/Events";
import News from "./pages/News";
// import Projects from "./pages/Projects";
import OpenEvent from "./pages/OpenEvent";
import OpenTeam from "./pages/OpenTeam";
import ExecutiveMembers from "./components/Team/ExecutiveMembers/executiveMembers";
import AdvisoryTeam from "./components/Team/AdvisoryTeam/AdvisoryTeam";
import TechnologyTeam from "./components/Team/TechnologyTeam/TechnologyTeam";

import "./components/Team/TeamContainer/TeamContainer.css"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GeneralProvider>
          <Navbar />
          <Routes>
            <Route index element={<Homepage />} />
            <Route element={<AboutUs />} path="/aboutus" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<Events />} path="/events" />
            <Route element={<OpenEvent />} path="/events/:id" />
            <Route element={<News />} path="/news" /> 
            {/* <Route element={<Projects />} path = "/projects" /> */}
            <Route element={<ExecutiveMembers />} path="/founders" />
            <Route element={<AdvisoryTeam />} path="/advisoryteam" />
            <Route element={<TechnologyTeam />} path="/technologyteam" />
            <Route element={<OpenTeam />} path="/team/:id" />
            <Route
              element={<CompleteExecMessage />}
              path="/exec-director-message"
            />
          </Routes>
          <Footer />
        </GeneralProvider>
      </BrowserRouter>
    </div>
  );
}
