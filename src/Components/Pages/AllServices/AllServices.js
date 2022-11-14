import React, { useEffect, useState } from "react";
import { FaStar, FaDollarSign, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PhotoView, PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const AllServices = ({ service }) => {
  const { _id, name, description, price, rating, image } = service;
  const [serviceData, setServiceData] = useState();

  //# Fetch Data :
  useEffect(() => {
    fetch(`https://fly-with-me.vercel.app/services/${_id}`, {
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, [_id]);

  return (
    <div>
      <div
        href="#"
        className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
      >
        <PhotoProvider>
          <PhotoView src={image}>
            <img
              alt="Home"
              src={image}
              className="h-56 w-full rounded-md object-cover"
            />
          </PhotoView>
        </PhotoProvider>

        <div className="mt-2">
          <dl>
            <div>
              <dd className="text-left text-xl font-bold text-secondary mt-4 mb-1">
                {name}
              </dd>
              <p className="text-left text-primary">
                {description.slice(0, 100)} ...
              </p>
            </div>
          </dl>

          <div className="mt-6 flex items-center gap-8 text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center">
              <FaDollarSign className="text-2xl text-secondary" />

              <div className="mt-1.5 sm:ml-3 sm:mt-0">
                <p className="text-primary">Charge</p>

                <p className="font-medium text-primary">{price}</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center">
              <FaStar className="text-2xl text-secondary" />

              <div className="mt-1.5 sm:ml-3 sm:mt-0">
                <p className="text-primary">My Choice</p>

                <p className="font-medium text-primary">{rating}</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center">
              <Link to={`/services/${_id}`}>
                <button className="flex items-center py-3 px-5 bg-secondary rounded text-neutral hover:bg-info">
                  Details
                  <FaArrowRight className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
