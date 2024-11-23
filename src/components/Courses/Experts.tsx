import "../../styles/Courses/Experts.css";
import Carrusel from "../Courses/Courses-carousel";

const images = {
  topBand: [
    "/experts-person.png",
    "/Rectangle prueba.png",
    "/Rectangle prueba.png",
    "/Rectangle prueba.png",
    "/Rectangle prueba.png",
    "/Rectangle prueba.png",
  ],
  bottomBand: [
    "/Rectangle prueba.png",
    "/Rectangle prueba.png",
    "/Rectangle prueba.png",
    "/Rectangle prueba.png",
    "/Rectangle prueba.png",
    "/Rectangle prueba.png",
  ],
};

function Experts() {
  return (
    <>
      <div className="experts">
        <div className="experts-grid">
          <div className="text-experts">
            <div className="title-experts">
              Learn <span className="gradient-text-experts">hand-in-hand</span> with
              certified experts
            </div>
            <div className="description-experts">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </div>
          </div>
          <div className="experts-images">
            <Carrusel images={images} />
          </div>
        </div>
        <div className="linea-white"></div>
      </div>
    </>
  );
}

export default Experts;
