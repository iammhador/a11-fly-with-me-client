// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { useLoaderData } from "react-router-dom";

// const EditReview = () => {
//   const [reviewData, setReviewData] = useState(null);
//   console.log(reviewData);
//   const editReviewInfo = useLoaderData();
//   const { _id, title, massage, rating } = editReviewInfo;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const rating = e.target.rating.value;
//     const massage = e.target.massage.value;

//     const editReview = {
//       massage,
//     };
//     fetch(`https://fly-with-me.vercel.app/allreviews/${_id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "Application/json",
//       },
//       body: JSON.stringify(editReview),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.modifiedCount > 0) {
//           toast.success("Update Successful");
//         }
//       });
//   };
//   return (
//     <div className="my-20">
//       <h1 className="text-center text-5xl font-bold text-info uppercase mt-10">
//         Edit Your Review
//       </h1>
//       <form
//         onSubmit={handleSubmit}
//         className="mt-6 w-5/6 my-10 mx-auto text-left"
//       >
//         <div className="flex-1">
//           <label className="block mb-2 text-sm text-primary">
//             Service Title
//           </label>
//           <input
//             type="text"
//             name="title"
//             defaultValue={title}
//             readOnly
//             className="block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
//           />
//         </div>

//         <div className="flex-1 mt-6">
//           <label className="block mb-2 text-sm text-primary">
//             Service Rating
//           </label>
//           <input
//             type="text"
//             name="rating"
//             defaultValue={rating}
//             required
//             className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
//           />
//         </div>

//         <div className="w-full mt-6">
//           <label className="block mb-2 text-sm">
//             Your Thoughts About Our Service
//           </label>
//           <textarea
//             name="massage"
//             className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
//             defaultValue={massage}
//             required
//           ></textarea>
//         </div>

//         <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide  capitalize transition-colors duration-300 transform bg-secondary text-neutral focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 hover:bg-info">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditReview;
