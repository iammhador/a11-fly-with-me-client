import React from "react";
import { Link } from "react-router-dom";
import bannnerImg from "../../Assets/undraw_adventure_re_ncqp.svg";
const Banner = () => {
  return (
    <div>
      <section className="mb-10">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Feel The Chill, <span className="text-info">Travel </span>The
              World
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              I'm a professional tourist guide. Provide tourist services all
              over the Europe and Asia. If you don't know where to start your
              vacation or which country is best for you to travel, feel free to
              contact with me.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                rel="noopener noreferrer"
                to=""
                className="px-8 py-3 text-lg font-semibold rounded bg-secondary text-neutral hover:bg-info"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={bannnerImg}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 my-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
