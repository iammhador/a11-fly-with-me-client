import React, { useContext } from "react";
import { Link } from "react-router-dom";
import eye from "../../Assets/icons8-eye-48.png";
import atSign from "../../Assets/icons8-email-sign-64.png";
import loginImg from "../../Assets/undraw_authentication_re_svpt.svg";
import { AuthContext } from "../../Context/Context";
import toast from "react-hot-toast";
const Login = () => {
  const { googleLogin, login } = useContext(AuthContext);

  //# Google Login :
  const handleGoogleLogin = () => {
    googleLogin();
  };

  //# Login :
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then(() => {
        toast.success("Successfully Logged");
        form.reset();
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
              Already Have An Account?
            </h1>

            <p className="mt-4  text-primary">Please Login</p>
          </div>

          <form
            onSubmit={handleLogin}
            className="mx-auto mt-8 mb-0 max-w-md space-y-4"
          >
            <div>
              <label for="email" className="sr-only">
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
              <label for="password" className="sr-only">
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
                Don't have an account?{" "}
                <Link to="/register" className="underline text-secondary">
                  Register
                </Link>
              </p>

              <button
                onClick={handleGoogleLogin}
                type="submit"
                className="ml-3 inline-block rounded-lg bg-orange-600 px-5 py-3 text-sm font-medium text-white"
              >
                Google
              </button>
              <button
                type="submit"
                className="ml-3 inline-block rounded-lg bg-info px-5 py-3 text-sm font-medium text-white"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Welcome"
            src={loginImg}
            className="absolute inset-0 h-full w-4/6 object-contain mx-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default Login;
