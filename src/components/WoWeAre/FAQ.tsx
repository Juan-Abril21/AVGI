import "../../styles/WoWeAre/FAQ.css";
import AccordionDemo from "@/components/ui/accordion";
import { Link } from "react-router-dom";

function FAQ() {
  return (
    <div className="FAQ">
      <div className="FAQ-title">
        Frequently asked <span className="gradient-text-FAQ">QUESTIONS</span>
      </div>
      <AccordionDemo />
      <div className="FAQ-subtitle">
        Didn't find what you were looking for?
      </div>
      <div className="information-button">
          <Link to="/contact" className="btnInformation">
            More information
          </Link>
        </div>
    </div>
  );
}

export default FAQ;
