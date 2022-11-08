import React from "react";

const Stats = () => {
  return (
    <div className="mt-28 mb-10">
      <h1 className="text-center text-5xl font-bold text-info uppercase mt-10">
        Our Stats
      </h1>
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div class="text-center md:border-r border-secondary">
            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-secondary">
              2.6k
            </h6>
            <p class="text-sm font-medium tracking-widest text-primaryuppercase lg:text-base">
              Register Users
            </p>
          </div>

          <div class="text-center md:border-r border-secondary">
            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-secondary">
              576
            </h6>
            <p class="text-sm font-medium tracking-widest text-primary uppercase lg:text-base">
              Provided Services
            </p>
          </div>

          <div class="text-center md:border-r border-secondary">
            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-secondary">
              18
            </h6>
            <p class="text-sm font-medium tracking-widest text-primary uppercase lg:text-base">
              Total Service
            </p>
          </div>

          <div class="text-center">
            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-secondary">
              9
            </h6>
            <p class="text-sm font-medium tracking-widest text-primary uppercase lg:text-base">
              Country
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
