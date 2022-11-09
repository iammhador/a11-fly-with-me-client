import React from "react";

const Review = ({ review }) => {
  return (
    <div>
      <div>
        {review ? (
          <div
            className="relative block rounded-xl border border-gray-100 p-8 shadow-xl mb-5"
            href=""
          >
            <span className="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
              {review?.rating}
            </span>

            <div className="mt-4 text-gray-500 sm:pr-8 text-left">
              <img
                src={review?.photo}
                alt="UserPhoto"
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
              />

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                {review?.email}
              </h3>

              <p className="mt-2 hidden text-sm sm:block">{review?.massage}</p>
            </div>
          </div>
        ) : (
          <>
            {" "}
            <p className="text-secondary">No Review Found</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Review;
