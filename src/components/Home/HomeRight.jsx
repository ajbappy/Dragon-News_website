import React from "react";
import {
  FaGoogle,
  FaSquareGithub,
  FaFacebook,
  FaSquareTwitter,
  FaInstagram,
} from "react-icons/fa6";

import zoon1 from "../../assets/qZone1.png";
import zoon2 from "../../assets/qZone2.png";
import zoon3 from "../../assets/qZone3.png";
import { useContext } from "react";
import { AuthContex } from "./Provaider/AuthProvaider";

const HomeRight = () => {
  const { user, logInWithGoogle, logInWithGithub } = useContext(AuthContex);

  const handelGoogle = () => {
    logInWithGoogle();
  };

  const handelGithub = () => {
    logInWithGithub();
  };

  return (
    <div className="sticky top-20">
      <div className="">
        <h1 className="text-black font-semibold text-md">Log In With</h1>
        <button
          onClick={handelGoogle}
          className="btn bg-transparent border border-blue-600 text-blue-700 capitalize my-3 w-full"
        >
          <FaGoogle></FaGoogle>
          Log In with Google
        </button>
        <button
          onClick={handelGithub}
          className="btn bg-transparent border border-black text-black capitalize w-full"
        >
          <FaSquareGithub></FaSquareGithub>
          Log In with Github
        </button>
      </div>
      <div className="mt-5 mb-6">
        <h2 className="text-gray-900 font-semibold text-md mb-2">Find us on</h2>
        <button className=" bg-transparent border w-full flex items-center gap-2 py-3 px-5">
          <FaFacebook></FaFacebook>
          <span className=" text-[#706F6F] capitalize">Facebook</span>
        </button>
        <button className=" bg-transparent border w-full flex items-center gap-2 py-3 px-5">
          <FaSquareTwitter></FaSquareTwitter>
          <span className=" text-[#706F6F] capitalize">Twitter</span>
        </button>
        <button className=" bg-transparent border w-full flex items-center gap-2 py-3 px-5">
          <FaInstagram></FaInstagram>
          <span className=" text-[#706F6F] capitalize">Instagram</span>
        </button>
      </div>
      <div className="px-4 py-5 bg-gray-200">
        <h2 className="text-md font-semibold text-black">Q-Zone</h2>
        <img src={zoon1} alt="" />
        <img src={zoon2} alt="" />
        <img src={zoon3} alt="" />
      </div>
      {/* <CreateAmezingNewspapaer> */}
    </div>
  );
};

// const CreateAmezingNewspapaer = () => {
//   return (
//     <div>
//       <h1>sjudfhsdaiufui</h1>
//     </div>
//   );
// };

export default HomeRight;
