import "../../styles/WoWeAre/Purpose.css";
import { useOnScreen } from "../UseOnScreen";

function Purpose() {
  const { ref, isIntersecting } = useOnScreen({});
  return (
    <div
      className="purpose"
      ref={ref}
      style={{
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <div className="purpose-text ">
        Our purpose as founders was to design a space where innovation, strategy
        and talent came together to drive business success. This allowed us to
        form a work team over the years with which we have corporate excellence,
        commitment to our clients and business ethics as our philosophy.
      </div>
      <br />
      <div className="purpose-text2 ">
        We truly believe that each company is unique and deserves a personalized
        solution to achieve its goals. Something that our clients are happy
        about and they recommend us with the certainty that if we accept a new
        challenge it is because we will be “on the front line”, managing their
        projects with such efficiency and commitment that the results will be
        seen from the first week.
      </div>
    </div>
  );
}
export default Purpose;
