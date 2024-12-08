import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import Homepage from "./pages/Homepage";
import GeneralProvider from "./hooks/GeneralContext";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GeneralProvider>
          <Navbar />
          <Routes>
            <Route index element={<Homepage />} />
          </Routes>
        </GeneralProvider>
      </BrowserRouter>
    </div>
  );
}
