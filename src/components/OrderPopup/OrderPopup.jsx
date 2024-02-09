import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[1100px] h-[800px]">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-black/70">
                  Sign Up
                </h2>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer absolute top-4 right-4"
                  onClick={() => setOrderPopup(false)}
                />
              </div>
            </div>
            {/* Body */}
            <form className="register-form" id="register-form" action="">
              <div className="mt-4 form-group flex flex-col">
                <div>
                  <label htmlFor="name" className="text-lg mb-2 underline">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    placeholder="Your Name"
                    className="form-control mb-4 text-lg p-2 border-b-3 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-lg mb-2 underline">
                    <i className="zmdi zmdi-email"></i>

                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="form-control mb-4 text-lg p-2 border-b focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-lg mb-2 underline">
                    <i className="zmdi zmdi-phone"></i>
                  </label>
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    className="form-control mb-4 text-lg p-2 border-b focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="profession" className="text-lg mb-2 underline">
                    <i className="zmdi zmdi-collection"></i>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Profession"
                    className="form-control mb-4 text-lg p-2 border-b focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="text-lg mb-2 underline">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control mb-4 text-lg p-2 border-b focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="cpassword" className="text-lg mb-2 underline">
                    <i className="zmdi zmdi-lock-outline"></i>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Your Password"
                    className="form-control mb-4 text-lg p-2 border-b focus:outline-none focus:border-blue-500"
                  />
                </div>
                {/* Sign Up button */}
                <div className="mt-4">
                  <Button variant="contained">Sign Up</Button>
                </div>
              </div>
              {/* Add more form fields as needed */}
            </form>
          </div>
          <div className="signup-image">
            <figure>
              <img src="" alt="registration pic" />
            </figure>
            <NavLink to="/login" className="signup-image-link text-lg">

            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
