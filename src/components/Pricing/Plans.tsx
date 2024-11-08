import { useState, useEffect, useRef } from "react";
import "../../styles/Pricing/Plans.css";
import { Link } from "react-router-dom";
import NavigationMenuDemo from "../ui/MenuPlans";
import { TableDesktop, TableMobile } from "./Tables";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CardPlanProps {
  price: string;
  type: string;
  features: string[];
  isPopular?: boolean;
}

interface TrailPoint {
  x: number;
  y: number;
  id: number;
  opacity: number;
}

const CardPlan: React.FC<CardPlanProps> = ({
  price,
  type,
  features,
  isPopular,
}) => {
  const [trails, setTrails] = useState<TrailPoint[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setTrails((prevTrails) => [
      ...prevTrails,
      {
        x,
        y,
        id: Date.now(),
        opacity: 1,
      },
    ]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTrails((prevTrails) =>
        prevTrails.filter((trail) => Date.now() - trail.id < 1000)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`cardPlan ${isVisible ? "visible" : ""}`}
      onMouseMove={handleMouseMove}
      ref={cardRef}
    >
      {isPopular && <div className="most-popular">MOST POPULAR</div>}
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="trail-point-plan"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
          }}
        />
      ))}
      <div className="tarjet-price">
        <h1 className="plan-price">${price}</h1>
        <h1 className="plan-time">/month</h1>
      </div>
      <h2 className="plan-type">{type}</h2>
      <p className="plan-type-desc">Automation plus for enterprise featrues</p>
      {features.map((feature, index) => (
        <p key={index} className="type-info">
          <img className="check-img" src="/check.png" alt="check" />
          {feature}
        </p>
      ))}
      <Link to="/login" className="btnPlan">
        Choose Plan
      </Link>
    </div>
  );
};

const Plans: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<"Basic" | "Pro" | "Company">(
    "Basic"
  );
  const [currentPlan, setCurrentPlan] = useState(0);

  const handlePrevClick = () => {
    setCurrentPlan((prevPlan) => (prevPlan === 0 ? 2 : prevPlan - 1));
  };

  const handleNextClick = () => {
    setCurrentPlan((prevPlan) => (prevPlan === 2 ? 0 : prevPlan + 1));
  };

  const plans = {
    Basic: {
      price: "23",
      type: "Basic",
      features: ["Multi-step Zaps", "Lorem ipsum"],
    },
    Pro: {
      price: "55",
      type: "Pro",
      features: [
        "Multi-step Zaps",
        "Lorem ipsum",
        "Advanced administration",
        "Advanced administration",
      ],
    },
    Company: {
      price: "89",
      type: "Company",
      features: [
        "Multi-step Zaps",
        "Lorem ipsum",
        "Advanced administration",
        "Advanced administration",
        "Advanced administration",
      ],
      isPopular: true,
    },
  };

  return (
    <>
      <div className="plans">
        <div className="plans-title">
          We offer three <span className="gradient-text-plan">PLANS</span> to
          suit your needs
        </div>
        <p className="plans-desc">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam asdfas fadfajhg.
        </p>
        <div className="navigationMenuPlans">
          <NavigationMenuDemo
            currentPlan={selectedPlan}
            onPlanChange={setSelectedPlan}
          />
        </div>
        <div className="plans-grid">
          <div className="desktop-cards">
            <CardPlan {...plans.Basic} />
            <CardPlan {...plans.Pro} />
            <CardPlan {...plans.Company} />
          </div>

          <div className="mobile-card">
            <CardPlan {...plans[selectedPlan]} />
          </div>
        </div>
      </div>
      <div className="plan-details">
        <div className="plans-title2">
          Plan <span className="gradient-text-plan">DETAILS</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <ChevronLeft
            onClick={handlePrevClick}
            className="nav-arrow-plan left-arrow"
          />
          <h3 className="plan-text text-lg font-semibold">
            {Object.keys(plans)[currentPlan]} plan
          </h3>
          <ChevronRight
            onClick={handleNextClick}
            className="nav-arrow-plan right-arrow"
          />
        </div>
        <TableDesktop />
        <TableMobile currentPlan={currentPlan} />
      </div>
    </>
  );
};

export default Plans;
