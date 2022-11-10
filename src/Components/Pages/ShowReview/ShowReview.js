import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const ShowReview = ({ singleService, refresh }) => {
  const [showReview, setShowReview] = useState([]);
  const { _id } = singleService;

  useEffect(() => {
    fetch(`https://fly-with-me.vercel.app/reviews/${_id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setShowReview(data);
      });
  }, [_id, refresh]);

  return (
    <div>
      {showReview.length > 0 ? (
        <>
          {showReview.map((review) => (
            <Review key={review._id} review={review} />
          ))}
        </>
      ) : (
        <h1 className="text-center text-xl font-bold text-secondary uppercase mb-5">
          No Review Found
        </h1>
      )}
    </div>
  );
};

export default ShowReview;
