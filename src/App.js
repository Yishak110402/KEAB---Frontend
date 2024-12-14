import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import Homepage from "./pages/Homepage";
import GeneralProvider from "./hooks/GeneralContext";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import CompleteExecMessage from "./pages/CompleteExecMessage";
import Team from "./pages/Team";
import Events from "./pages/Events";
import News from "./pages/News";
import Projects from "./pages/Projects";
import OpenEvent from "./pages/OpenEvent";
import SelectedTeam from "./pages/SelectedTeam";

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
            <Route element={<Team />} path="/team" />
            <Route element={<SelectedTeam />} path="/team/:id" />
            <Route element={<Events />} path="/events" />
            <Route element={<OpenEvent />} path="/events/:id" />
            <Route element={<News />} path="/news" /> 
            <Route element={<Projects />} path = "/projects" />
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
