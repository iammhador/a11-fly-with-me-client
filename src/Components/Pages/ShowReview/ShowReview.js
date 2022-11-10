import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const ShowReview = ({ singleService }) => {
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
  }, [_id]);

  return (
    <div>
      {showReview.map((review) => (
        <Review key={review._id} review={review} />
      ))}
    </div>
  );
};

export default ShowReview;
