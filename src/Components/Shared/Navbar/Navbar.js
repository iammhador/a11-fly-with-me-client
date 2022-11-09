import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import logo from "../../Assets/icons8-airplane-64.png";
import { AuthContext } from "../../Context/Context";
import userAvater from "../../Assets/icons8-person-100.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  //# Logout :
  const handleLogout = () => {
    logout()
      .then(() => toast.success("User Logout"))
      .catch((error) => toast.error(error));
  };
  return (
    <div className="bg-accent">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-accent">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex
            items-center"
          >
            <img src={logo} alt="Logo" className="w-8 h-8" />
            <span className="ml-2 text-xl font-bold tracking-wide text-primary uppercase">
              Fly With Me
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/"
                aria-label="Home"
                title="Home"
                className="font-bold tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                aria-label="Services"
                title="Services"
                className="font-bold tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                aria-label="Blog"
                title="Blog"
                className="font-bold tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Blog
              </Link>
            </li>

            {user ? (
              <>
                <li>
                  <Link
                    to="/addservices"
                    aria-label="Add Service"
                    title="Add Service"
                    className="font-bold tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Add Service
                  </Link>
                </li>

                <li>
                  <Link
                    to="/review"
                    aria-label="My Review"
                    title="My Review"
                    className="font-bold tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    My Review
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    aria-label="Logout"
                    title="Logout"
                    className="font-bold tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Logout
                  </button>
                </li>
                <li className="block relative">
                  <img
                    alt="User"
                    referrerPolicy="no-referrer"
                    src={user.photoURL ? user.photoURL : userAvater}
                    className="mx-auto object-cover rounded-full h-8 w-8 bg-primary"
                  />
                  <span className="absolute w-3 border-2 left-1/2 -bottom-2 transform -translate-x-1/2 border-white h-3 bg-green-500 rounded-full"></span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    aria-label="Login"
                    title="Login"
                    className="font-bold tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    aria-label="Register"
                    title="Register"
                    className="font-bold tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img src={logo} alt="Logo" className="w-8 h-8" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Fly With Me
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4 text-left">
                      <li>
                        <Link
                          to="/"
                          aria-label="Home"
                          title="Hpme"
                          className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services"
                          aria-label="Services"
                          title="Services"
                          className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          aria-label="Blog"
                          title="Blog"
                          className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blog
                        </Link>
                      </li>
                      {user ? (
                        <>
                          <li>
                            <Link
                              to="/addservices"
                              aria-label="Add Service"
                              title="Add Service"
                              className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Add Service
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="/reviews"
                              aria-label="Reviews"
                              title="Reviews"
                              className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              My Reviews
                            </Link>
                          </li>

                          <li>
                            <button
                              onClick={handleLogout}
                              aria-label="Logout"
                              title="Logout"
                              className="font-bold tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Logout
                            </button>
                          </li>
                          <li className="block relative">
                            <img
                              alt="profile"
                              src={user.photoURL ? user.photoURL : userAvater}
                              className="mx-auto object-cover rounded-full h-8 w-8 bg-primary "
                            />
                            <span className="absolute w-3 border-2 left-1/2 -bottom-2 transform -translate-x-1/2 border-white h-3 bg-green-500 rounded-full"></span>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link
                              to="/login"
                              aria-label="Login"
                              title="Login"
                              className="font-bold tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Login
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/register"
                              aria-label="Register"
                              title="Register"
                              className="font-bold tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Register
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
