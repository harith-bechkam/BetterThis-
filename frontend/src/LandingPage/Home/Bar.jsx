import { GiHamburgerMenu } from "react-icons/gi";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { FaPlus, FaMinus, FaCheckCircle, FaStar, FaCog } from "react-icons/fa";

const Bar = ({ logoText = "BetterThis", menuRef, isMobile, menuOpen, setMenuOpen }) => {
    const [servicesOpen, setServicesOpen] = useState(false);

    const serviceOptions = [
        { icon: <FaCheckCircle />, label: "Service A" },
        { icon: <FaStar />, label: "Service B" },
        { icon: <FaCog />, label: "Service C" },
    ];

    return (
        <nav className="bar-container">
            <h3 className="logo">{logoText}</h3>

            {isMobile ? (
                <>
                    <div
                        style={{ cursor: "pointer", fontSize: "1.5rem" }}
                        onClick={() => setMenuOpen(true)}
                    >
                        <GiHamburgerMenu />
                    </div>

                    <Offcanvas
                        show={menuOpen}
                        onHide={() => {
                            setMenuOpen(false);
                            setServicesOpen(false);
                        }}
                        placement="end"
                        className="custom-offcanvas"
                        backdrop={true}
                    >
                        <Offcanvas.Header closeButton />
                        <Offcanvas.Body>
                            <ul className="mobile-menu-list">
                                <li>Home</li>
                                <li>Inside BetterThis</li>

                                <li
                                    className="services-menu"
                                    onClick={() => setServicesOpen(!servicesOpen)}
                                    aria-expanded={servicesOpen}
                                >
                                    Services
                                    <span className="icon-toggle">
                                        {servicesOpen ? <FaMinus /> : <FaPlus />}
                                    </span>
                                </li>

                                {servicesOpen && (
                                    <ul className="service-submenu">
                                        {serviceOptions.map(({ icon, label }) => (
                                            <li key={label}>
                                                <span className="service-icon">{icon}</span>
                                                {label}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                <li>Products</li>
                                <li>Courses</li>
                            </ul>
                        </Offcanvas.Body>
                    </Offcanvas>
                </>
            ) : (
                <ul className="nav-links">
                    <li className="active">Home</li>
                    <li>Inside BetterThis</li>
                    <li>Services</li>
                    <li>Products</li>
                    <li>Courses</li>
                </ul>
            )}
        </nav>
    );
};

export default Bar;
