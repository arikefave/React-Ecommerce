import React from "react";
import Button from "./mini_components/Button";
import { RxChevronDown, RxChevronUp } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Shipping_Details = () => {
  const navigate = useNavigate();
  // Next button to go to payment
  const handleNext = (e) => {
    e.preventDefault();
    navigate("/payment");
  };
  return (
    <section className="text-cBlack px-5 lg:px-40 lg:py-14 lg:flex items-start lg:gap-40">
      <form className="text-[#3F3F3F] lg:w-[60%]">
        {/* Shipping Address */}
        <div>
          <h4 className="text-cBlack text-lg flex justify-center lg:justify-normal font-semibold">
            Shipping Address
          </h4>
          <div className="lg:flex items-center gap-7 mt-5 w-full">
            <label className="lg:w-[200px]">First name *</label>
            <input
              type="text"
              placeholder="Enter Your First Name"
              className="mt-3 lg:mt-0 w-full text-cGreen placeholder:text-cGrey_1 placeholder:text-sm border border-cGrey_2 px-2 py-1"
            />
          </div>
          <div className="lg:flex items-center lg:gap-7 mt-5 lg:mt-2 w-full">
            <label className="lg:w-[200px]">Password *</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="mt-3 lg:mt-0 w-full text-cGreen placeholder:text-cGrey_1 placeholder:text-sm border border-cGrey_2 px-2 py-1"
            />
          </div>
          <div className="lg:flex items-center lg:gap-7 mt-5 lg:mt-2 w-full">
            <label className="lg:w-[200px]">Zip/Postal Code</label>
            <input
              type="number"
              placeholder="000000"
              className="mt-3 lg:mt-0 w-full text-cGreen placeholder:text-cGrey_1 placeholder:text-sm border border-cGrey_2 px-2 py-1"
            />
          </div>
          <p className="text-cGrey_1 text-sm my-4">
            You already have an account with us. Sign in or continue as guest.
          </p>
          <div className="flex items-center gap-10 py-5 border-b border-cGrey_3 pb-12">
            <Button btnText={`Login`} className={`max-w-max py-1.5 px-8`} />
            <button className="font-medium text-sm text-cGrey_1">
              Forgot Your Password?
            </button>
          </div>
        </div>
        {/* Empty inputs */}
        <div>
          <div className="flex items-center gap-7 mt-5 w-full">
            <label className="w-[200px]">First name *</label>
            <input
              type="text"
              className="w-full text-cGreen border border-cGrey_2 px-2 py-1"
            />
          </div>
          <div className="flex items-center gap-7 mt-5 w-full">
            <label className="w-[200px]">Last Name *</label>
            <input
              type="text"
              className="w-full text-cGreen border border-cGrey_2 px-2 py-1"
            />
          </div>
          <div className="flex items-center gap-7 mt-5 w-full">
            <label className="w-[200px]">Company</label>
            <input
              type="text"
              className="w-full text-cGreen border border-cGrey_2 px-2 py-1"
            />
          </div>
          <div className="flex items-center gap-7 mt-5 w-full">
            <label className="w-[200px]">Country *</label>
            <input
              type="text"
              className="w-full text-cGreen border border-cGrey_2 px-2 py-1"
            />
          </div>
          <div className="flex gap-7 mt-5 w-full">
            <label className="w-[200px]">Street Address *</label>
            <input
              type="text"
              className="w-full text-cGreen border border-cGrey_2 px-2 py-1 min-h-20"
            />
          </div>
          <div className="flex items-center gap-7 mt-5 w-full">
            <label className="w-[200px]">State/Province *</label>
            <input
              type="text"
              placeholder="Please select a region, state or province"
              className="w-full text-cGreen placeholder:text-cGrey_1 placeholder:text-sm border border-cGrey_2 px-2 py-1"
            />
            <RxChevronDown />
          </div>
        </div>
        {/* Shipping Methods */}
        <div>
          <h4 className="text-cBlack text-lg font-semibold py-10 border-b border-cGrey_3">
            Shipping Methods
          </h4>
          <div>
            <div className="flex items-center justify-between text-sm w-[70%] py-1.5 border-b border-cGrey_3">
              <label className="flex mt-2 gap-4 items-center cursor-pointer">
                <input
                  type="radio"
                  name="shippingOption"
                  value="fixed"
                  className="appearance-none w-5 h-5 bg-white border-2 border-gray-300 rounded-full checked:bg-cGreen checked:border-cGreen relative checked:after:content-[''] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:w-2 checked:after:h-2 checked:after:bg-white checked:after:rounded-full checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 transition-all focus:ring-2 focus:ring-cGreen focus:ring-opacity-50"
                />
                <span className="text-cBlack">$5.00</span>
              </label>
              <span className="text-cBlack">Fixed</span>
              <span className="text-cBlack">Flat Rate</span>
            </div>
            <div className="flex items-center justify-between text-sm w-[70%] py-1.5">
              <label className="flex mt-2 gap-4 items-center cursor-pointer">
                <input
                  type="radio"
                  name="shippingOption"
                  value="table"
                  className="appearance-none w-5 h-5 bg-white border-2 border-gray-300 rounded-full checked:bg-cGreen checked:border-cGreen relative checked:after:content-[''] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:w-2 checked:after:h-2 checked:after:bg-white checked:after:rounded-full checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 transition-all focus:ring-2 focus:ring-cGreen focus:ring-opacity-50"
                />
                <span className="text-cGrey_1">$10.00</span>
              </label>
              <span className="text-cGrey_1">Table Rate</span>
              <span className="text-cGrey_1">Best Way</span>
            </div>
          </div>
          <div className="flex items-center justify-between my-8 font-medium text-sm text-cGrey_1">
            <button>Back</button>
            <Button btnText={`Next`} className={`max-w-max py-1.5 px-8`} />
          </div>
        </div>
      </form>
      <div className="lg:w-[40%] bg-[#F5F5F5] p-3 my-10 lg:my-0">
        <h4 className="font-semibold text-lg mb-4">Order Summary</h4>
        <div className="flex items-center gap-2">
          <small>2 Item in Cart</small>
          <RxChevronUp />
        </div>
        <div className="text-cGrey_1 mt-3">
          <div className="flex items-center p-3">
            <div className="flex items-center justify-center w-[85px] h-[85px]">
              <img src="/Greychair.png" alt="product" />
            </div>
            <div className="flex">
              <div>
                <p className="text-sm underline">Go-Get’r Pushup Grips</p>
                <p className="text-sm">Qty: 1</p>
                <p className="text-sm underline">View Details</p>
              </div>
              <p className="text-sm">$19.00</p>
            </div>
          </div>
          <div className="flex items-center p-3">
            <div className="flex items-center justify-center w-[85px] h-[85px]">
              <img src="/Greychair.png" alt="product" />
            </div>
            <div className="flex">
              <div>
                <p className="text-sm underline">Go-Get’r Pushup Grips</p>
                <p className="text-sm">Qty: 1</p>
                <p className="text-sm underline">View Details</p>
              </div>
              <p className="text-sm">$19.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shipping_Details;
