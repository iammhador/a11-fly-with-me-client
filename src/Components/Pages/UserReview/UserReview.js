import React from "react";
import toast from "react-hot-toast";
import { FaPen, FaTrash } from "react-icons/fa";

const UserReview = ({ review, handleDelete }) => {
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
                <button className=" py-3 px-4 bg-primary text-neutral text-xl text-center rounded hover:bg-secondary mr-1">
                  <FaPen className="" />
                </button>

                <button
                  onClick={() => handleDelete(_id)}
                  className=" py-3 px-4 bg-primary text-neutral text-xl text-center rounded hover:bg-secondary ml-1"
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
