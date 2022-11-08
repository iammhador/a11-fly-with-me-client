import React from "react";
import { FaStar, FaDollarSign, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllServices = ({ service }) => {
  const { _id, name, description, price, rating, image } = service;
  return (
    <div>
      <div href="#" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
        <img
          alt="Home"
          src={image}
          class="h-56 w-full rounded-md object-cover"
        />

        <div class="mt-2">
          <dl>
            <div>
              <dd class="text-left text-xl font-bold text-secondary mt-4 mb-1">
                {name}
              </dd>
              <p className="text-left text-primary">
                {description.slice(0, 100)} ...
              </p>
            </div>
          </dl>

          <div class="mt-6 flex items-center gap-8 text-xs">
            <div class="sm:inline-flex sm:shrink-0 sm:items-center">
              <FaDollarSign className="text-2xl text-secondary" />

              <div class="mt-1.5 sm:ml-3 sm:mt-0">
                <p class="text-primary">Charge</p>

                <p class="font-medium text-primary">{price}</p>
              </div>
            </div>

            <div class="sm:inline-flex sm:shrink-0 sm:items-center">
              <FaStar className="text-2xl text-secondary" />

              <div class="mt-1.5 sm:ml-3 sm:mt-0">
                <p class="text-primary">My Choice</p>

                <p class="font-medium text-primary">{rating}</p>
              </div>
            </div>

            <div class="sm:inline-flex sm:shrink-0 sm:items-center">
              <Link>
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
