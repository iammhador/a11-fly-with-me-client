import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Context";
import UserReview from "../UserReview/UserReview";
const MyReview = () => {
  const [userReview, setUserReview] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserReview(data);
      });
  }, [user?.email]);
  return (
    <div className="my-20">
      <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold px-4 leading-10 text-info mt-6 text-center uppercase mb-10">
        Your Reviews
      </h1>
      <div className="w-5/6 mx-auto">
        {userReview.map((review) => (
          <UserReview key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default MyReview;
