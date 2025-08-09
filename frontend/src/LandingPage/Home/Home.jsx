import { useEffect, useRef, useState } from "react"
import HomeImage from "./assets/alterbanner.png"
import Navbar from "./Navbar"
import "./home.css"
import { GiHamburgerMenu } from "react-icons/gi";

const Home = () => {
  const heroRef = useRef(null)
  const menuRef = useRef(null)
  const [showNavbar, setShowNavbar] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setShowNavbar(!entry.isIntersecting)
    }, { threshold: 0 })

    if (heroRef.current) observer.observe(heroRef.current)
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuOpen])

  return (
    <>
      <div className={`fixed-navbar ${showNavbar ? "visible" : ""}`}>
        <Navbar isMobile={isMobile} showNavbar={showNavbar} />
      </div>

      <section className="hero-section w-100">
        <div ref={heroRef} className="hero-header">
          <h5>BetterThis</h5>

          {isMobile ? (
            <div ref={menuRef} style={{ position: "relative" }}>
              <div
                style={{ cursor: "pointer", fontSize: "1.5rem" }}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <GiHamburgerMenu />
              </div>
              {menuOpen && (
                <div
                  style={{
                    position: "absolute", top: "100%", right: 0,
                    background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    padding: "1rem", borderRadius: "4px"
                  }}
                >
                  <ul
                    style={{
                      listStyle: "none", padding: 0, margin: 0,
                      display: "flex", flexDirection: "column", gap: "0.5rem"
                    }}
                  >
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <ul className="nav-links">
              <li>Home</li>
              <li>Inside BetterThis</li>
              <li>Services</li>
              <li>Products</li>
              <li>Courses</li>
              <button>Contact</button>
            </ul>
          )}
        </div>

        <img src={HomeImage} alt="image" />
      </section>
    </>
  )
}

export default Home
