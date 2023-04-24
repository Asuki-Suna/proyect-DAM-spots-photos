import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./PAGES/Home/Home";
import Spots from "./PAGES/Spots/spots";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Spots" element={<Spots />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;