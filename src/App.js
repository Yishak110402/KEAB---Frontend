import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import Homepage from "./pages/Homepage";
import GeneralProvider from "./hooks/GeneralContext";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import CompleteExecMessage from "./pages/CompleteExecMessage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GeneralProvider>
          <Navbar />
          <Routes>
            <Route index element={<Homepage />} />
            <Route element={<AboutUs />} path="/aboutus"/>
            <Route element={<Contact />} path="/contact" />
            <Route element={<CompleteExecMessage />} path="/exec-director-message" />  
          </Routes>
          <Footer />
        </GeneralProvider>
      </BrowserRouter>
    </div>
  );
}
