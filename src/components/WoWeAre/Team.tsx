import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../../styles/WoWeAre/Team.css";

const teamMembers = [
  {
    id: 1,
    image: "person1-team.png",
    name: "John Smith",
    position: "Executive Producer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e",
  },
  {
    id: 2,
    image: "person2-team.png",
    name: "Sarah Johnson ",
    position: "Creative Director",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nunc aliquam feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    id: 3,
    image: "person3-team.png",
    name: "Maria Gomez ",
    position: "Lead Designer",
    description:
      "Nullam eget felis eget nunc lobortis mattis aliquam. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(teamMembers.length - 1);

  const handleNext = () => {
    setPreviousIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrevious = () => {
    setPreviousIndex(currentIndex);
    setCurrentIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  const currentMember = teamMembers[currentIndex];
  const previousMember = teamMembers[previousIndex];

  return (
    <>
      <div className="navigation-buttons">
        <button className="nav-button left" onClick={handlePrevious}>
          <ChevronLeft size={32} />
        </button>
        <button className="nav-button right" onClick={handleNext}>
          <ChevronRight size={32} />
        </button>
      </div>
      <div className="team">
        <div className="card-team title">
          Our <span className="gradient-text-our-team">TEAM</span>
        </div>
        <div className="card-connector-team1-vertical"></div>
        <div className="card-team small-photo">
          <img
            src="Background-team1.png"
            className="background1-team"
            alt="background"
          />
          <img
            src={previousMember.image}
            className="person1-team"
            alt={previousMember.name}
            style={{ filter: "grayscale(100%)" }}
          />
        </div>
        <div className="card-connector-team1-horizontal"></div>

        <div className="card-team large-photo">
          <img
            src="Background-team1.png"
            className="background2-team"
            alt="background"
          />
          <img
            src={currentMember.image}
            className="person2-team"
            alt={currentMember.name}
          />
        </div>

        <div className="card-team description description-container">
          <div className="quote-mark">"</div>
          <p className="description-text">{currentMember.description}</p>
          <div className="member-info">
            <span className="member-name">{currentMember.name}</span>
            <span className="member-position"> - {currentMember.position}</span>
          </div>
        </div>
      </div>
      <div className="mision-grid">
        <div className="mision-text">
          Our <span className="gradient-text-our-mision">MISION</span> is to
          ensure that our team of professionals analyzes the market of each of
          the companies we advise, planning commercial strategies and evaluating
          the performance and productivity of their projects. This, combined
          with our appropriate mentoring, will unlock the potential for success
          of companies by positioning their brands, in addition to allowing them
          to obtain the profitability that their effort deserves.
        </div>
        <div className="card-connector-mision1-vertical"></div>
        <div className="mision-image">
          <img src="background-mision.png"></img>
        </div>
        <div className="card-connector-mision1-horizontal"></div>
      </div>
      <div className="vision-grid">
        <div className="mobile-photos-vision">
          <img
            className="background-vision-mobile"
            src="background-vision-mobile.png"
          ></img>
          <img
            className="people-vision-mobile"
            src="people-vision-mobile.png"
          ></img>
        </div>
        <img className="vision-image" src="vision-image.png"></img>
        <div className="vision-text">
          Our <span className="gradient-text-our-vision">VISION</span> is to
          expand hand in hand with our clients until we become an international
          benchmark in business consulting. We trust that our models,
          strategies, protocols and above all our passion will be synonymous
          with security, ethics and corporate excellence.
        </div>
        <div className="card-connector-vision1-vertical"></div>
        <div className="card-connector-vision1-horizontal"></div>
      </div>
    </>
  );
}

export default Team;
