import NavBar from "@/components/Home/NavBar";
import Hook from "@/components/WoWeAre/Hook";
import Purpose from "@/components/WoWeAre/Purpose";
import Phrase from "@/components/WoWeAre/Phrase";
import Team from "@/components/WoWeAre/Team";
import Location from "@/components/WoWeAre/Location";

import Footer from "@/components/Home/Footer";
import WorkinkgOn from "@/components/WorkingOn";

function WhoWeAre() {
  return (
    <>
      <NavBar />
      <Hook />
      <Purpose />
      <Phrase />
      <Team />
      <Location />
      <WorkinkgOn />
      <Footer />
    </>
  );
}

export default WhoWeAre;
