import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar, FaDollarSign } from "react-icons/fa";
import { PhotoView, PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import AddReview from "../AddReview/AddReview";
import ShowReview from "../ShowReview/ShowReview";
import { AuthContext } from "../../Context/Context";
import AOS from "aos";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const [refresh, setRefresh] = useState(false);
  const singleService = useLoaderData();
  const { name, description, price, rating, image } = singleService;

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div
      data-aos="fade-down"
      className="md:w-2/3 sm:w-full  mx-auto px-20 my-20"
    >
      <h1 className="text-center md:text-5xl sm:text-xl font-bold text-info uppercase mb-5">
        Information About {name}
      </h1>
      <div
        href="#"
        className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
      >
        <PhotoProvider>
          <PhotoView src={image}>
            <img
              alt="Home"
              src={image}
              className="h-96 w-full rounded-md object-cover"
            />
          </PhotoView>
        </PhotoProvider>
        <div className="mt-2">
          <dl>
            <div>
              <dd className="text-left text-xl font-bold text-secondary mt-4 mb-1">
                {name}
              </dd>
              <p className="text-left text-primary">{description}</p>
            </div>
          </dl>

          <div className="mt-6 flex items-center justify-between gap-8 text-xs">
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
          </div>
        </div>
      </div>

      <div className="my-10 mt-20">
        <h1 className="text-center text-5xl font-bold text-info uppercase mb-5">
          All Reviews
        </h1>
        <div>
          <ShowReview singleService={singleService} refresh={refresh} />
        </div>
      </div>

      <div className="my-10">
        {user && user?.email ? (
          <>
            <h1 className="text-center text-5xl font-bold text-info uppercase mb-5">
              Add Your Review
            </h1>
            <div>
              <AddReview
                singleService={singleService}
                setRefresh={setRefresh}
                refresh={refresh}
              />
            </div>
          </>
        ) : (
          <h1 className="text-center text-xl font-bold text-info uppercase mb-5">
            If Your Want To Add Your Review, Please{" "}
            <Link to="/login" className="text-secondary underline">
              Login
            </Link>{" "}
            First.
          </h1>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
