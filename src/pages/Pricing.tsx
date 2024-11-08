import NavBar from "@/components/Home/NavBar";
import Footer from "@/components/Home/Footer";
import Testimonies from "@/components/Pricing/TestimoniesP";
import Plans from "@/components/Pricing/Plans";
import CTA from "@/components/Home/CTA";

function Pricing() {
  return (
    <>
      <NavBar />
      <Testimonies />
      <Plans />
      <CTA />
      <Footer />
    </>
  );
}

export default Pricing;
