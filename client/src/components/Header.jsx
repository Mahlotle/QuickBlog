import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-15 mb-10">
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary ">
          <p> New: AI feature integrated</p>
          <img src={assets.star_icon} alt="" className="w-2.5" />
        </div>

        <h1 className=" text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700 ">
          Your own <span className="text-primary">blogging</span>
          <br />
          platform
        </h1>

        <p className="mt-4 text-gray-600 text-sm sm:text-base">
          Create, share, and connect with your audience like never before.
        </p>

        <form className="flex items-center w-full max-w-3xl mx-auto bg-white rounded-full shadow-md overflow-hidden mt-8">
          <input
            type="text"
            placeholder="Search for blogs..."
            required
            className="flex-1 px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none "
          />

          <button
            type="submit"
            className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
          >
            Search
          </button>
        </form>
      </div>
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-1 opacity-50"
      />
    </div>
  );
};

export default Header;
