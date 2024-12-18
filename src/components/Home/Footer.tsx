import "../../styles/Home/Footer.css";
import { LuInstagram, LuFacebook, LuLinkedin, LuMail } from "react-icons/lu";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="linea-footer-navbar"></div>
      <footer className="footer">
        <div className="footer-container">
          <div className="logo-section">
            <div className="logo-container">
              <img src="/Big Logo.png" alt="AVGI Group Logo" />
            </div>
            <p className="company-description">
              Think up solutions in your own way.
            </p>
            <div className="social-icons">
              <a href="https://www.instagram.com/" target="_blank">
                <LuInstagram />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <LuFacebook />
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <LuLinkedin />
              </a>
              <a href="mailto:Global@avgi.group">
                <LuMail />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="section-title-about">About</h3>
            <div className="contact-info">
              <p className="contact-item">
                <span className="contact-label">Direction - </span>
                P.O. BOX 2516, Elizabeth, NJ 07207
              </p>
              <a
                className="contact-item"
                href="mailto:Global@avgi.group"
                style={{ cursor: "pointer" }}
              >
                <a className="contact-label">Email - </a>
                Global@avgi.group
              </a>
              <a className="contact-item" href="tel:9298378939">
                <span className="contact-label">Phone - </span>
                929 - 837 - 8929
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="section-title">Explore</h3>
            <div className="nav-links">
              <Link to="/" className="nav-link-footer">
                Home
              </Link>
              <Link to="/whoweare" className="nav-link-footer">
                Who we are
              </Link>
              <Link to="/pricing" className="nav-link-footer">
                Pricing
              </Link>
              <Link to="/contact" className="nav-link-footer">
                Contact
              </Link>
              <Link to="/login" className="nav-link-footer">
                Courses
              </Link>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="section-title">Socials</h3>
            <div className="nav-links">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="nav-link-footer"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="nav-link-footer"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="nav-link-footer"
              >
                LinkedIn
              </a>
              <a
                href="https://www.x.com/"
                target="_blank"
                className="nav-link-footer"
              >
                Twitter - X
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="lineaFooter"></div>
      <div className="terms-container">
        <div className="terms-grid">
          <div className="rights">©2024 AVGI Group. All rights reserved</div>
          <div className="rights-container">
            <div className="terms">
              <Link to="/">Terms & Conditions</Link>
            </div>
            <div className="privacy">
              <Link to="/">Privacy & Policy</Link>
            </div>
            <a
              className="developed"
              href="https://webelopers.io/#home"
              target="_blank"
            >
              Developed by <a className="gradient-developed">WEBELOPERS</a>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
