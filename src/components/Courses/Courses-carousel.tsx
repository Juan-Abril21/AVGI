import React, { useRef } from "react";
import "../../styles/Courses/Courses-carousel.css";

interface Course {
  title: string;
  description: string;
  progress: number;
  image?: string;
}

interface CarouselProps {
  cards: Course[];
  onCardClick: (card: Course) => void;
}

const VerticalCardCarousel: React.FC<CarouselProps> = ({ cards, onCardClick }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (card: Course) => {
    onCardClick(card);
  };

  return (
    <div ref={carouselRef} className="vertical-card-carousel">
      <div className="carousel-content">
        {cards.map((card, index) => (
          <div
            key={index}
            className="carousel-card"
            onClick={() => handleCardClick(card)}
          >
            {card.image && (
              <img src={card.image} alt={card.title} className="card-image" />
            )}
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <div className="card-progress">
                {card.progress}% Complete
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalCardCarousel;