import { useState, useEffect, useRef } from "react"
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({ isMobile, showNavbar }) {
  const [navmenuOpen, setNavMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    if (!showNavbar) {
      setNavMenuOpen(false)
    }
    // console.log("renders")
  }, [showNavbar])

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setNavMenuOpen(false)
      }
    }
    if (navmenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [navmenuOpen])

  return (
    <nav className="navbar">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <span className="logo">BetterThis</span>
        {isMobile ? (
          <div ref={menuRef} style={{ position: "relative" }}>
            <div
              style={{ cursor: "pointer", fontSize: "1.5rem" }}
              onClick={() => setNavMenuOpen(!navmenuOpen)}
            >
              <GiHamburgerMenu />
            </div>
            {navmenuOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  background: "#fff",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  padding: "1rem",
                  borderRadius: "4px"
                }}
              >
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem"
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
            <li>Courses</li>
            <button>Contact</button>
          </ul>
        )}
      </div>
    </nav>
  )
}
