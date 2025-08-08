import { CiMobile4 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import './Header.css';
import "../../App.css"
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
  return (
    <div className="header">
      <div className="header-bg-scnd">
        <div className="container-myapp">
          <div className="header-two">
            <div className="logo-nav">
              <img src='' alt="Logo" />
            </div>

            <div className="mobile-nav">
              <div className="moble-hamburger-menu">
                <GiHamburgerMenu />
              </div>

            </div>
            <div className="nav-bar">
              <ul>
                <li>
                  <NavLink
                    to=""
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to=""
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to=""
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to=""
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>

            </div>
          </div>
        </div>


      </div>


    </div>

  );
};

export default Header;
