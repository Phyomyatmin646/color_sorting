import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Aiming from "./pages/Aiming";
import Structure from "./pages/Structure";
import UserGuideline from "./pages/UserGuideline";
import HardwareSoftware from "./pages/HardwareSoftware";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className=" bg-gray-900 text-white flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/aiming" element={<Aiming />} />
          <Route path="/structure" element={<Structure />} />
          <Route path="/guideline" element={<UserGuideline />} />
          <Route path="/hardware" element={<HardwareSoftware />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
