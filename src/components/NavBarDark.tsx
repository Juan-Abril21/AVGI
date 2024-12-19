import { Link, useLocation } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import "../styles/NavBarDark.css";
import { useAuth } from "@/context/AuthContext";

function NavBarDark() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout, user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar-black">
        <div className="navbar-logo">
          <Link to="/">
            <img src="/Big Logo Corto White.png" alt="Logo" className="logo" />
          </Link>
        </div>
        <div
          className={`mobile-menu-overlay ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(false)}
        />

        <div className={`mobile-menu-dark ${menuOpen ? "active" : ""}`}>
          <div className="mobile-menu-header">
            <button className="close-button-dark" onClick={toggleMenu}>
              <IoClose />
            </button>
          </div>
          <ul className="mobile-menu-list-dark">
            <li>
              <Link
                to="/"
                className={`nav-link-dark ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/whoweare"
                className={`nav-link-dark ${
                  location.pathname === "/whoweare" ? "active" : ""
                }`}
              >
                Who We Are
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className={`nav-link-dark ${
                  location.pathname === "/pricing" ? "active" : ""
                }`}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`nav-link-dark ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="mobile-menu-buttons">
            <Link to="/" className="btnLogin">
              Profile
            </Link>
            <Link to="/login" className="btnRegister" onClick={handleLogout}>
              Log Out
            </Link>
          </div>
        </div>
        <ul className="navbar-list desktop-menu">
          <li>
            <Link
              to="/"
              className={`nav-link-dark ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/whoweare"
              className={`nav-link-dark ${
                location.pathname === "/whoweare" ? "active" : ""
              }`}
            >
              Who We Are
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className={`nav-link-dark ${
                location.pathname === "/pricing" ? "active" : ""
              }`}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`nav-link-dark ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="navbar-buttons desktop-buttons">
          <p className="logout" style={{color: "white"}} onClick={handleLogout}>logout</p>
        </div>

        <button className="menu-icon-courses" onClick={toggleMenu}>
          <IoMenu />
        </button>
      </nav>
      
    </>
  );
}

export default NavBarDark;
