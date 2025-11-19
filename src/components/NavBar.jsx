import React from "react";
import { BsFilterLeft } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";
import { PiUserCircleLight } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  return (
    <nav
      className="text-cBlack lg:text-white py-7 px-5 lg:px-40 lg:bg-cBlack"
      // style={{ backgroundImage: "url('/hero_bg.svg')" }}
    >
      <div className="flex items-center justify-between ">
        <BsFilterLeft className="lg:hidden w-4 h-4" />
        <div className="hidden lg:flex items-center justify-center">
          <input
            type="text"
            placeholder="Search"
            className="flex items-center justify-between rounded-full p-3  "
          />
          <CiSearch className=" text-green left-10 hidden" />
        </div>
        <div className="flex items-center justify-center">
          <img src="/brand_icon.svg" alt="icon" className="hidden lg:block" />
          <img src="/brand_icon02.svg" alt="icon" className="lg:hidden" />
          <span className="text-4xl">SimpleWood.</span>
        </div>
        <div className="flex items-center justify-center text-sm font-light gap-x-2.5">
          <div className="hidden lg:flex items-center justify-center gap-2.5">
            <span>English</span>
            <GoChevronDown />
          </div>
          <div className="hidden lg:flex items-center justify-center gap-2.5">
            <span>USD</span>
            <GoChevronDown />
          </div>
          <CiSearch className="text-cGrey_1 w-4 h-4 lg:hidden" />
          <IoHeartOutline className="hidden lg:block" />
          <PiUserCircleLight className="hidden lg:block" />
          <img src="/u_icon.svg" alt="usericon" className="hidden lg:block" />
          <img
            src="/u_icon02.svg"
            alt="usericon"
            className=" block lg:hidden"
          />
        </div>
      </div>
      <div>
        <ul className="hidden lg:flex justify-center items-center gap-5 mt-10">
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? "text-cGreen underline"
                : "text-white hover:text-cGreen transition-colors"
            }
          >
            Home
          </Link>
          <Link
            to="/catalog"
            className={
              location.pathname === "/catalog"
                ? "text-cGreen underline"
                : "text-white hover:text-cGreen transition-colors"
            }
          >
            Products
          </Link>
          <Link
            to="/dashboard"
            className={
              location.pathname === "/dashboard"
                ? "text-cGreen underline"
                : "text-white hover:text-cGreen transition-colors"
            }
          >
            Elements
          </Link>
          <Link
            to="/productInnerPage "
            className={
              location.pathname === "/productInnerPage"
                ? "text-cGreen underline"
                : "text-white hover:text-cGreen transition-colors"
            }
          >
            Pages
          </Link>
          <Link
            to="/mycart"
            className={
              location.pathname === "/mycart"
                ? "text-cGreen underline"
                : "text-white hover:text-cGreen transition-colors"
            }
          >
            Shop
          </Link>
          <Link
            to="/shippingdetails"
            className={
              location.pathname === "/shippingdetails"
                ? "text-cGreen underline"
                : "text-white hover:text-cGreen transition-colors"
            }
          >
            Sale
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
