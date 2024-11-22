import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import "../../styles/Contact/Forms.css";

function Forms() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    // Verificar tamaño inicial
    checkMobileView();

    // Añadir event listener para cambios de tamaño
    window.addEventListener("resize", checkMobileView);

    // Limpiar event listener
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);

  const handleNext = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStep((prevStep) => prevStep - 1);
  };

  const handleCancel = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStep(1);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="thank-you-page">
        <picture className="thanks-contact-img-container">
          <source media="(min-width: 769px)" srcSet="/thank-you-img.png" />
          <source media="(max-width: 768px)" srcSet="/message-img.png" />
          <img
            src="/thank-you-img.png"
            alt="Success"
            className="thanks-contact-img"
          />
        </picture>
        <h2 className="thank-you-title">
          <span className="gradient-text-plan">THANK YOU</span> for contacting
          us!
        </h2>
        <p className="thank-you-message">
          Our team will be in touch with you shortly to resolve any concerns.
        </p>
        <img
          src="/Big Logo white.png"
          className="thank-you-logo"
          alt="Company Logo"
        />
      </div>
    );
  }

  return (
    <div className={`forms ${isMobile ? "mobile-view" : ""}`}>
      <div className="back-card-contact"></div>
      <ContactInfo isMobile={isMobile} />
      <div className="message-contact">
        <div className="message-title">
          Send us a <span className="gradient-text-message">MESSAGE</span>
        </div>
        <ContactForm
          step={step}
          onNext={handleNext}
          onBack={handleBack}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
          isMobile={isMobile}
        />
      </div>
    </div>
  );
}

interface ContactFormProps {
  step: number;
  onNext: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onBack: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isMobile: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({
  step,
  onNext,
  onBack,
  onCancel,
  onSubmit,
  isMobile,
}) => {
  const contactOptions = [
    "Global Operations",
    "Design & Development",
    "Junior Recruitment",
    "Marketing & Materials",
    "Southeast Asia Operations",
  ];

  return (
    <form
      onSubmit={onSubmit}
      className={`forms-contact ${isMobile ? "mobile-form" : ""}`}
    >
      {step === 1 && (
        <div className="form-step">
          <input
            type="text"
            placeholder="Name"
            className="input-name"
            required
            style={{
              width: isMobile ? "100%" : "90%",
              fontSize: isMobile ? "clamp(0.9rem, 3vw, 1.5rem)" : undefined,
            }}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input-name"
            required
            style={{
              width: isMobile ? "100%" : "90%",
              fontSize: isMobile ? "clamp(0.9rem, 3vw, 1.5rem)" : undefined,
            }}
          />
          <input
            type="text"
            placeholder="Location"
            className="input-name"
            required
            style={{
              width: isMobile ? "100%" : "90%",
              fontSize: isMobile ? "clamp(0.9rem, 3vw, 1.5rem)" : undefined,
            }}
          />
          <button
            onClick={onNext}
            className="btn-submit"
            style={{
              width: isMobile ? "auto" : "10vw",
              minWidth: isMobile ? "120px" : undefined,
              maxWidth: isMobile ? "200px" : undefined,
              marginTop: isMobile ? "1rem" : "10rem",
              alignSelf: isMobile ? "center" : undefined,
            }}
          >
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="form-step">
          <input
            type="email"
            placeholder="Email"
            className="input-name"
            required
            style={{
              width: isMobile ? "100%" : "90%",
              fontSize: isMobile ? "clamp(0.9rem, 3vw, 1.5rem)" : undefined,
            }}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="input-name"
            required
            style={{
              width: isMobile ? "100%" : "90%",
              fontSize: isMobile ? "clamp(0.9rem, 3vw, 1.5rem)" : undefined,
            }}
          />
          <input
            type="text"
            placeholder="Contact Time Preference"
            className="input-name"
            required
            style={{
              width: isMobile ? "100%" : "90%",
              fontSize: isMobile ? "clamp(0.9rem, 3vw, 1.5rem)" : undefined,
            }}
          />
          <div
            className="buttons-container"
            style={{
              flexDirection: isMobile ? "column" : "row",
              gap: "1rem",
              marginTop: isMobile ? "1rem" : "2rem",
            }}
          >
            <button
              onClick={onBack}
              className="btn-submit btn-back"
              style={{
                width: isMobile ? "100%" : "8vw",
                marginTop: 0,
              }}
            >
              Back
            </button>
            <button
              onClick={onNext}
              className="btn-submit"
              style={{
                width: isMobile ? "100%" : "10vw",
                marginTop: 0,
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="form-step">
          <select
            className="input-name"
            required
            style={{
              width: isMobile ? "100%" : "90%",
              fontSize: isMobile ? "clamp(0.9rem, 3vw, 1.5rem)" : undefined,
            }}
          >
            <option value="" disabled selected>
              Who do you want to contact?
            </option>
            {contactOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <textarea
            placeholder="Message (max 200 characters)"
            maxLength={200}
            className="input-name message-area"
            required
            style={{
              width: isMobile ? "100%" : "90%",
              fontSize: isMobile ? "clamp(0.9rem, 3vw, 1.5rem)" : undefined,
            }}
          />
          <div
            className="buttons-container"
            style={{
              flexDirection: isMobile ? "column" : "row",
              gap: "1rem",
              marginTop: isMobile ? "1rem" : "10rem",
            }}
          >
            <button
              onClick={onCancel}
              className="btn-submit btn-back"
              style={{
                width: isMobile ? "100%" : "8vw",
                marginTop: 0,
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-submit"
              style={{
                width: isMobile ? "100%" : "10vw",
                marginTop: 0,
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

const ContactInfo = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <div
      className="contact-img"
      style={{
        position: isMobile ? "static" : "relative",
        textAlign: isMobile ? "center" : "left",
      }}
    >
      <img src="/message-img.png" className="message-img" alt="Contact" />
      <h1
        className="contactUs"
        style={{
          left: isMobile ? "50%" : "13%",
          transform: isMobile ? "translateX(-50%)" : "none",
          textAlign: "center",
        }}
      >
        Contact Us
      </h1>
      <h1
        className="contact-information"
        style={{
          left: isMobile ? "50%" : "13%",
          transform: isMobile ? "translateX(-50%)" : "none",
          textAlign: "center",
        }}
      >
        Contact Information
      </h1>
      <div className="contact-chat">
        <FaWhatsapp />
        <a href="tel:9298378939" className="contact-number">
          929 - 837 - 8929
        </a>
      </div>
      <div className="contact-num">
        <LuPhone />
        <a href="tel:9298378939" className="contact-number">
          848 - 858 - 2828
        </a>
      </div>
      <div className="contact-emails">
        <MdMailOutline />
        <div className="e-mails">
          <a href="mailto:GLOBAL@AVGI.GROUP" className="contact-email">
            GLOBAL@AVGI.GROUP
          </a>
          <a href="mailto:D_N@AVGI.GROUP" className="contact-email">
            D_N@AVGI.GROUP
          </a>
          <a href="mailto:JRS@AVGI.GROUP" className="contact-email">
            JRS@AVGI.GROUP
          </a>
          <a href="mailto:MARMAT@AVGI.GROUP" className="contact-email">
            MARMAT@AVGI.GROUP
          </a>
          <a href="mailto:SEA@AVGI.GROUP" className="contact-email">
            SEA@AVGI.GROUP
          </a>
        </div>
      </div>
    </div>
  );
};

export default Forms;
