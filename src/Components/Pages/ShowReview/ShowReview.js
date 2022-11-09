import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const ShowReview = ({ singleService }) => {
  const [showReview, setShowReview] = useState([]);
  const { _id } = singleService;
  // const { email, massage, rating, title, photo } = showReview;
  // console.log(showReview);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${_id}`, {
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
