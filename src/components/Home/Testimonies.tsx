import { useState } from "react";
import "../../styles/Home/Testimonies.css";
import { useOnScreen } from "../UseOnScreen";

interface Testimony {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimony[] = [
  {
    id: 1,
    name: "Marcella Manzoni",
    role: "Chief Digital Customer",
    company: "Safilo Group",
    content:
      "The market analysis and strategic recommendations we received were fundamental to successfully launch our new product. We appreciate their support, experience and human quality.",
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

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
  const { ref, isIntersecting } = useOnScreen({ threshold: 0.1 });

  return (
    <div 
      className="testimonials-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        background: 'linear-gradient(to bottom, #f8fafc, white)',
        marginTop: '-100px',
        paddingTop: '100px',
      }}
    >
      <div 
        className="testimonials-container" 
        ref={ref}
        style={{
          opacity: isIntersecting ? 1 : 0,
          transform: isIntersecting ? "translateY(0)" : "translateY(20px)",

          position: 'relative',
          zIndex: 2,
        }}
      >
        <div className="testimonial-content">
          <img
            src={testimonials[currentTestimonial].avatar}
            alt={testimonials[currentTestimonial].name}
            className="testimonial-main-avatar"
          />
          <p className="testimonial-text">
            {testimonials[currentTestimonial].content}
          </p>
          <h3 className="testimonial-name">
            {testimonials[currentTestimonial].name}
          </h3>
          <p className="testimonial-role">
            {testimonials[currentTestimonial].role},{" "}
            {testimonials[currentTestimonial].company}
          </p>
        </div>

        <div className="avatar-navigation">
          {testimonials.map((testimony, index) => (
            <button
              key={testimony.id}
              onClick={() => setCurrentTestimonial(index)}
              className={`avatar-button ${
                currentTestimonial === index ? "active" : ""
              }`}
            >
              <img
                src={testimony.avatar}
                alt={testimony.name}
                className="avatar-image"
              />
            </button>
          ))}
        </div>
        <div className="linea"></div>
      </div>
    </div>
  );
}