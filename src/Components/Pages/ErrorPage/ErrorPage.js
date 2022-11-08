import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div class="grid h-screen place-content-center bg-white">
        <p class="uppercase tracking-widest text-secondary">404 | Not Found</p>
        <Link to="/">
          <button className="py-2 px-5 bg-accent text-primary my-3 rounded">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
