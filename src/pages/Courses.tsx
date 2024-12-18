import { useEffect } from "react";
import NavBarDark from "@/components/NavBarDark";
import Experts from "@/components/Courses/Experts";
import CoursesList from "@/components/Courses/CoursesList";
import Blog from "@/components/Courses/Blog";
import NewCourses from "@/components/Courses/NewCourses";
import FooterDark from "@/components/Courses/FooterDark";
import "../styles/Courses/Courses.css";

function Courses() {
  useEffect(() => {
    document.body.classList.add("courses-page");

    return () => {
      document.body.classList.remove("courses-page");
    };
  }, []);

  return (
    <>
      <NavBarDark />
      <Experts />
      <CoursesList />
      <Blog />
      <NewCourses />
      <FooterDark />
    </>
  );
}

export default Courses;
