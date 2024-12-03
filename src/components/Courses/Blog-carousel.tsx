import React from "react";
import "../../styles/Courses/Blog-carousel.css";

interface Testimonial {
  name: string;
  date: string;
  description: string;
  image?: string;
}

interface TestimonialCarouselProps {
  topTestimonials: Testimonial[];
  bottomTestimonials: Testimonial[];
}

const getRandomColor = () => {
  const colors = [
    { border: 'rgba(233, 229, 49, 0.3)', title: '#e9e531' },     
    { border: 'rgba(167, 115, 168, 0.3)', title: '#a773a8' },     
    { border: 'rgba(48, 223, 153, 0.3)', title: '#30df99' },     
    { border: 'rgba(238, 238, 238, 0.3)', title: '#eeeeee' },    
    { border: 'rgba(228, 89, 143, 0.3)', title: '#E4598F' },     
    { border: 'rgba(84, 158, 206, 0.3)', title: '#549ECE' }      
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  topTestimonials,
  bottomTestimonials,
}) => {
  const fillTestimonials = (testimonials: Testimonial[]) => {
    const filledTestimonials = [...testimonials];
    while (filledTestimonials.length < 1) {
      filledTestimonials.push(testimonials[filledTestimonials.length % testimonials.length]);
    }
    return filledTestimonials.slice(0, 5);
  };

  const topFilled = fillTestimonials(topTestimonials);
  const bottomFilled = fillTestimonials(bottomTestimonials);

  return (
    <div className="testimonial-carousel-container">
      <div className="testimonial-carousel">
        <div className="testimonial-scroll-container">
          {/* Combine both bands into a single scrollable container */}
          <div className="testimonial-bands-wrapper">
            {/* Top Band */}
            <div className="testimonial-band top-band">
              {topFilled.map((testimonial, index) => {
                const color = getRandomColor();
                return (
                  <div 
                    key={`top-${index}`} 
                    className="testimonial-card"
                    style={{ 
                      borderColor: color.border,
                      boxShadow: `0 0 20px ${color.border}`,
                      borderWidth: '3px',
                      borderStyle: 'solid'
                    }}
                  >
                    <div className="testimonial-author">
                      <div className="author-details">
                        <h3 
                          className="author-name"
                          style={{ color: color.title }}
                        >
                          {testimonial.name}
                        </h3>
                        <p className="author-date">{testimonial.date}</p>
                      </div>
                    </div>

                    <div className="testimonial-description">
                      <p>{testimonial.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Band */}
            <div className="testimonial-band bottom-band">
              {bottomFilled.map((testimonial, index) => {
                const color = getRandomColor();
                return (
                  <div 
                    key={`bottom-${index}`} 
                    className="testimonial-card"
                    style={{ 
                      borderColor: color.border,
                      borderWidth: '3px',
                      boxShadow: `0 0 20px ${color.border}`,
                      borderStyle: 'solid'
                    }}
                  >
                    <div className="testimonial-author">
                      <div className="author-details">
                        <h3 
                          className="author-name"
                          style={{ color: color.title }}
                        >
                          {testimonial.name}
                        </h3>
                        <p className="author-date">{testimonial.date}</p>
                      </div>
                    </div>

                    <div className="testimonial-description">
                      <p>{testimonial.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;