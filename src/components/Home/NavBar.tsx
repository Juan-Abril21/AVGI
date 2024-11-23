import { Link, useLocation } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import "../../styles/Home/NavBar.css";

function NavBar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src="/Big Logo Corto.png" alt="Logo" className="logo" />
          </Link>
        </div>
        <div
          className={`mobile-menu-overlay ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(false)}
        />

        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          <div className="mobile-menu-header">
            <button className="close-button" onClick={toggleMenu}>
              <IoClose />
            </button>
          </div>
          <ul className="mobile-menu-list">
            <li>
              <Link
                to="/"
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/whoweare"
                className={`nav-link ${
                  location.pathname === "/whoweare" ? "active" : ""
                }`}
              >
                Who We Are
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className={`nav-link ${
                  location.pathname === "/pricing" ? "active" : ""
                }`}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`nav-link ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="mobile-menu-buttons">
            <Link to="/login" className="btnLogin">
              Log In
            </Link>
            <Link to="/register" className="btnRegister">
              Register
            </Link>
          </div>
        </div>
        <ul className="navbar-list desktop-menu">
          <li>
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/whoweare"
              className={`nav-link ${
                location.pathname === "/whoweare" ? "active" : ""
              }`}
            >
              Who We Are
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className={`nav-link ${
                location.pathname === "/pricing" ? "active" : ""
              }`}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`nav-link ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="navbar-buttons desktop-buttons">
          <Link to="/login" className="btnLogin">
            Log In
          </Link>
          <Link to="/register" className="btnRegister">
            Register
          </Link>
        </div>

        <button className="menu-icon" onClick={toggleMenu}>
          <IoMenu />
        </button>
      </nav>
      
    </>
  );
}

export default NavBar;