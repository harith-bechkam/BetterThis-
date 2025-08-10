import React from 'react';
import { useEffect, useRef, useState } from "react";
import './ContactPage.css'; // for custom styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhoneAlt, FaEnvelope, FaHeadphones } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Framer from '../framer';
import Footer from '../../LandingPage/Footer/Footer';
import Navbar from '../../LandingPage/Home/Navbar';
import '../../LandingPage/Home/home.css'
import Bar from "../../LandingPage/Home/Bar";

function ContactPage() {
  const heroRef = useRef(null)
  const menuRef = useRef(null)

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false)


  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setShowNavbar(!entry.isIntersecting)
    }, { threshold: 0.5 })

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

      {/* Hero Section */}
      {/* <header className="hero-section text-white text-center py-5" style={{ backgroundImage: `url('../asset/image/backgroundimg.jpg')`,width: 1920px,
height: 650.0241088867188px,
 backgroundSize: 'cover' }}> */}
      <header
        className="hero-section text-white text-center py-5"
        style={{
          backgroundImage: `url('../asset/image/backgroundimg.jpg')`,
          width: '100%',
          height: '350px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div ref={heroRef} className="header" style={{ position: "absolute", top: "30px", left: 0, right: 0, zIndex: 10 }}>
          <Bar logoText="BetterThis" menuRef={menuRef} isMobile={isMobile} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
        <div className='contactdetails'>
          <h1>Contact Us</h1>
          <p>Home / Contact Us</p>
        </div>
      </header>

      <Framer delay={0.1}>

        {/* Contact Info */}
        <div className="container my-5">
          <div className="row justify-content-center gap-4">
            {/* Phone Card */}
            <div className="col-md-3 contact-card phonecard">
              <div className="d-flex align-items-start">
                <div className="icon-circle me-3">
                  <FaPhoneAlt size={24} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Contact Phone Number</h6>
                  <p className="mb-0">+444 555 666 777</p>
                  <p className="mb-0">+222 222 222 333</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="col-md-3 contact-card  emailcard ">
              <div className="d-flex align-items-start">
                <div className="icon-circle me-3">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Our Email Address</h6>
                  <p className="mb-0">admin@gmail.com</p>
                  <p className="mb-0">example@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="col-md-3 contact-card locationcard">
              <div className="d-flex align-items-start">
                <div className="icon-circle me-3">
                  <FaHeadphones size={24} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Our Location</h6>
                  <p className="mb-0">123, Street Name, Area Name,</p>
                  <p className="mb-0">City Name</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form + Image */}
        <div className="container my-5">
          <div className="row g-0 shadow rounded-4 overflow-hidden d-flex align-items-stretch">
            {/* Left Image */}
            <div className="col-md-6 p-0">
              <img
                src="../asset/image/Maskgroup.png"
                alt="Team Working"
                className="img-fluid w-100 h-100 object-fit-cover"
                style={{
                  borderTopLeftRadius: '16px',
                  borderBottomLeftRadius: '16px',
                }}
              />
            </div>

            {/* Right Form */}
            <div className="col-md-6 d-flex flex-column justify-content-center bg-white p-5">
              <h3 className="fw-bold mb-4">Send us a message</h3>
              <form className="modern-form">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingName" placeholder="Name" />
                  <label htmlFor="floatingName">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingEmail" placeholder="Email" />
                  <label htmlFor="floatingEmail">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingSubject" placeholder="Subject" />
                  <label htmlFor="floatingSubject">Subject</label>
                </div>
                <div className="form-floating mb-4">
                  <textarea className="form-control" placeholder="Leave a message here" id="floatingMessage" style={{ height: '120px' }}></textarea>
                  <label htmlFor="floatingMessage">Your Message</label>
                </div>
                <button type="submit" className="btn submit-btn w-100">Submit Message</button>
              </form>
            </div>

          </div>
        </div>
        <Footer />
      </Framer>
    </>
  );
}

export default ContactPage;
