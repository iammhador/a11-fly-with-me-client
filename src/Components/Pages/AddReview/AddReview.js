import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/Context";

const AddReview = ({ singleService }) => {
  const { user } = useContext(AuthContext);
  const { _id, name } = singleService;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const massage = form.massage.value;
    const rating = form.rating.value;

    const addReview = {
      serviceId: _id,
      email: user.email,
      title: name,
      rating: rating,
      massage: massage,
      photo: user.photoURL,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addReview),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("You Review Has Been Added");
        form.reset();
      });
  };

  return (
    <div>
      <div className="mt-8 lg:mx-6 text-left">
        <div className="w-full px-8 py-10 mx-auto overflow-hidden b rounded-lg shadow-2xl  shadow-gray-300/50 dark:shadow-black/50">
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="w-full mt-6">
              <textarea
                name="massage"
                className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Your Thoughts About Our Service"
                required
              ></textarea>
            </div>
            <input
              type="text"
              name="rating"
              required
              placeholder="Service Rating"
              className="block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />

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
