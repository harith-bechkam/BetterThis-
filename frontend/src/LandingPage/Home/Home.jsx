import { useEffect, useRef, useState } from "react"
import Navbar from "./Navbar"
import "./home.css"
import { GiHamburgerMenu } from "react-icons/gi"
import HomeImage from "./assets/alterbanner.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Particle from "./Particle";

const Home = () => {
  const heroRef = useRef(null)
  const menuRef = useRef(null)
  const [showNavbar, setShowNavbar] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0);

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


  const op1 = {
    background: {
      color: { value: "rgb(10, 10, 30)" },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#FF61C7" },
      links: {
        color: "#FF61C7",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        speed: 6,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 80,
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  }
  const op2 = {
    background: { color: { value: "rgb(10, 10, 30)" } },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: { enable: true, mode: ["grab", "repulse"] },
        onClick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          links: { opacity: 0.7 },
        },
        repulse: {
          distance: 150,
          duration: 0.6,
        },
        push: { quantity: 4 },
      },
    },
    particles: {
      color: { value: ["#FF61C7", "#FFD166", "#06D6A0", "#118AB2"] },
      links: {
        color: "#FF61C7",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
        triangles: { enable: true, opacity: 0.1 }, // add triangles between particles
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: true,
        speed: 3,
        straight: false,
        wobble: { enable: true, distance: 5, speed: 2 }, // wobble effect
      },
      number: {
        density: { enable: true, area: 900 },
        value: 70,
      },
      opacity: {
        value: 0.6,
        random: { enable: true, minimumValue: 0.3 },
        animation: { enable: true, speed: 0.5, minimumValue: 0.3, sync: false },
      },
      shape: {
        type: ["circle", "triangle", "star", "polygon"],
        options: {
          polygon: { sides: 6 },
          star: { sides: 5 },
        },
      },
      size: {
        value: { min: 2, max: 6 },
        random: true,
        animation: {
          enable: true,
          speed: 4,
          minimumValue: 2,
          sync: false,
        },
      },
      rotate: {
        value: 0,
        random: true,
        direction: "random",
        animation: {
          enable: true,
          speed: 5,
          sync: false,
        },
      },
    },
    detectRetina: true,
  }
  const globeOptions = {
    background: {
      color: { value: "rgb(10, 10, 30)" },
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 0.8,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: "#FF61C7",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.7,
        random: false,
      },
      size: {
        value: 3,
        random: { enable: true, minimumValue: 1 },
        animation: {
          enable: true,
          speed: 4,
          minimumValue: 1,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 120,
        color: "#FF61C7",
        opacity: 0.3,
        width: 1,
        triangles: {
          enable: true,
          opacity: 0.05,
        },
        warp: true,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "bounce",
        },
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      orbit: {
        enable: true,
        radius: 100,
        rotation: {
          speed: 0.2,
          sync: false,
        },
        animation: {
          enable: true,
          speed: 0.1,
          sync: false,
        },
      },
    },
    detectRetina: true,
  };

  const slides = [
    {
      image: HomeImage, text: "Welcome to BetterThis", options: op1
    },
    {
      image: HomeImage, text: "Our Services", options: op2
    },
    { image: HomeImage, text: "Join Our Courses", options: globeOptions },
  ]


  return (
    <>
      <div className={`fixed-navbar ${showNavbar ? "visible" : ""}`}>
        <Navbar isMobile={isMobile} showNavbar={showNavbar} />
      </div>

      <section className="w-100">
        <div ref={heroRef} className="header">
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

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 7000 }}
          loop
          className="mySwiper"
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div style={{ position: "relative", height: "65rem", overflow: "hidden" }}>
                <Particle options={slide.options} reloadKey={i} />
                <div className="carousel-text" style={{ position: "relative", zIndex: 2 }}>
                  {slide.text}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </section>
    </>
  )
}

export default Home
