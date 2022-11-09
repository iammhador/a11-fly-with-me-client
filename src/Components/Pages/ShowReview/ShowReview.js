import React, { useEffect, useState } from "react";

const ShowReview = ({ singleService }) => {
  const [showReview, setShowReview] = useState();
  const { _id } = singleService;
  console.log(showReview);
  //   console.log(_id);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${_id}`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(_id),
    })
      .then((res) => res.json())
      .then((data) => {
        setShowReview(data);
      });
  }, []);
  return <div>Hello World</div>;
};

export default ShowReview;
