import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/Context";

const AddReview = ({ singleService }) => {
  const { user } = useContext(AuthContext);
  const { _id, name } = singleService;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const title = form.title.value;
    const rating = form.rating.value;
    const massage = form.massage.value;
    const photo = form.photo.value;

    const addReview = {
      serviceId: _id,
      email: email,
      title: title,
      rating: rating,
      massage: massage,
      photo: photo,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("You Review Has Been Added");
      });
  };

  return (
    <div>
      <div className="mt-8 lg:mx-6 text-left">
        <div className="w-full px-8 py-10 mx-auto overflow-hidden b rounded-lg shadow-2xl  shadow-gray-300/50 dark:shadow-black/50">
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="flex-1">
              <label className="block mb-2 text-sm text-primary">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                defaultValue={user?.email}
                readOnly
                className="block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="flex-1 mt-6">
              <label className="block mb-2 text-sm text-primary">
                Photo Link
              </label>
              <input
                type="text"
                name="photo"
                required
                defaultValue={user?.photoURL}
                placeholder="Photo URL"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1">
              <div className="flex-1 mt-6">
                <label className="block mb-2 text-sm text-primary">
                  Service Title
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  defaultValue={name}
                  readOnly
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 mr-1"
                />
              </div>

              <div className="flex-1 mt-6">
                <label className="block mb-2 text-sm text-primary">
                  Service Rating
                </label>
                <input
                  type="text"
                  name="rating"
                  required
                  placeholder="Your Rating"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 ml-1"
                />
              </div>
            </div>

            <div className="w-full mt-6">
              <label className="block mb-2 text-sm">Your Thoughts</label>
              <textarea
                name="massage"
                className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide  capitalize transition-colors duration-300 transform bg-secondary text-neutral focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 hover:bg-info">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
