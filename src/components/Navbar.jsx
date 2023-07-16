import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Brand</h1>
          <ul className="hidden md:flex">
            <li className="p-4 sm:p-3">Home</li>
            <li className="p-4 sm:p-3">About</li>
            <li className="p-4 sm:p-3">Support</li>
            <li className="p-4 sm:p-3">Platform</li>
            <li className="p-4 sm:p-3">Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="mr-4 px-8 py-3 rounded-md hover:bg-indigo-600 hover:text-white">
            Sign In
          </button>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 duration-150">
            Sign Up
          </button>
        </div>
        <div className="md:hidden" onClick={handleNav}>
          {!nav ? (
            <IoMdMenu className="text-3xl"></IoMdMenu>
          ) : (
            <RxCross2 className="text-3xl"></RxCross2>
          )}
        </div>
      </div>
      <ul
        className={
          !nav
            ? "fixed left-[-100%] ease-out-in duration-500"
            : "absolute bg-zinc-200 w-full px-8 left-0 ease-in-out duration-500"
        }
      >
        <li className="p-4 sm:p-3 border-b-2 border-zinc-300 w-full">Home</li>
        <li className="p-4 sm:p-3 border-b-2 border-zinc-300 w-full">About</li>
        <li className="p-4 sm:p-3 border-b-2 border-zinc-300 w-full">
          Support
        </li>
        <li className="p-4 sm:p-3 border-b-2 border-zinc-300 w-full">
          Platform
        </li>
        <li className="p-4 sm:p-3 border-b-2 border-zinc-300 w-full">
          Pricing
        </li>
        <div className="flex flex-col">
          <button className="px-8 py-3 my-3 border border-indigo-600 rounded-md hover:bg-indigo-600 duration-150 hover:text-white">
            Sign In
          </button>
          <button className="px-8 py-3 mb-3 bg-indigo-600 text-white rounded-md">
            Sign Up
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
