import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="w-[80%]  mx-auto  py-4 flex items-center justify-between">
        <div className="cursor-pointer text-3xl font-bold">BrainRush</div>
        <div className="flex space-x-4">
          <a href="/about" className="text-gray-500 font-medium border-b-[1px] border-b-white hover:text-blue-600 hover:border-b-[1px] hover:border-blue-600">
            About
          </a>
          <a href="/plans" className=" text-gray-500 font-medium border-b-[1px] border-b-white hover:text-blue-600 hover:border-b-[1px] hover:border-blue-600">
            Plans
          </a>
          <a href="/contacts" className="text-gray-500 font-medium border-b-[1px] border-b-white hover:text-blue-600 hover:border-b-[1px] hover:border-blue-600">
            Contacts
          </a>
        </div>
        <div className="flex justify-center items-center space-x-2">
          <button className="px-4 py-2 font-bold bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-100">
            Log in
          </button>
          <button className="px-4 py-2 font-bold bg-zinc-500 text-white rounded-md hover:bg-gray-700">
            Sign up
          </button>
          <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-world"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
