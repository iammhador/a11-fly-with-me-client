import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../Assets/404 error with a landscape-pana.svg";
const ErrorPage = () => {
  return (
    <div>
      <div class="grid h-screen place-content-center bg-white">
        <img src={errorImg} alt="Error" className="w-96" />
        <p class="uppercase tracking-widest text-secondary mt-3">
          404 | Not Found
        </p>
        <Link to="/">
          <button className="py-2 px-5 bg-accent text-primary my-3 rounded uppercase">
            Go To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
