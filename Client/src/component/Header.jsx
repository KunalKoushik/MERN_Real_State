import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-slate-200 shadow-md">
      <div className=" flex justify-between items-center max-w-6xl mx-auto p-2">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
          <span className="text-slate-500">Real</span>
          <span className="text-slate-700">Estate</span>
        </h1>
        <form className="bg-slate-100 p-2 flex items-center  rounded-lg">
          <input
            type="text"
            placeholder="search.."
            className=" focus:outline-none w-24 sm:w-64 bg-transparent"
          />
          <FaSearch className="text-slate-600" />
        </form>

        <ul className="flex gap-4">
            <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
            <li  className="hidden sm:inline text-slate-700 hover:underline" >About</li>
            <li  className="hidden sm:inline text-slate-700 hover:underline" >Sign in</li>
            {/* <li >Sign up</li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
