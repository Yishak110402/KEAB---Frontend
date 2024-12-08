import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import './index.css'
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route index element={<Homepage />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}