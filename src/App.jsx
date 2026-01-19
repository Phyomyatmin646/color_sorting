import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Aiming from "./pages/Aiming";
import Structure from "./pages/Structure";
import UserGuideline from "./pages/UserGuideline";
import HardwareSoftware from "./pages/HardwareSoftware";
import ContactUs from "./pages/ContactUs";

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w, h;
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    function draw() {
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.fillStyle = "#38bdf8";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();

        particles.forEach((o) => {
          const d = Math.hypot(p.x - o.x, p.y - o.y);
          if (d < 120) {
            ctx.strokeStyle = `rgba(56,189,248,${1 - d / 120})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(o.x, o.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(draw);
    }

    draw();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white overflow-hidden">
    
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0"
      />
      <div className="fixed inset-0 z-0 pointer-events-none
        bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
            linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        background-[size:60px_60px]"
      />

      
      <div className="relative z-10 flex flex-col min-h-screen">
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
    </div>
  );
}

export default App;
