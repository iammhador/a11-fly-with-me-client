import Aos from "aos";
import React, { useEffect } from "react";

const Faq = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div data-aos="fade-down" className="my-20">
      <h2 className="text-2xl leading-6 text-primary text-center px-4">FAQ</h2>
      <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold px-4 leading-10 text-info mt-6 text-center uppercase mb-10">
        Top Ask Question
      </h1>

      <div class="space-y-4">
        <details class="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary class="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h2 class="font-medium text-primary">Do I have to pay first?</h2>

            <svg
              class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p class="px-4 mt-4 leading-relaxed text-left text-primary">
            No, You don't have to pay first. After completing your traveling,
            you can pay me. But, If you want to pay first, you can pay me.
          </p>
        </details>

        <details class="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary class="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h2 class="font-medium text-primary">Are you trustable for me?</h2>

            <svg
              class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p class="px-4 mt-4 leading-relaxed text-left text-primary">
            I provide over two hundred plus services all over the world. If you
            want you can visit out community and ask our previous customers
            about my services.
          </p>
        </details>

        <details class="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary class="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h2 class="font-medium text-primary">
              Do you provide service all over the world?
            </h2>

            <svg
              class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p class="px-4 mt-4 leading-relaxed text-left text-primary">
            Sorry, Currently I provide service over twenty countries over the
            world. My major service are available in europe. Also, I provide my
            few services in asia. But, I'm not available on other countries.
          </p>
        </details>

        <details class="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary class="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h2 class="font-medium text-primary">
              If I not satisfied from your service, Will you refund?
            </h2>

            <svg
              class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p class="px-4 mt-4 leading-relaxed text-left text-primary">
            If you are not satisfied by my service, you can pay me low. But,
            there is no chance to refund or free services. It is my our of
            policy.
          </p>
        </details>
      </div>
    </div>
  );
};

export default Faq;
