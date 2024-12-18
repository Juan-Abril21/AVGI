import "../../styles/Courses/FooterDark.css";
import { LuInstagram, LuFacebook, LuLinkedin, LuMail } from "react-icons/lu";
import { Link } from "react-router-dom";

const FooterDark = () => {
  return (
    <>
      <div className="linea-footer-navbarDark"></div>
      <footer className="footerDark">
        <div className="footer-container">
          <div className="logo-section">
            <div className="logo-container">
              <img src="/Big Logo white.png" alt="AVGI Group Logo" />
            </div>
            <p className="company-descriptionDark">
              Think up solutions in your own way.
            </p>
            <div className="social-iconsDark">
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
            <h3 className="section-title-aboutDark">About</h3>
            <div className="contact-info">
              <p className="contact-itemDark">
                <span className="contact-label">Direction - </span>
                P.O. BOX 2516, Elizabeth, NJ 07207
              </p>
              <a
                className="contact-itemDark"
                href="mailto:Global@avgi.group"
                style={{ cursor: "pointer" }}
              >
                <a className="contact-label">Email - </a>
                Global@avgi.group
              </a>
              <a className="contact-itemDark" href="tel:9298378939">
                <span className="contact-label">Phone - </span>
                929 - 837 - 8929
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="section-titleDark">Explore</h3>
            <div className="nav-links">
              <Link to="/" className="nav-link-footerDark">
                Home
              </Link>
              <Link to="/whoweare" className="nav-link-footerDark">
                Who we are
              </Link>
              <Link to="/pricing" className="nav-link-footerDark">
                Pricing
              </Link>
              <Link to="/contact" className="nav-link-footerDark">
                Contact
              </Link>
              <Link to="/login" className="nav-link-footerDark">
                Courses
              </Link>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="section-titleDark">Socials</h3>
            <div className="nav-links">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="nav-link-footerDark"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="nav-link-footerDark"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="nav-link-footerDark"
              >
                LinkedIn
              </a>
              <a
                href="https://www.x.com/"
                target="_blank"
                className="nav-link-footerDark"
              >
                Twitter - X
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="lineaFooterDark"></div>
      <div className="terms-containerDark">
        <div className="terms-gridDark">
          <div className="rightsDark">
            ©2024 AVGI Group. All rights reserved
          </div>
          <div className="rights-container">
            <div className="termsDark">
              <Link to="/">Terms & Conditions</Link>
            </div>
            <div className="privacyDark">
              <Link to="/">Privacy & Policy</Link>
            </div>
            <a className="developedDark">
              Developed by{" "}
              <a
                className="gradient-developedDark"
                href="https://webelopers.io/#home"
                target="_blank"
              >
                WEBELOPERS
              </a>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterDark;
