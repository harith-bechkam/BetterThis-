import { GiHamburgerMenu } from "react-icons/gi"

const Bar = ({ logoText = "BetterThis", menuRef, isMobile, menuOpen, setMenuOpen }) => {
    return (
        <>
            <h3 className="logo">{logoText}</h3>
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
                                position: "absolute",
                                top: "100%",
                                right: 0,
                                background: "#fff",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                padding: "1rem",
                                borderRadius: "4px",
                            }}
                        >
                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: 0,
                                    margin: 0,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.5rem",
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
        </>
    )
}

export default Bar
