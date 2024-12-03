import NavBarDark from "@/components/NavBarDark";
import Experts from "@/components/Courses/Experts";
import CoursesList from "@/components/Courses/CoursesList";
import Blog from "@/components/Courses/Blog";

function Courses() {
  return (
    <>
      <NavBarDark />
      <Experts />
      <CoursesList />
      <Blog />
    </>
  );
}

export default Courses;
