import React from "react";
import { FiX } from "react-icons/fi";
import Button from "./mini_components/Button";
import { FaLongArrowAltUp } from "react-icons/fa";
import { Productdata } from "../mockData/Carpenterdata";
import { IoIosStar } from "react-icons/io";
import { RxChevronDown } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Products_Catalog = () => {
  const navigate = useNavigate();
  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };
  return (
    <section className="px-5 lg:px-40 py-10 lg:py-20 flex-row lg:flex lg:gap-16">
      <div className="w-full lg:w-[30%] hidden lg:block">
        <h3 className="border-b border-[#DEDEDE] pb-5 text-xl lg:text-base">
          Shopping Options
        </h3>
        <div className="text-cFilterGrey">
          <div className="flex items-center justify-between py-3 px-2.5 border-b border-[#DEDEDE]">
            <span className="text-base leading-9 font-light">Style</span>
            <RxChevronDown />
          </div>
          <div className="flex items-center justify-between py-3 px-2.5 border-b border-[#DEDEDE]">
            <span className="text-base leading-9 font-light">Category</span>
            <RxChevronDown />
          </div>
          <div className="flex items-center justify-between py-3 px-2.5 border-b border-[#DEDEDE]">
            <span className="text-base leading-9 font-light">Style</span>
            <RxChevronDown />
          </div>
          <div className="flex items-center justify-between py-3 px-2.5 border-b border-[#DEDEDE]">
            <span className="text-base leading-9 font-light">Size</span>
            <RxChevronDown />
          </div>
          <div className="flex items-center justify-between py-3 px-2.5 border-b border-[#DEDEDE]">
            <span className="text-base leading-9 font-light">Price</span>
            <RxChevronDown />
          </div>
          <div className="flex items-center justify-between py-3 px-2.5 border-b border-[#DEDEDE]">
            <span className="text-base leading-9 font-light">Color</span>
            <RxChevronDown />
          </div>
        </div>
        <div className="my-5">
          <div className="flex items-start mb-3">
            <h5 className="font-semibold text-lg mb-2 text-cBlack">
              Compare Products
            </h5>
            <small className="text-xs text-cGrey_1">(2 items)</small>
          </div>
          <div className="flex font-light text-sm leading-5 mb-2">
            <FiX className="mr-1" />
            <small className="underline text-cBlack">Summit Watch</small>
          </div>
          <div className="flex font-light text-sm leading-5 mb-3">
            <FiX className="mr-1" />
            <small className=" underline text-cBlack">
              Cruise Dual Analog Watch
            </small>
          </div>
          <div className="flex gap-7">
            <button className="rounded-sm bg-cGreen text-white font-bold text-sm leading-5 p-2 hover:bg-cGreen/70 hover:shadow-lg transition-all duration-300 ease-in-out">
              Compare
            </button>
            <button className="text-sm leading-5 underline text-cFilterGrey">
              Clear All
            </button>
          </div>
        </div>
        <div className="gap-2 text-cBlack">
          <h6 className="font-semibold text-lg ">My Wish List</h6>
          <p className="font-light text-sm leading-5">
            You have no items in your wish list.
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-between">
          <div className="text-xs leading-[100%] text-cFilterGrey border border-[#CCCCCC] rounded-[3px] px-2 py-3 block lg:hidden">
            <p>Shop By</p>
          </div>
          <div className="hidden lg:flex items-center justify-center gap-2.5 ">
            <div className="bg-[#DEDEDE] p-1">
              <img src="/filter_icon1.svg" alt="icon" />
            </div>
            <div className="bg-[#F0F0F0] p-1">
              <img src="/filter_icon2.svg" alt="icon" />
            </div>
            <p className="text-sm leading-5 text-cGrey_1">Items 1-9 of 32</p>
          </div>
          <div className="flex gap-1.5 items-center justify-center text-cBlack text-sm leading-5">
            <p className=" text-cGrey_1">Sort By</p>
            <div className="bg-[#F0F0F0] p-2 gap-2 flex items-center justify-between text-cFilterGrey">
              <p>Position</p>
              <RxChevronDown />
            </div>
            <FaLongArrowAltUp />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 gap-5">
          {Productdata.map(
            ({
              id,
              img,
              productName,
              originalPrice,
              discountedPrice,
              reviews,
            }) => (
              <div key={id} onClick={() => handleCardClick(id)}>
                <div className="bg-[#F0F0F0] flex items-center justify-center p-3 w-full">
                  <img src={img} alt={productName} />
                </div>
                <h3 className="font-semibold">{productName}</h3>
                <div className="font-sm text-[15px] flex gap-2">
                  <span className="line-through text-[#A2A2A2]">
                    {originalPrice}
                  </span>
                  <span className="text-cBlack">{discountedPrice}</span>
                </div>
                <div className="flex gap-1">
                  <div className="flex">
                    <IoIosStar className="text-[#FF9900]" />
                    <IoIosStar className="text-[#FF9900]" />
                    <IoIosStar className="text-[#FF9900]" />
                    <IoIosStar className="text-[#C4C4C4]" />
                    <IoIosStar className="text-[#C4C4C4]" />
                  </div>
                  <span className="text-xs underline text-cGrey_1">
                    {reviews}
                  </span>
                </div>
              </div>
            )
          )}
        </div>
        <div className="text-cGrey_1 text-xs flex items-end justify-end gap-1.5 mt-5">
          <span className="">Show</span>
          <div className="text-sm leading-5 gap-2 p-0.5 bg-cGrey_1 text-cFilterGrey flex items-center justify-center">
            <p>9</p>
            <RxChevronDown />
          </div>
          <span>per page</span>
        </div>
      </div>
    </section>
  );
};

export default Products_Catalog;
