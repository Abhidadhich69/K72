import { Route, Routes, useLocation } from "react-router";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import Agence from "./pages/Agence";
import Navbar from "./components/common/Navbar";
import FullNav from "./components/common/FullNav";
function App() {

  return (

    
    <div className="overflow-hidden ">
        <Navbar />
        <FullNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/agence" element={<Agence />} />
      </Routes>
    </div>
  );
}

export default App;
