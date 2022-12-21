import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Aos from "aos";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="my-20">
      <section>
        <div
          data-aos="fade-down"
          class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div class="relative z-10 lg:py-16">
              <div class="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src="https://i.ibb.co/pKzvWZt/pexels-mudassir-ali-1878293.jpg"
                  class="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div class="relative flex items-center bg-gray-100">
              <span class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div class="p-8 sm:p-16 lg:p-24">
                <h2 class="text-2xl font-bold sm:text-3xl">About Us</h2>

                <p class="mt-4 text-gray-600">
                  Travel can make our mind fresh and clear. You know how much
                  important to travel. So, my main target is provide best
                  service to our customers, so that you will get best travel
                  experience.
                </p>

                <Link to="/services">
                  <button className="flex items-center px-7 py-3 text-base font-normal rounded bg-secondary text-neutral hover:bg-info mx-auto mt-5">
                    Our Service <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
