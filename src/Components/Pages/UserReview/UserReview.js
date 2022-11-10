import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";
// import { Link } from "react-router-dom";

const UserReview = ({ review, handleDelete }) => {
  const { _id, email, title } = review;

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full ">
          <thead>
            <tr>
              <th className="bg-secondary text-neutral">Service ID</th>
              <th className="bg-secondary text-neutral">Service Name</th>
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
                      <p>{_id}</p>
                    </div>
                  </div>
                </div>
              </td>
              <td className="font-semibold text-primary">
                <p>{title}</p>
              </td>

              <td className="font-semibold text-primary">
                <p>{email}</p>
              </td>
              <th>
                {/* <Link to={`/review/${_id}`}> */}
                <button className="py-3 px-4 bg-primary text-neutral text-xl text-center rounded hover:bg-secondary ml-1">
                  <FaPen />
                </button>
                {/* </Link> */}

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
