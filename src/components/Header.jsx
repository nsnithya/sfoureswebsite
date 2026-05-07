import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/sfoures_logo.png"

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="main-header header-fixed-default" id="home-header">

                <div className="certify">
                    <marquee>
                        <p className="text-white mb-0">
                            <strong>
                                We are SBA 8(a), WOSB, EDWOSB, MBE and SWAM Certified company
                            </strong>
                        </p>
                    </marquee>
                </div>

                <nav className="navbar w-100 navbar-expand-lg navbar-transparent bg-transparent">

                    <div className="container">
                        <Link to="/">
                            <div className="logo">
                                <img
                                    src={logo}
                                    alt="Logo"
                                />
                            </div>
                        </Link>

                        {/* Mobile Toggle Button */}
                        <button
                            className="menu-toggle navbar-toggler"
                            type="button"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <div></div>
                            <div></div>
                            <div></div>
                        </button>

                        {/* Menu */}
                        <div
                            className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
                            id="navbarSupportedContent"
                        >

                            <div style={{ margin: "auto" }}></div>

                            <div className="header-part-right">

                                <ul className="navbar-nav mr-auto">

                                    <li className="nav-item active">
                                        <Link
                                            className="nav-link m-2"
                                            to="/"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            Home
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            className="nav-link m-2"
                                            to="/services"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            Services
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            className="nav-link m-2"
                                            to="/capabilities"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            Capabilities
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            className="nav-link m-2"
                                            to="/clients"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            Clients
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            className="nav-link m-2"
                                            to="/about"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            About Us
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            className="nav-link m-2"
                                            to="/contact"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            Contact Us
                                        </Link>
                                    </li>

                                </ul>

                            </div>

                        </div>

                    </div>

                </nav>

            </div>
        </>
    );
}

export default Header;