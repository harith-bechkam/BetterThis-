import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import "./home.css";
import { motion } from "framer-motion";
import Bar from "./Bar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const menuRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setShowNavbar(!entry.isIntersecting);
    }, { threshold: 0.5 });

    if (heroRef.current) observer.observe(heroRef.current);
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      <div className={`fixed-navbar ${showNavbar ? "visible" : ""}`}>
        <Navbar isMobile={isMobile} showNavbar={showNavbar} />
      </div>

      <section ref={heroRef}>
        <div className="video-container">
          {/* Video Background */}
         <video
  src="../asset/image/110.mp4"
  autoPlay
  muted
  loop
  playsInline
  webkit-playsinline="true"
  playsinline="true"
  preload="auto"
/>


          {/* Color Overlay */}
          <div className="video-overlay" />

          {/* Navbar / Bar */}
          <div className="header" style={{ position: "absolute", top: "30px", left: 0, right: 0, zIndex: 10 }}>
              <Bar 
  logoText={
    <img 
      src="./asset/image/final3.png"  // put your logo image path here
      alt="BetterThis Logo" 
      style={{ height: "100px", objectFit: "contain" }} 
    />
  } 
  menuRef={menuRef} 
  isMobile={isMobile} 
  menuOpen={menuOpen} 
  setMenuOpen={setMenuOpen} 
/>
          </div>

          {/* Slide Content */}
          <div style={{ position: "relative", zIndex: 20 }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="expdf"
            >
             <h1>
  Powering the <span className="gradient-text">Future of Web, Mobile & AI</span>
</h1>
<span>
  Delivering intelligent, seamless, and scalable digital solutions that drive growth and innovation.
</span>

              <p onClick={() => navigate("/about")}>Let's Traverse</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
