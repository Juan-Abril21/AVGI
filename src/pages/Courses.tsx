import { useEffect } from "react";
import NavBarDark from "@/components/NavBarDark";
import Experts from "@/components/Courses/Experts";
import CoursesList from "@/components/Courses/CoursesList";
import Blog from "@/components/Courses/Blog";
import NewCourses from "@/components/Courses/NewCourses";
import "../styles/Courses/Courses.css";

function Courses() {
  useEffect(() => {
    // Añade la clase "courses-page" al body
    document.body.classList.add("courses-page");

    // Limpia la clase cuando el componente se desmonta
    return () => {
      document.body.classList.remove("courses-page");
    };
  }, []);

  return (
    <div className="custom-scrollbar">
      <NavBarDark />
      <Experts />
      <CoursesList />
      <Blog />
      <NewCourses />
    </div>
  );
}

export default Courses;
