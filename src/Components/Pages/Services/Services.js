import React from "react";
import { useLoaderData } from "react-router-dom";
import AllServices from "../AllServices/AllServices";
const Services = () => {
  const services = useLoaderData([]);
  console.log(services);
  return (
    <div className="my-10 w-4/5 mx-auto">
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
