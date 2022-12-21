import React from "react";
import useTitle from "../../Hooks/useTitle";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Faq from "../Faq/Faq";
import Offer from "../Offer/Offer";
import Stats from "../Stats/Stats";
import Testimonials from "../Testimonials/Testimonials";
import ThreeService from "../ThreeService/ThreeService";

const Home = () => {
  useTitle("Home");
  return (
    <div className="w-4/5 mx-auto">
      <Banner />
      <AboutUs />
      <ThreeService />
      <Stats />
      <Testimonials />
      <Offer />
      <Faq />
      <Contact />
    </div>
  );
};

export default Home;
