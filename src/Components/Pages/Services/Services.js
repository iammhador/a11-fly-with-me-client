import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import AllServices from "../AllServices/AllServices";
const Services = () => {
  useTitle("Service");

  const services = useLoaderData([]);
  return (
    <div className="my-10 md:w-4/5 sm:w-full mx-auto">
      <h1 className="text-center text-5xl font-bold text-info uppercase mb-5">
        Our Services
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1">
        {services.map((service) => (
          <AllServices key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
