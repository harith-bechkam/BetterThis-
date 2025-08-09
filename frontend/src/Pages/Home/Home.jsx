import React from 'react';
import HomeImage from '../../assets/Background.jpg';
import Courses from '../Courses/Courses';
import Services from '../Services/Services';
import UpcomingActivity from '../UpcomingActivities/SeminarCard';
import Beforeafter from '../beforeafter/beforeafter';
import StatsSection from '../StatsSection/StatsSection';
import './home.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className="home-page">

      {/* NAVBAR SEPARATE */}
     <header className="home-header">
  <div className="header-sect-all">
    <div className="logo">BetterThis</div>
    
    <nav className="nav-menu">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/courses">Course</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">
        <button className="contact-btn">Contact Us</button>
      </Link>
    </nav>

    <div className="mobile-hamburger">
      <GiHamburgerMenu />
    </div>
  </div>
</header>
      <div className="home-section">
        {/* Background Image */}
        <img src={HomeImage} alt="Banner" className="home-image" />
        {/* Overlay Content */}
        <div className="overlay-content container">
          <h1>Project And Resource <br /> Management Software</h1>
          <h2><span>Built For Client Work</span></h2>
          <p>
            Designed with client success in mind, our software helps you plan projects, allocate resources efficiently,
            and ensure every deadline is met. Whether you're managing one client or hundreds, our tools keep your team aligned
            and your operations smooth — all in one place.
          </p>

          <button className="cta-btn">Contact Us</button>
        </div>
      </div>
      <div className="home-section-mobile">
        <div className="first-section-mobile">
          <div className="overlay-content-mobile">
            <h1>Project And Resource <br /> Management Software</h1>
            <h2><span>Built For Client Work</span></h2>
            <p>
              Designed with client success in mind, our software helps you plan projects, allocate resources efficiently,
              and ensure every deadline is met. Whether you're managing one client or hundreds, our tools keep your team aligned
              and your operations smooth — all in one place.
            </p>

            <button className="cta-btn">Contact Us</button>
          </div>
        </div>

        <div className="second-section-mobile">
          <img src={HomeImage} alt="" className="home-image" />
        </div>
      </div>

    </div>
<Services/>
<Courses/>
<UpcomingActivity />
<Beforeafter />
<StatsSection />
</>
  );
};

export default Home;
