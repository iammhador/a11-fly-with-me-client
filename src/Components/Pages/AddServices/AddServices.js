import React from "react";
import toast from "react-hot-toast";
import serviceImg from "../../Assets/Take Away-bro.svg";

const AddServices = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const image = form.image.value;
    console.log(title, description, price, rating, image);
    const serviceData = {
      name: title,
      description: description,
      price: price,
      rating: rating,
      image: image,
    };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serviceData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Service Successfully Added");
      });
  };

  return (
    <div className=" mb-10">
      <section className=" mb-10">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-center text-5xl font-bold text-info uppercase mt-10">
            Add Your Services
          </h1>

          <div className="lg:flex lg:items-center lg:-mx-6 ">
            <div className="mt-8 lg:w-1/2 lg:mx-6 text-left my-auto">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden b rounded-lg shadow-2xllg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                <form onSubmit={handleSubmit} className="mt-6">
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-primary">
                      Service Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      required
                      placeholder="Country Name"
                      className="block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-primary">
                      Service Description
                    </label>
                    <input
                      type="text"
                      name="description"
                      placeholder="Detail Description"
                      required
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 sm:grid-cols-1">
                    <div className="flex-1 mt-6 mr-1">
                      <label className="block mb-2 text-sm text-primary">
                        Service Price
                      </label>
                      <input
                        type="text"
                        name="price"
                        placeholder="Price"
                        required
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div className="flex-1 mt-6 ml-1">
                      <label className="block mb-2 text-sm text-primary">
                        Service Rating
                      </label>
                      <input
                        type="text"
                        name="rating"
                        placeholder="Rating"
                        required
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-primary">
                      Image Link
                    </label>
                    <input
                      type="text"
                      name="image"
                      placeholder="Image URL"
                      required
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide  capitalize transition-colors duration-300 transform bg-secondary text-neutral focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 hover:bg-info">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <img src={serviceImg} alt="images" className="w-5/12" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddServices;
