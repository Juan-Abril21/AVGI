import { useState } from "react";
import "../../styles/Courses/newCourses.css";
import { Link } from "react-router-dom";

const courseData = [
  {
    image: "/img-course-desc.png",
    title: "Curso de impulso empresarial",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/img-course-desc.png",
    title: "Curso de finanzas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/img-course-desc.png",
    title: "Curso de finanzas2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/img-course-desc.png",
    title: "Curso de finanzas3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/img-course-desc.png",
    title: "Curso de ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function NewCourses() {
  const [displayData, setDisplayData] = useState(courseData);

   const handlePrev = () => {
    setDisplayData(prevData => {
      const newData = [...prevData];
      newData.unshift(newData.pop()!); // Use non-null assertion
      return newData;
    });
  };

  const handleNext = () => {
    setDisplayData(prevData => {
      const newData = [...prevData];
      newData.push(newData.shift()!); // Use non-null assertion
      return newData;
    });
  };

  const middleIndex = Math.floor(displayData.length / 2);

  return (
    <div className="newCourses">
      <div className="title-newCourses">
        <span className="gradient-text-experts">NEW</span> courses
      </div>
      <div className="subtitle-newCourses">
        The newest content available for you
      </div>

      <div className="cardsNewCourses-container">
        {displayData.map((course, index) => {
          const isFocused = index === middleIndex;
          const courseSlug = course.title
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "");
          return (
            <div
              key={index}
              className={`cardNewCourses ${isFocused ? "focused" : ""}`}
            >
              <img
                className="newCourse-img"
                src={course.image}
                alt={course.title}
              />
              <h3 className="title-newCourse">{course.title}</h3>
              <p className="desc-newCourse">{course.description}</p>
              <div className="card-buttons-newCourses">
                <Link
                  to={`/course/${courseSlug}`}
                  className="btnContinueCourse"
                  onClick={(e) => !isFocused && e.preventDefault()}
                  style={{ 
                    pointerEvents: isFocused ? 'auto' : 'none', 
                    
                  }}
                >
                  Start
                </Link>
                <Link
                  to={`/courses/${courseSlug}`}
                  className="btnDetailsCourse"
                  onClick={(e) => !isFocused && e.preventDefault()}
                  style={{ 
                    pointerEvents: isFocused ? 'auto' : 'none', 
                    
                  }}
                >
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="navigation">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
}

export default NewCourses;