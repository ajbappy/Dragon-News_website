import React from "react";
import Nav from "../../nav/Nav";
import { Link } from "react-router-dom";

const LogIn = () => {
  const handelLogInForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <Nav></Nav>

      <div className=" mt-10 shadow max-w-[800px] mx-auto p-10 md:p-20">
        <h1 className="text-2xl font-bold text-black text-center mb-10">
          Login Your Account
        </h1>
        <hr />

        <form className="mt-10" onSubmit={handelLogInForm}>
          <label htmlFor="email" className="text-md font-bold ">
            Email Address
          </label>
          <br></br>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className=" w-full py-3 px-4 mt-2 mb-5  bg-slate-100 placeholder:text-sm rounded"
          />
          <label htmlFor="email" className="text-md font-bold ">
            Your Password
          </label>
          <br></br>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className=" w-full py-3 px-4 mt-2 mb-5 bg-slate-100 placeholder:text-sm rounded"
          />
          <button className="w-full bg-blue-700 text-white py-3 rounded ">
            LogIn
          </button>
        </form>

        <p className="text-center mt-5">
          Don't Have An Account ?{" "}
          <Link to="/regester" className="text-red-700 font-bold">
            Regester
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
