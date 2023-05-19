import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./PAGES/Home/Home";
import Spots from "./PAGES/Spots/spots";
import Credits from "./PAGES/Credits/credits";
import SpotList from "./PAGES/AddSpot/AddSpot";
import News from "./PAGES/News/News";
import NWnewHome from "./PAGES/NWnewHome/NWnewHome";
import NWnewFunction from "./PAGES/NWnewFunction/NWnewFunction";
import NWfindPartner from "./PAGES/NWfindPartner/NWfindPartner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Spots" element={<Spots />}/>
        <Route path="/News" element={<News />}/>
        <Route path="/SpotList" element={<SpotList />}/>
        <Route path="/Credits" element={<Credits />}/>
        <Route path="/NWnewHome" element={<NWnewHome />}/>
        <Route path="/NWnewFunction" element={<NWnewFunction />}/>
        <Route path="/NWfindPartner" element={<NWfindPartner />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;