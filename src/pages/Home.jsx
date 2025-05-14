import React from "react";
import Banner from "../componenets/home/Banner";
import WhoWeAre from "../componenets/home/WhoWeAre";
import Charge from "../componenets/home/Charge";
import Technologies from "../componenets/home/Technologies";
import Services from "../componenets/home/Services";
import Testimonial from "../componenets/home/Testimonial";
import Team from "../componenets/home/Team";
import Parallax from "../componenets/home/Parallax"
import ContactUs from "../componenets/home/ContactUs";

const Home = () => {
  return (
    <>
      <Banner />
      <WhoWeAre />
      <Charge />
      <Technologies />
      <Services />
      <Testimonial />
      <Team />
      <Parallax/>
      <ContactUs/>
     
    </>
  );
};

export default Home;
