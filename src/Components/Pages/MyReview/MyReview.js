import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
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

  const handleDelete = (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete the review?"
    );
    if (confirmation) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Review Deleted Successfully");
            const remaining = userReview.filter((rev) => rev._id !== !id);
            setUserReview(remaining);
          }
        });
    }
  };

  // const handleEdit = (id) => {
  //   const confirmation = window.confirm(
  //     "Are you sure you want to edit the review?"
  //   );
  //   if (confirmation) {
  //     fetch(`http://localhost:5000/reviews/${id}`, {
  //       method: "PATCH",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.deletedCount > 0) {
  //           toast.success("Review Deleted Successfully");
  //         }
  //       });
  //   }
  // };
  return (
    <div className="my-20">
      <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold px-4 leading-10 text-info mt-6 text-center uppercase mb-10">
        Your Reviews
      </h1>
      <div className="w-5/6 mx-auto">
        {userReview.map((review) => (
          <UserReview
            key={review._id}
            review={review}
            handleDelete={handleDelete}
            // handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default MyReview;
