import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import user from "../../Assets/icons8-account-48.png";
import phone from "../../Assets/icons8-ringer-volume-64.png";
import eye from "../../Assets/icons8-eye-48.png";
import atSign from "../../Assets/icons8-email-sign-64.png";
import registerImg from "../../Assets/undraw_secure_login_pdn4.svg";
import { AuthContext } from "../../Context/Context";
import toast from "react-hot-toast";
import useTitle from "../../Hooks/useTitle";

const Register = () => {
  const { googleLogin, register } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useTitle("Register");
  //# Google Register :
  const handleGoogleReg = () => {
    googleLogin().then(() => navigate(from, { replace: true }));
  };

  //# Register :
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const password = form.password.value;

    register(email, password)
      .then(() => {
        form.reset();
        toast.success("Successfully Register");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error);
      });
  };
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

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 mb-0 max-w-md space-y-4"
          >
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>

              <div className="relative">
                <input
                  type="text"
                  name="username"
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
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>

              <div className="relative">
                <input
                  type="text"
                  name="phone"
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
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  required
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
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  required
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
                onClick={handleGoogleReg}
                type="submit"
                className="ml-3 inline-block rounded-lg bg-orange-400 px-5 py-3 text-sm font-medium text-white hover:bg-orange-600"
              >
                Google
              </button>

              <button
                type="submit"
                className="ml-3 inline-block rounded-lg bg-info px-5 py-3 text-sm font-medium text-white hover:bg-secondary"
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
