import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";

const UserReview = ({ review, handleDelete, handleEdit }) => {
  const { _id, email, massage, rating, serviceId, title } = review;

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full ">
          <thead>
            <tr>
              <th className="bg-secondary text-neutral">Service ID</th>
              <th className="bg-secondary text-neutral">Service Name</th>
              <th className="bg-secondary text-neutral">Your Rating</th>
              <th className="bg-secondary text-neutral">Email</th>
              <th className="bg-secondary text-neutral">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-semibold text-primary">
                      <p>{serviceId}</p>
                    </div>
                  </div>
                </div>
              </td>
              <td className="font-semibold text-primary">
                <p>{title}</p>
                <span className="text-sm">{massage.slice(0, 20)}...</span>
              </td>
              <td className="font-semibold text-primary">
                <p>{rating}</p>
              </td>
              <td className="font-semibold text-primary">
                <p>{email}</p>
              </td>
              <th>
                <label
                  htmlFor="my-modal-5"
                  className="btn py-3 px-4 bg-primary text-neutral text-xl text-center rounded hover:bg-secondary mr-1"
                >
                  <FaPen />
                </label>

                <input
                  type="checkbox"
                  id="my-modal-5"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box w-11/12 max-w-5xl">
                    <div className="w-full mt-6">
                      <input
                        type="text"
                        name="title"
                        required
                        defaultValue={title}
                        readOnly
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                      <textarea
                        name="massage"
                        className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Description"
                        required
                      ></textarea>
                      <label
                        htmlFor="my-modal-5"
                        className="btn float-right mt-2"
                      >
                        Yay!
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(_id)}
                  className="py-3 px-4 bg-primary text-neutral text-xl text-center rounded hover:bg-secondary ml-1"
                >
                  <FaTrash />
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserReview;
