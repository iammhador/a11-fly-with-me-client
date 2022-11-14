import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import SingleService from "../SingleService/SingleService";

const ThreeService = () => {
  const [service, setService] = useState([]);

  //# Limited Service Showed By Using useEffect :
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="mb-10">
      <h1 className="text-center text-5xl font-bold text-info uppercase mb-10">
        Our Service
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 mb-10">
        {service.map((singleSer) => (
          <SingleService key={singleSer._id} singleSer={singleSer} />
        ))}
      </div>
      <div className="mt-20">
        <Link to="/services">
          <button className="flex items-center px-8 py-3 text-lg font-semibold rounded bg-secondary text-neutral hover:bg-info mx-auto">
            See All <FaArrowRight className="ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThreeService;
