import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar, FaDollarSign } from "react-icons/fa";
import { PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import AddReview from "../AddReview/AddReview";
import ShowReview from "../ShowReview/ShowReview";
const ServiceDetails = () => {
  const singleService = useLoaderData();
  const { name, description, price, rating, image } = singleService;

  return (
    <div className="md:w-2/3 sm:w-full  mx-auto px-20 my-20">
      <h1 className="text-center md:text-5xl sm:text-xl font-bold text-info uppercase mb-5">
        Information About {name}
      </h1>
      <div href="#" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
        <PhotoView src={image}>
          <img
            alt="Home"
            src={image}
            class="h-96 w-full rounded-md object-cover"
          />
        </PhotoView>

        <div class="mt-2">
          <dl>
            <div>
              <dd class="text-left text-xl font-bold text-secondary mt-4 mb-1">
                {name}
              </dd>
              <p className="text-left text-primary">{description}</p>
            </div>
          </dl>

          <div class="mt-6 flex items-center justify-between gap-8 text-xs">
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
          </div>
        </div>
      </div>

      <div className="my-10">
        <h1 className="text-center text-5xl font-bold text-info uppercase mb-5">
          Add Review
        </h1>
        <div>
          <AddReview singleService={singleService} />
        </div>
      </div>

      <div className="my-10 mt-20">
        <h1 className="text-center text-5xl font-bold text-info uppercase mb-5">
          All Reviews
        </h1>
        <div>
          <ShowReview singleService={singleService} />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
