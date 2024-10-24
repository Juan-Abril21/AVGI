import { useOnScreen } from "../UseOnScreen";
import "../../styles/WoWeAre/Hook.css";

function Hook() {
  const { ref, isIntersecting } = useOnScreen({ threshold: 0.1 });

  return (
    <div className="hook">
      <img src="/Hook.png" className="back-img" alt="Background" />
      <img
        src="/Hook mobile.png"
        className="back-img-mobile"
        alt="Mobile Background"
      />
      <div className="hook-content">
        <div
          className="hook-title1"
          ref={ref}
          style={{
            opacity: isIntersecting ? 1 : 0,
            transform: isIntersecting ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.5s ease-out",
          }}
        >
          We are the largest
          <br />
          Latin American
        </div>
        <div
          className="hook-title2"
          ref={ref}
          style={{
            opacity: isIntersecting ? 1 : 0,
            transform: isIntersecting ? "translateY(0)" : "translateY(20px)",
            transition: "all 2s ease-out",
          }}
        >
          <span className="gradient-text-hook">BUSINESS CONSULTING</span>
          <br />
          firm in the world!
        </div>
      </div>
    </div>
  );
}

export default Hook;
