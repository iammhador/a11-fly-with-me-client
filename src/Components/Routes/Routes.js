import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Shared/Login/Login";
import Register from "../Shared/Register/Register";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import AddServices from "../Pages/AddServices/AddServices";
import MyReview from "../Pages/MyReview/MyReview";
import EditReview from "../Pages/EditReview/EditReview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch("https://fly-with-me.vercel.app/services"),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(`https://fly-with-me.vercel.app/services/${params.id}`),
      },
      { path: "/blog", element: <Blog /> },
      { path: "/addservices", element: <AddServices /> },
      { path: "/review", element: <MyReview /> },
      {
        path: "/review/:id",
        element: <EditReview />,
        loader: ({ params }) =>
          fetch(`https://fly-with-me.vercel.app/allreviews/${params.id}`),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);
