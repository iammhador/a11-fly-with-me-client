import React from "react";
import userPhoto from "../../Assets/icons8-person-100.png";

const Review = ({ review }) => {
  return (
    <div>
      <div>
        {review ? (
          <div
            className="relative block rounded-xl border border-gray-100 p-8 shadow-xl mb-5 "
            href=""
          >
            <span className="absolute right-16 top-4 rounded-full  px-3 py-1.5 text-xs font-medium text-neutral bg-accent">
              {review?.title}
            </span>

            <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 text-xs font-medium text-neutral bg-accent">
              {review?.rating}
            </span>

            <div className="mt-6 text-gray-500 sm:pr-8 text-left">
              <img
                src={review?.photo ? review?.photo : userPhoto}
                alt="UserPhoto"
                referrerPolicy="no-referrer"
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
              />

              <h3 className="mt-4 text-xl font-bold text-secondary">
                {review?.email}
              </h3>

              <p className="mt-2 text-sm sm:block text-primary">
                {review?.massage}
              </p>
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
