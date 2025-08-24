import { useState, useEffect, useRef } from "react"
import Bar from "./Bar"

export default function Navbar({ isMobile, showNavbar }) {
  const [navmenuOpen, setNavMenuOpen] = useState(false)
   const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    if (!showNavbar) {
      setNavMenuOpen(false)
    }
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
    </nav>
  )
}
