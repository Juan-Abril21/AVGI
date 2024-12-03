import "../../styles/Courses/Blog.css";
import TestimonialCarousel from "./Blog-carousel";

interface Testimonial {
  name: string;
  date: string;
  description: string;
}

const topTestimonials: Testimonial[] = [
  {
    name: "Juan Pérez",
    date: "12 Nov 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ...",
  },
  {
    name: "Carlos Rodriguez",
    date: "20 Nov 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ...",
  },
  {
    name: "Laura Martínez",
    date: "5 Dic 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ...",
  }
];

const bottomTestimonials: Testimonial[] = [
  {
    name: "María García",
    date: "15 Oct 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ...",
  },
  {
    name: "Pedro Sánchez",
    date: "22 Oct 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ...",
  },
  {
    name: "Ana Torres",
    date: "30 Oct 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ...",
  },
  {
    name: "Luis Fernández",
    date: "10 Nov 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ...",
  },
];

type BlogListProps = {};

const Blog: React.FC<BlogListProps> = () => {
  return (
    <div className="blog">
      <div className="title-experts">
        Blog with <span className="gradient-text-blog">IMPORTANT</span>{" "}
        information
      </div>
      <TestimonialCarousel 
        topTestimonials={topTestimonials} 
        bottomTestimonials={bottomTestimonials} 
      />
    </div>
  );
};

export default Blog;