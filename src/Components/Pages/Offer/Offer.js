import Aos from "aos";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Offer = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div
      data-aos="fade-down"
      className="p-6 py-12 bg-gray-50 shadow-lg rounded-xl"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center text-6xl tracking-tighter font-bold">
            Up to 30% Off
          </h2>
          <div className="space-x-2 text-center py-2 lg:py-0">
            <span>Only our france services! Only for this</span>
            <span className="font-bold text-lg">winter</span>
          </div>
          <Link to="/services/6369f38effbe0bb1913ac45a">
            <button className="flex items-center px-8 py-3 text-base font-medium rounded bg-secondary text-neutral hover:bg-info mx-auto">
              Get Service <FaArrowRight className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offer;
