import "../../styles/Home/OurWork.css";
import Carrusel from "../../components/Home/Work-carousel.tsx";

const images = {
  leftBand: [
    '/Rectangle prueba.png',
    '/Rectangle prueba.png',
    '/Rectangle prueba.png',
    '/Rectangle prueba.png',
    '/Rectangle prueba.png',
    '/Rectangle prueba.png',
  ],
  centerBand: [
    '/Rectangle prueba.png',
    '/Rectangle prueba.png',
    '/Rectangle prueba.png',
    '/Rectangle prueba.png',
    '/Rectangle prueba.png',
    '/Rectangle prueba.png',
  ],
  rightBand: [
    '/Rectangle prueba.png',
    '/Rectangle prueba.png',
    '/Rectangle prueba.png',
    '/Rectangle prueba.png',
    '/Rectangle prueba.png',
    '/Rectangle prueba.png',
  ]
};

function OurWork() {

  return (
    <div className="our-work">
      <div className="our-work-grid">
        <div className="our-work-title">
          Our <span className="gradient-text-our-work">WORK</span>
        </div>
        <div className="our-work-description">
          Excited to work together on your next project?
        </div>
        <div className="our-work-description2">
          Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit
          phasellus mollis sit aliquam sit nullam.
        </div>
        <div className="our-work-description-mobile">
          Swipe to see more
        </div>
        <div className="our-work-images"><Carrusel images={images}/></div>
      </div>
    </div>
  );
}

export default OurWork;