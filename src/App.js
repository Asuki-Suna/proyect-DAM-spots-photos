import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./PAGES/Home/Home";
import Spots from "./PAGES/Spots/spots";
import Credits from "./PAGES/Credits/credits";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Spots" element={<Spots />}/>
        <Route path="/Credits" element={<Credits />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;