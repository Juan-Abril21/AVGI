import "../../styles/Courses/CoursesList.css";
import VerticalCardCarousel from "./Courses-carousel";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Course {
  title: string;
  description: string;
  progress: number;
  image?: string;
}

const cardData: Course[] = [
  {
    title: "Curso de Finanzas",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/img-course.png",
    progress: 50,
  },
  {
    title: "Curso de Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit1231.",
    image: "/img-course.png",
    progress: 75,
  },
  {
    title: "Curso de Lorem Ipsum2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitsdfsdf.",
    image: "/img-course.png",
    progress: 25,
  },
  {
    title: "Curso de Lorem Ipsum3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscingdafadft.",
    image: "/img-course.png",
    progress: 90,
  },
];

type CourseListProps = {};

const CoursesList: React.FC<CourseListProps> = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  useEffect(() => {
    setSelectedCourse(cardData[0]);
  }, []);

  const handleCardClick = (course: Course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="courses">
      <div className="title-experts">
        Continue your <span className="gradient-text-courses">LEARNING</span>{" "}
        from where you left off
      </div>
      <div className="courses-grid">
        <div className="carousel-courses">
          <VerticalCardCarousel
            cards={cardData}
            onCardClick={handleCardClick}
          />
        </div>
        <div className="course-desc">
          {selectedCourse && (
            <div className="selected-course-card">
              <img
                className="img-desc-course"
                src="/img-course-desc.png"
                alt={selectedCourse.title}
              />
              <h3 className="desc-title-course">{selectedCourse.title}</h3>
              <p className="desc-desc-course">{selectedCourse.description}</p>
              <div className="card-buttons">
                <Link to={`/course/${encodeURIComponent(
                    selectedCourse.title.toLowerCase().replace(/\s+/g, "-")
                  )}`} className="btnContinueCourse">
                  Continue...
                </Link>
                <Link
                  to={`/courses/${encodeURIComponent(
                    selectedCourse.title.toLowerCase().replace(/\s+/g, "-")
                  )}`}
                  className="btnDetailsCourse"
                >
                  View Details
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
