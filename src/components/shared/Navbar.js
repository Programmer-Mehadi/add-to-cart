import React from "react";
import logo from "../../images/Logo.png";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-6">
      <div className="navbar-start w-fit">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#07484A"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <div tabIndex={0}>
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="font-medium text-[20px] text-[#07484A] ">Home</a>
              </li>
              <li>
                <a className="font-normal text-[20px] text-[#07484A]">
                  Products
                </a>
              </li>
              <li>
                <a className="font-normal text-[20px] text-[#07484A]">
                  Categories
                </a>
              </li>
              <li>
                <a className="font-normal text-[20px] text-[#07484A]">About</a>
              </li>
              <li>
                <a className="font-normal text-[20px] text-[#07484A]">
                  Contact Us
                </a>
              </li>
              <li className="flex items-center justify-between flex-row m-4 ">
                <a className="px-0 ">
                  <i class="fa-solid fa-magnifying-glass text-[#07484A] text-[27px]"></i>
                </a>
                <a className="px-0 ">
                  <i class="fa-solid fa-cart-shopping text-[#07484A]  text-[27px]"></i>
                </a>
                <a className="px-0 bg-[#07484A] rounded-[50%] flex justify-between items-center w-[32px] h-[32px]">
                  <i class="fa-solid fa-user text-white text-[20px]"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a className="normal-case text-xl">
          <img src={logo} alt="" className="w-[144px] h-[36px]" />
        </a>
      </div>
      <div className="navbar-end hidden lg:flex gap-8 flex-1">
        <ul className="menu menu-horizontal px-1 mx-auto">
          <li>
            <a className="font-medium text-[20px] text-[#07484A] ">Home</a>
          </li>
          <li>
            <a className="font-normal text-[20px] text-[#07484A]">Products</a>
          </li>
          <li>
            <a className="font-normal text-[20px] text-[#07484A]">Categories</a>
          </li>
          <li>
            <a className="font-normal text-[20px] text-[#07484A]">About</a>
          </li>
          <li>
            <a className="font-normal text-[20px] text-[#07484A]">Contact Us</a>
          </li>
        </ul>
        <div className="flex items-center gap-6  w-fit">
          <a className="">
            <i class="fa-solid fa-magnifying-glass text-[#07484A] text-[24px]"></i>
          </a>
          <a className="">
            <i class="fa-solid fa-cart-shopping text-[#07484A]  text-[24px]"></i>
          </a>
          <a className="bg-[#07484A] rounded-[50%] flex justify-center items-center w-[28px] h-[28px]">
            <i class="fa-solid fa-user text-white text-[18px]"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
