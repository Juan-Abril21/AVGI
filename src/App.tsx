import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhoWeAre from "./pages/WhoWeAre";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Login from "./pages/LogIn";
import Register from "./pages/Register";
import ScrollToTop from "./components/ScrollToTop";
import Courses from "./pages/Courses";

function App() {
  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whoweare" element={<WhoWeAre />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
