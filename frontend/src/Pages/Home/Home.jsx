import React from 'react';
import HomeImage from '../../assets/Background.jpg';
import './home.css';
import { GiHamburgerMenu } from "react-icons/gi";
import Courses from '../../Pages/Courses/Courses';
import Services from '../../Pages/Services/Services'
import UpcomingActivity from '../../Pages/UpcomingActivities/SeminarCard'
import Beforeafter from '../../Pages/beforeafter/beforeafter'
import StatsSection from '../../Pages/StatsSection/StatsSection'

const Home = () => {
  return (
    <div className="home-page">

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

      <Services />
      <Courses />
      <UpcomingActivity />
      <Beforeafter />
      <StatsSection />

    </div>

  );
};

export default Home;
