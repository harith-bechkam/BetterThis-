import './Header.css';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header className="home-header">
      <div className="header-sect-all">
        <div className="logo">BetterThis</div>
        <nav className="nav-menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/courselist">Course</NavLink>
          <NavLink to="/services">Services</NavLink>

          <NavLink to="/contact">
            <button className="contact-btn">Contact Us</button>
          </NavLink>
        </nav>
        <div className="mobile-hamburger">
          <GiHamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
