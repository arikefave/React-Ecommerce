import React from "react";
import { IoHeart } from "react-icons/io5";
import { MdEmail, MdOutlineChevronRight } from "react-icons/md";
import { Productdata, swiperData } from "../mockData/Carpenterdata";
import { VscGraph } from "react-icons/vsc";
import { IoIosStar } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";
import Button from "./mini_components/Button";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const Purchase_Info_01 = () => {
  const productName = swiperData[0].heading;
  const productData = Productdata[0];
  return (
    <section className="px-5 lg:px-40 min-h-screen mt-8">
      <div className="flex text-xs text-cGrey_1 leading-[100%]">
        <p>Home</p>
        <MdOutlineChevronRight />
        <p>New Luma Yoga Collection</p>
      </div>
      {/* productInfo */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full mt-10">
        <div className="flex justify-between items-center w-full lg:w-[60%] bg-[#F0F0F0] p-5 lg:p-20 h-[50vh] lg:h-[500px] gap-5 lg:gap-20">
          <FaCircleArrowLeft className="text-black w-[45px] h-[45px]" />
          <img src="/image 20.svg" alt="product" />
          <FaCircleArrowRight className="text-black w-[45px] h-[45px]" />
        </div>
        <div className="w-full lg:w-[40%] lg:pl-5">
          <div key={productData.id}>
            <h1 className="font-light text-[40px] leading-[120%] text-cBlack">
              {productName}
            </h1>
            {/* Reviews */}
            <div className="flex items-center justify-between lg:justify-normal text-xs text-cGrey_1 leading-[100%] lg:gap-2 my-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  <IoIosStar className="text-[#FF9900]" />
                  <IoIosStar className="text-[#FF9900]" />
                  <IoIosStar className="text-[#FF9900]" />
                  <IoIosStar className="text-[#C4C4C4]" />
                  <IoIosStar className="text-[#C4C4C4]" />
                </div>
                <small>{productData.reviews}</small>
              </div>
              <small className="underline text-left">Add Your Review</small>
            </div>
            {/* sku and price */}
            <div className="flex justify-between items-center border-b border-cGrey_3 pb-5 text-cBlack">
              <div>
                <p className="text-cGrey_1">As low as</p>
                <h3 className="font-medium text-4xl leading-[100%]">
                  {productData.originalPrice}
                </h3>
              </div>
              <div>
                <div className="flex items-end justify-end">
                  <RxDotFilled className="text-[#83D367]" />
                  <h5 className="font-bold text-sm leading-[100%]">IN STOCK</h5>
                </div>
                <p className="text-sm">SKU#: 24-MB05</p>
              </div>
            </div>
            {/* quantity */}
            <div className="flex items-center gap-7 text-cBlack text-sm mt-4">
              <p>Quantity</p>
              <div className="border border-cGrey_2 gap-2.5 px-5 py-2 flex justify-between items-center w-[111px] h-[38px]">
                <small>-</small>
                <small>1</small>
                <small>+</small>
              </div>
            </div>
            <Button
              btnText={`Add to Cart`}
              className="my-7 max-w-max py-2 px-3 font-bold"
            />
            <div className="lg:flex w-full lg:justify-between lg:items-center text-cGrey_1 font-medium text-[13px] leading-[38px]">
              <div className="flex items-center lg:justify-center">
                <IoHeart />
                <h6> ADD TO WISH LIST</h6>
              </div>
              <div className="flex items-center lg:justify-center">
                <VscGraph />
                <h6> ADD TO COMPARE</h6>
              </div>
              <div className="flex items-center lg:justify-center">
                <MdEmail />
                <h6> EMAIL</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* related */}
      <div className="flex mt-2">
        <div className="bg-[#F0F0F0] p-2">
          <img
            src="/image 20.svg"
            alt="product"
            className="w-[88px] h-[110px]"
          />
        </div>
        <img
          src="/related_01.svg"
          alt="related"
          className="w-[88px] h-[110px]"
        />
        <img
          src="/related_02.svg"
          alt="related"
          className="w[88px] h-[110px]"
        />
      </div>
    </section>
  );
};

export default Purchase_Info_01;
