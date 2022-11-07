import React from "react";
import { Link } from "react-router-dom";
import user from "../../Assets/icons8-account-48.png";
import phone from "../../Assets/icons8-ringer-volume-64.png";
import eye from "../../Assets/icons8-eye-48.png";
import atSign from "../../Assets/icons8-email-sign-64.png";
import registerImg from "../../Assets/undraw_secure_login_pdn4.svg";
const Register = () => {
  return (
    <div>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl text-primary">
              Don't Have An Account?
            </h1>

            <p className="mt-4  text-primary">Please Register</p>
          </div>

          <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
            <div>
              <label for="username" className="sr-only">
                Username
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter Username"
                />

                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <img
                    src={user}
                    alt="User"
                    className="h-5 w-5 text-gray-400"
                  />
                </span>
              </div>
            </div>

            <div>
              <label for="phone" className="sr-only">
                Phone Number
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter Contact Number"
                />

                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <img
                    src={phone}
                    alt="Phone"
                    className="h-5 w-5 text-gray-400"
                  />
                </span>
              </div>
            </div>
            <div>
              <label for="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />

                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <img
                    src={atSign}
                    alt="User"
                    className="h-5 w-5 text-gray-400"
                  />
                </span>
              </div>
            </div>

            <div>
              <label for="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />

                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <img src={eye} alt="User" className="h-5 w-5 text-gray-400" />
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Have an account?{" "}
                <Link to="/login" className="underline text-secondary">
                  Login
                </Link>
              </p>

              <button
                type="submit"
                className="ml-3 inline-block rounded-lg bg-orange-600 px-5 py-3 text-sm font-medium text-white"
              >
                Google
              </button>
              <button
                type="submit"
                className="ml-3 inline-block rounded-lg bg-info px-5 py-3 text-sm font-medium text-white"
              >
                Register
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Welcome"
            src={registerImg}
            className="absolute inset-0 h-full w-4/5 object-contain "
          />
        </div>
      </section>
    </div>
  );
};

export default Register;
