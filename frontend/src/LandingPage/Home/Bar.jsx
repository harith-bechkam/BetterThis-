import { GiHamburgerMenu } from "react-icons/gi"
import { Offcanvas } from "react-bootstrap"
import { useState, useRef } from "react"
import { FaPlus, FaMinus, FaCheckCircle, FaStar, FaCog } from "react-icons/fa"

const Bar = ({ logoText = "BetterThis", menuRef, isMobile, menuOpen, setMenuOpen }) => {
    const [servicesOpen, setServicesOpen] = useState(false)
    const [showServicesDropdown, setShowServicesDropdown] = useState(false)

    const dropdownTimeout = useRef(null)

    const serviceOptLeft = [
        { icon: <FaCheckCircle />, label: "Digital Management" },
        { icon: <FaStar />, label: "Infrastructure" },
    ]

    const serviceOpRight = [
        { icon: <FaCog />, label: "Intelligence" },
        { icon: <FaCheckCircle />, label: "Innovation" },
    ]

    const handleMouseEnter = () => {
        if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
        setShowServicesDropdown(true)
    }

    const handleMouseLeave = () => {
        dropdownTimeout.current = setTimeout(() => {
            setShowServicesDropdown(false)
        }, 200)
    }

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
                            setMenuOpen(false)
                            setServicesOpen(false)
                        }}
                        placement="end"
                        className="custom-offcanvas"
                        backdrop={true}
                    >
                        <Offcanvas.Header closeButton />
                        <Offcanvas.Body>
                            <ul className="mobile-menu-list">
                                <li>Home</li>

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
                                        {[...serviceOptLeft, ...serviceOpRight].map(({ icon, label }) => (
                                            <li key={label}>
                                                <span className="service-icon">{icon}</span>
                                                {label}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                <li>Inside BetterThis</li>
                                <li>Products</li>
                                <li>Courses</li>
                            </ul>
                        </Offcanvas.Body>
                    </Offcanvas>
                </>
            ) : (
                <ul className="nav-links">
                    <li className="active">Home</li>

                    <li
                        className="services-menu"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{ position: "relative" }}
                    >
                        Services

                        {showServicesDropdown && (
                            <div
                                className="services-dropdown"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    position: "absolute",
                                    top: "100%",
                                    left: 0,
                                    background: "#fff",
                                    borderRadius: "6px",
                                    padding: "1rem 2rem",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                                    zIndex: 100,
                                    minWidth: "300px",
                                    display: "flex",
                                    gap: "4rem",
                                    userSelect: "none",
                                }}
                            >
                                <div style={{ flex: 1 }}>

                                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                        {serviceOptLeft.map(({ icon, label }) => (
                                            <li
                                                key={label}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    padding: "0.4rem 0",
                                                    cursor: "pointer",
                                                    color: "#222",
                                                    fontWeight: 100,
                                                    transition: "color 0.3s",
                                                }}
                                                onMouseEnter={e => e.currentTarget.style.color = "#895EF7"}
                                                onMouseLeave={e => e.currentTarget.style.color = "#222"}
                                            >
                                                <span style={{ marginRight: "0.75rem", display: "flex", alignItems: "center" }}>
                                                    {icon}
                                                </span>
                                                {label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div style={{ flex: 1 }}>

                                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                        {serviceOpRight.map(({ icon, label }) => (
                                            <li
                                                key={label}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    padding: "0.4rem 0",
                                                    cursor: "pointer",
                                                    color: "#222",
                                                    fontWeight: 100,
                                                    transition: "color 0.3s",
                                                }}
                                                onMouseEnter={e => e.currentTarget.style.color = "#895EF7"}
                                                onMouseLeave={e => e.currentTarget.style.color = "#222"}
                                            >
                                                <span style={{ marginRight: "0.75rem", display: "flex", alignItems: "center" }}>
                                                    {icon}
                                                </span>
                                                {label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </li>
                    <li className="inside-betterthis">Inside BetterThis</li>
                    <li>Products</li>
                    <li>Courses</li>
                    <button>Contact Us</button>
                </ul>
            )}
        </nav>
    )
}

export default Bar
