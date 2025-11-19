import React from "react";
import { GoChevronDown } from "react-icons/go";
import Button from "./mini_components/Button";
import { MdModeEdit } from "react-icons/md";

const Payment_Method = () => {
  return (
    <section className="text-cBlack px-5 lg:px-40 lg:gap-40 mb-10">
      <h4 className="text-cBlack text-lg font-semibold">Payment Method:</h4>
      <div className="lg:flex items-start justify-between gap-10 w-full mt-7">
        <div className="text-cFilterGrey lg:w-[60%]">
          <p className="text-sm">Check / Money order</p>
          <div className="flex gap-2 pl-5 px-5 lg:px-0 py-2 border-b border-[#BDBDBD]">
            <input
              type="radio"
              name="shippingOption"
              value="fixed"
              className="appearance-none w-5 h-5 p-2 bg-white border-2 border-gray-300 rounded-full checked:bg-cGreen checked:border-cGreen relative checked:after:content-[''] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:w-2 checked:after:h-2 checked:after:bg-white checked:after:rounded-full checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 transition-all focus:ring-2 focus:ring-cGreen focus:ring-opacity-50"
            />
            <div>
              <p className="text-sm font-medium">
                My billing and shipping address are the same
              </p>
              <p className="text-sm lg:w-[30%]">
                Veronica Costello 6146 Honey Bluff Parkway Calder, Michigan,
                49628-7978 United States T: (555) 229-3326
              </p>
              <button className="bg-[#F0F0F0] p-2 text-bold text-cBlack text-sm mt-3">
                Edit
              </button>
            </div>
          </div>
          <div>
            <div className="mt-5 flex gap-2 text-sm items-center">
              <p>Apply Discount Code</p>
              <GoChevronDown />
            </div>
            <div className="font-bold text-sm lg:flex items-center justify-between">
              <div className="flex">
                <input
                  type="text"
                  className="py-1 px-2 border border-cGrey_2"
                  placeholder="SALE2020"
                />
                <button className="bg-cBlack py-1 px-2 text-white">
                  Apply Discount
                </button>
              </div>
              <Button
                btnText={`Place Order`}
                className={`max-w-max py-2 px-3 my-7`}
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[40%]">
          <div className=" bg-[#F5F5F5] p-2">
            <span className="font-medium text-lg text-cBlack">
              Order Summary
            </span>
            <div className="text-cFilterGrey border-y border-[#BDBDBD] py-2 mt-4">
              <div className="flex items-center justify-between">
                <small>Cart Subtotal</small>
                <small>$19.00</small>
              </div>
              <div className="flex items-center justify-between">
                <small>Shipping Flat Rate - Fixed</small>
                <small>$5.00</small>
              </div>
            </div>
            <div className="flex items-center justify-between font-medium text-lg mb-3">
              <p>Order Total</p>
              <p>$24.000</p>
            </div>
            <div className="flex items-center justify-between border-b border-[#BDBDBD]">
              <small>1 Item in Cart</small>
              <GoChevronDown />
            </div>
            <div className="flex items-center p-3 mt-2">
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
          <div className="my-8">
            <div className="flex items-center justify-between border-b border-[#BDBDBD] font-medium text-lg">
              <p className="my-2">Ship To:</p>
              <MdModeEdit />
            </div>
            <span className="my-2 text-sm text-cFilterGrey">
              Veronica Costello 6146 Honey Bluff Parkway Calder, Michigan,
              49628-7978 United States T: (555) 229-3326
            </span>
            <div className="flex items-center justify-between border-b border-[#BDBDBD] font-medium text-lg">
              <p className="my-2">Shipping Method:</p>
              <MdModeEdit />
            </div>
            <small className="text-cFilterGrey text-sm">
              Flat Rate - Fixed
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment_Method;
