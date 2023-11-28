import React, { useEffect } from "react";
import AOS from "aos";
import useTitle from "../../Hooks/useTitle";
import countrySides from "../../Assets/Countrysides.jpg";
import jungle from "../../Assets/Jungle.jpg";
import nature from "../../Assets/Nature.jpg";
import mountains from "../../Assets/Mountains.jpg";
import seashore from "../../Assets/Seashore.jpg";
import sunsets from "../../Assets/Sunsets.jpg";
const Blog = () => {
  useTitle("Blog");

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div data-aos="fade-down" className="py-10">
      <section className="">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl text-secondary">
            Blog Section
          </h2>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-3 lg:px-12 xl:px-32">
            <div data-aos="fade-down" className="text-left">
              <img
                src={nature}
                alt="Nature Image"
                className="mb-4 w-full h-auto"
              />
              <h3 className="font-semibold text-primary">
                Exploring the Wonders of Nature
              </h3>
              <p className="mt-1 text-gray-400">
                Dive into the breathtaking beauty of nature, where every leaf,
                every flower, and every sunset tells a unique story. Nature is
                the ultimate artist, creating masterpieces that leave us
                awe-struck.
              </p>
            </div>

            <div data-aos="fade-down" className="text-left">
              <img
                src={countrySides}
                alt="Country Image"
                className="mb-4 w-full h-auto"
              />
              <h3 className="font-semibold text-primary">
                Journey Through Charming Countrysides
              </h3>
              <p className="mt-1 text-gray-400">
                Experience the charm of tranquil countrysides, where rolling
                hills, quaint villages, and warm hospitality come together to
                create a perfect escape. Discover the hidden gems of country
                life.
              </p>
            </div>

            <div data-aos="fade-down" className="text-left">
              <img
                src={mountains}
                alt="Mountain Image"
                className="mb-4 w-full h-auto"
              />
              <h3 className="font-semibold text-primary">
                Majestic Mountains and Adventure
              </h3>
              <p className="mt-1 text-gray-400">
                Embark on a journey to the towering peaks of majestic mountains.
                Whether you seek adventure or serenity, the mountains offer a
                playground for exploration and self-discovery.
              </p>
            </div>

            <div data-aos="fade-down" className="text-left">
              <img
                src={seashore}
                alt="Beach Image"
                className="mb-4 w-full h-auto"
              />
              <h3 className="font-semibold text-primary">
                Serenity by the Seashore
              </h3>
              <p className="mt-1 text-gray-400">
                Relax and unwind as you listen to the soothing waves on the
                beach. Discover the serenity of the seashore and let the
                expansive ocean views calm your soul.
              </p>
            </div>

            <div data-aos="fade-down" className="text-left">
              <img
                src={jungle}
                alt="Urban Image"
                className="mb-4 w-full h-auto"
              />
              <h3 className="font-semibold text-primary">
                Exploring the Urban Jungle
              </h3>
              <p className="mt-1 text-gray-400">
                Immerse yourself in the hustle and bustle of the urban jungle.
                From towering skyscrapers to vibrant street life, experience the
                energy and diversity of city living.
              </p>
            </div>

            <div data-aos="fade-down" className="text-left">
              <img
                src={sunsets}
                alt="Sunset Image"
                className="mb-4 w-full h-auto"
              />
              <h3 className="font-semibold text-primary">
                Chasing Sunsets Around the World
              </h3>
              <p className="mt-1 text-gray-400">
                Join the quest for the most stunning sunsets across the globe.
                Each sunset is a unique masterpiece, painting the sky with
                vibrant colors and casting a magical glow over the landscapes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
