import React, { useContext } from "react";
import Nav from "../../nav/Nav";
import { Link } from "react-router-dom";
import { AuthContex } from "../../Provaider/AuthProvaider";

const Regester = () => {
  const { creatUser } = useContext(AuthContex);

  const handelRegForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);

    const name = formData.get("text");
    const pass = formData.get("password");
    const photo = formData.get("photo");
    const email = formData.get("email");

    console.log(email, name, pass, photo);

    // create user

    creatUser(email, pass)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="max-w-[1200px] mx-auto">
      <Nav></Nav>

      <div className=" mt-10 shadow max-w-[800px] mx-auto p-10 md:p-20">
        <h1 className="text-2xl font-bold text-black text-center mb-10">
          Register your account
        </h1>
        <hr />

        <form className="mt-10" onSubmit={handelRegForm}>
          <label htmlFor="text" className="text-md font-bold ">
            Your Name
          </label>
          <br></br>
          <input
            type="text"
            name="text"
            placeholder="Enter your name"
            className=" w-full py-3 px-4 mt-2 mb-5  bg-slate-100 placeholder:text-sm rounded"
          />

          <label htmlFor="text" className="text-md font-bold ">
            Photo Url
          </label>
          <br></br>
          <input
            type="text"
            name="photo"
            placeholder="Enter your photo url"
            className=" w-full py-3 px-4 mt-2 mb-5  bg-slate-100 placeholder:text-sm rounded"
          />

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
          <div className="mb-5">
            <input type="checkbox" name="terms" id="terms" required />
            <label className="ml-2" htmlFor="terms">
              Accept Term & Conditions
            </label>
          </div>
          <button className="w-full bg-blue-700 text-white py-3 rounded ">
            Regester
          </button>
        </form>

        <p className="text-center mt-5">
          Already Have An Account ?{" "}
          <Link to="/login" className="text-red-700 font-bold">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Regester;
