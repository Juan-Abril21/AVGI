import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/Home/CTA.css";

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

const CTA: React.FC = () => {
    const [trails, setTrails] = useState<TrailPoint[]>([]);
    const requestRef = useRef<number>();
    const previousTimeRef = useRef<number>();
    const ctaRef = useRef<HTMLDivElement>(null);
  
    const animate = (time: number) => {
      if (previousTimeRef.current !== undefined) {
        setTrails(prevTrails =>
          prevTrails
            .filter(trail => Date.now() - trail.id < 1000)
            .map(trail => ({
              ...trail,
              opacity: Math.max(0, 1 - (Date.now() - trail.id) / 2000)
            }))
        );
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };
  
    useEffect(() => {
      requestRef.current = requestAnimationFrame(animate);
      return () => {
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
        }
      };
    }, []);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      setTrails(prevTrails => [
        ...prevTrails,
        {
          x,
          y,
          id: Date.now(),
          opacity: 1
        }
      ]);
    };
  return (
    <div 
    className={`CTA 'visible' : ''}`}
      onMouseMove={handleMouseMove}
      ref={ctaRef}
    >
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="trail-point"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
          }}
        />
      ))}
      
      <div className="CTA-content">
        <div className="CTA-title">
          Do you want to <span className="gradient-text-CTA">BOOST</span> your
          company's potential?
        </div>
        <div className="CTA-description">
          <Link to="/pricing" className='contact-link'>Contact</Link>{" "}our team of experts today and let us discover the successful business strategy that your business needs.
        </div>
      </div>
    </div>
  );
};

export default CTA;