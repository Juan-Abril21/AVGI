import "../../styles/Contact/WhatUThink.css";
import { useState } from "react";

type ContentKey =
  | "default"
  | "group1"
  | "group2"
  | "group3"
  | "group4"
  | "group5";

function WhatUThink() {
  const [activeContent, setActiveContent] = useState<ContentKey>("group3");

  const handleGridItemClick = (groupId: ContentKey): void => {
    setActiveContent(groupId);
  };
  return (
    <>
      <div className="whatUthink">
        <img className="contact-img" src="/Contact-img.png"></img>
        <img className="contact-img-mobile" src="/Contact-img-mobile.png"></img>
        <div className="contact-title">
          Let us <span className="gradient-text-plan">KNOW</span> what you{" "}
          <span className="gradient-text-plan">THINK</span>!
        </div>
      </div>
      <div className="business-logos">
        <div
          className="grid-itemE-think"
          onClick={() => handleGridItemClick("group1")}
        >
          <img
            src="/Group1.png"
            alt="Group 1"
            className={`logo-image ${
              activeContent === "group1" ? "active" : ""
            }`}
          />
        </div>
        <div
          className="grid-itemE-think"
          onClick={() => handleGridItemClick("group2")}
        >
          <img
            src="/Group2.png"
            alt="Group 2"
            className={`logo-image ${
              activeContent === "group2" ? "active" : ""
            }`}
          />
        </div>
        <div
          className="grid-itemE-think"
          onClick={() => handleGridItemClick("group3")}
        >
          <img
            src="/Reduced Logo.png"
            alt="Reduced Logo"
            className={`logo-image ${
              activeContent === "group3" ? "active" : ""
            }`}
          />
        </div>
        <div
          className="grid-itemE-think"
          onClick={() => handleGridItemClick("group4")}
        >
          <img
            src="/Group4.png"
            alt="Group 4"
            className={`logo-image ${
              activeContent === "group4" ? "active" : ""
            }`}
          />
        </div>
        <div
          className="grid-itemE-think"
          onClick={() => handleGridItemClick("group5")}
        >
          <img
            src="/Group5.png"
            alt="Group 5"
            className={`logo-image ${
              activeContent === "group5" ? "active" : ""
            }`}
          />
        </div>
      </div>
    </>
  );
}

export default WhatUThink;
