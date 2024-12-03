import React, { useRef, useEffect, useState } from "react";
import "../../styles/Courses/Experts-carousel.css"

interface Carousel {
  images: {
    topBand: string[];
    bottomBand: string[];
  };
}

const Carousel: React.FC<Carousel> = ({ images }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragInfo = useRef({
    startX: 0,
    scrollLeft: 0,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
  });

  const allImages = [...images.topBand, ...images.bottomBand];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const naturalSlide = (initialVelocity: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let velocity = initialVelocity;
    const decay = 0.95;
    const minVelocity = 0.5;

    const animate = () => {
      if (Math.abs(velocity) < minVelocity) return;
      carousel.scrollLeft -= velocity;
      velocity *= decay;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleTouchStart = (e: TouchEvent) => {
      setIsDragging(true);
      dragInfo.current = {
        startX: e.touches[0].pageX,
        scrollLeft: carousel.scrollLeft,
        lastX: e.touches[0].pageX,
        lastTime: Date.now(),
        velocity: 0,
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();

      const currentX = e.touches[0].pageX;
      const currentTime = Date.now();
      const deltaX = currentX - dragInfo.current.lastX;
      const deltaTime = currentTime - dragInfo.current.lastTime;

      if (deltaTime > 0) {
        dragInfo.current.velocity = (deltaX / deltaTime) * 16;
      }

      carousel.scrollLeft = dragInfo.current.scrollLeft - (currentX - dragInfo.current.startX);
      dragInfo.current.lastX = currentX;
      dragInfo.current.lastTime = currentTime;
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      if (Math.abs(dragInfo.current.velocity) > 0.5) {
        naturalSlide(dragInfo.current.velocity);
      }
    };

    carousel.addEventListener("touchstart", handleTouchStart, { passive: false });
    carousel.addEventListener("touchmove", handleTouchMove, { passive: false });
    carousel.addEventListener("touchend", handleTouchEnd);

    return () => {
      carousel.removeEventListener("touchstart", handleTouchStart);
      carousel.removeEventListener("touchmove", handleTouchMove);
      carousel.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  if (isMobile) {
    return (
      <div className="mobile-carousel-container" ref={carouselRef} style={{ touchAction: "none" }}>
        <div className="mobile-track-container">
          {allImages.map((src, index) => (
            <div key={`mobile-${index}`} className="mobile-item-container">
              <img src={src} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="carousel-container" ref={carouselRef}>
      <div className="band-container top-band-container">
        <div className="band-track-container">
          {images.topBand.map((src, index) => (
            <div key={`top-${index}`} className="carousel-item-container">
              <img src={src} alt={`Image ${index + 1}`} />
            </div>
          ))}
          {images.topBand.map((src, index) => (
            <div key={`top-duplicate-${index}`} className="carousel-item-container">
              <img src={src} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="band-container bottom-band-container">
        <div className="band-track-container reverse-container">
          {images.bottomBand.map((src, index) => (
            <div key={`bottom-${index}`} className="carousel-item-container">
              <img src={src} alt={`Image ${index + 7}`} />
            </div>
          ))}
          {images.bottomBand.map((src, index) => (
            <div key={`bottom-duplicate-${index}`} className="carousel-item-container">
              <img src={src} alt={`Image ${index + 7}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;