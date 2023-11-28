import React, { useEffect } from "react";
import toast from "react-hot-toast";
import serviceImg from "../../Assets/Take Away-bro.svg";
import useTitle from "../../Hooks/useTitle";
import AOS from "aos";

const AddServices = () => {
  useTitle("Add Service");

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const serviceData = {
      name: title,
      description: description,
      price: price,
      rating: rating,
      image: image,
    };

    fetch("https://fly-with-me.vercel.app/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serviceData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Service Successfully Added");
        form.reset();
      });
  };

  return (
    <div data-aos="fade-down" className="mb-10">
      <section className="mb-10">
        <div className="container px-4 sm:px-6 md:px-8 py-12 mx-auto">
          <h1 className="text-center text-5xl font-bold text-info uppercase mt-10">
            Add Your Services
          </h1>

          <div className="flex flex-col-reverse lg:flex-row mt-8">
            <div className="lg:w-1/2 lg:mx-2 sm:w-full">
              <div className="w-full px-6 sm:px-10 py-10 mx-auto overflow-hidden rounded-lg shadow-xl bg-white  border border-gray-300 ">
                <form onSubmit={handleSubmit} className="mt-6">
                  <div className="mb-4">
                    <label className="block mb-2 text-sm text-primary">
                      Service Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      required
                      placeholder="Country Name"
                      className="block w-full px-4 py-2 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2 text-sm text-primary">
                      Service Description
                    </label>
                    <input
                      type="text"
                      name="description"
                      placeholder="Detail Description"
                      required
                      className="block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="mb-4">
                      <label className="block mb-2 text-sm text-primary">
                        Service Price
                      </label>
                      <input
                        type="text"
                        name="price"
                        placeholder="Price"
                        required
                        className="block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block mb-2 text-sm text-primary">
                        Service Rating
                      </label>
                      <input
                        type="text"
                        name="rating"
                        placeholder="Rating"
                        required
                        className="block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2 text-sm text-primary">
                      Image Link
                    </label>
                    <input
                      type="text"
                      name="image"
                      placeholder="Image URL"
                      required
                      className="block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <button className="w-full px-6 py-3 text-sm font-medium tracking-wide capitalize transition-colors duration-300 transform bg-secondary text-neutral focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 hover:bg-info">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="mt-8 lg:w-1/2 sm:w-full">
              <img
                src={serviceImg}
                alt="images"
                className="w-full h-auto lg:max-w-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddServices;
