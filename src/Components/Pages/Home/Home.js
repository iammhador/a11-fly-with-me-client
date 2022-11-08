import React from "react";
import Banner from "../Banner/Banner";
import Stats from "../Stats/Stats";
import Testimonials from "../Testimonials/Testimonials";
import ThreeService from "../ThreeService/ThreeService";

const Home = () => {
  return (
    <div className="w-4/5 mx-auto">
      <Banner />
      <ThreeService />
      <Stats />
      <Testimonials />
    </div>
  );
};

export default Home;
