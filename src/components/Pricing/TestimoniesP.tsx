import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../../styles/Pricing/Testimonies.css";

interface Testimonies {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonies[] = [
  {
    id: 1,
    name: "Marcella Manzoni",
    role: "Chief Digital Customer",
    company: "Safilo Group",
    content:
      "We greatly appreciated the personalized attention we received. Not only did we get practical and useful solutions, but also ongoing support that made all the difference.",
    avatar: "/Avatar1.png",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Tech Solutions",
    content:
      "Working with AVGI GROUP has been transformative for our company. Thank you for the important support in our structuring. Highly recommended for any company looking to grow efficiently!",
    avatar: "/Avatar2.png",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Product Manager",
    company: "Innovation Corp",
    content:
      "The digital marketing training they provided us was a definite game changer for our company! We have achieved greater visibility, saving money and improving engagement with our customers through social media.",
    avatar: "/Avatar3.png",
  },
  {
    id: 4,
    name: "MARCELLO GRAMEGNA",
    role: "CFO",
    company: "Venchi-1878",
    content:
      "Their consultancy helped us overcome a financial crisis with clear, effective strategies and a detailed action plan. Their support was crucial to the recovery of our family legacy.",
    avatar: "/Avatar4.png",
  },
  {
    id: 5,
    name: "Barreta's Brothers",
    role: "Founders, Barreta",
    company: "Plumbing",
    content:
      "Our internal decision-making process became more efficient and respectful after working with them. We now make decisions in a boardroom based on accurate, well-analyzed data and respecting the majority decision.",
    avatar: "/Avatar5.png",
  },
];

function Testimonies() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const handlePrev = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const greenCircleStyle = {
    transform: `translateY(${currentTestimonial * 20}px)`
  };

  const redCircleStyle = {
    transform: `translateY(-${currentTestimonial * 20}px)`
  };

  return (
    <div className="pricing-testimonies">
      <div className="Ptestimonies-title">
        <span className="gradient-text-testimoniesP">WHAT</span> our clients{" "}
        <span className="gradient-text-testimoniesP2">SAY</span>
      </div>
      <div className="navigation-arrows">
        <ChevronLeft onClick={handlePrev} className="nav-arrow left-arrow" />
        <ChevronRight onClick={handleNext} className="nav-arrow right-arrow" />
      </div>
      <div className="testimoniesP-card-container">
        <div className="green-circle" style={greenCircleStyle}></div>
        <div className="red-circle" style={redCircleStyle}></div>
        <div className="testimoniesP-card">
          <img
            className="quote-mark-testimonies"
            src="quote-mark.png"
            alt="Quote mark"
          />
          <div className="testimonieP-desc">
            {testimonials[currentTestimonial].content}
          </div>
          <div className="people-info-testimonies">
            <img
              className="testimonieP-avatar"
              src={testimonials[currentTestimonial].avatar}
              alt="Avatar"
            />
            <div className="info-testimonie">
              <div className="testimonieP-name">
                {testimonials[currentTestimonial].name}
              </div>
              <p className="testimonialP-role">
                {testimonials[currentTestimonial].role},{" "}
                {testimonials[currentTestimonial].company}
              </p>
            </div>
            <div className="rating-bar">
              ★★★★☆
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonies;