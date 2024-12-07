import { BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import './index.css'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>

        </Routes>
      </BrowserRouter>      
    </div>
  );
}