import React from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Button from "./mini_components/Button";

const ShoppingCart_Info = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full px-5 lg:px-32 mb-10 pt-10 gap-10">
      {/* LG: left side */}
      <div className="hidden lg:block lg:w-[70%]">
        {/* paragraph headings */}
        <div className="flex items-center justify-between font-medium text-sm text-cGrey_1 border-b border-cGrey_3 py-4">
          <p>Item</p>
          <div className="flex items-center justify-between gap-10">
            <p>Price</p>
            <p>Qty</p>
            <p>Subtotal</p>
          </div>
        </div>
        {/* products in my cart */}
        <div className="pt-10 pb-7">
          {/* product01 */}
          <div className="flex items-start justify-start ">
            {/* item */}
            <div className="flex items-start justify-start">
              {/* img */}
              <div>
                <div className="flex items-center justify-center p-3 w-[170px] h-[170px]">
                  <img src="/Greychair.png" alt="product" />
                </div>
                <button className="underline text-sm text-cGrey_1 p-3">
                  Move to Wishlist
                </button>
              </div>
              {/* product info */}
              <div>
                <h4 className="text-cBlack text-lg underline">
                  Simple Wood Chair Collection
                </h4>
                <div className="flex text-sm text-cGrey_1 mt-3">
                  <span>Size: </span>
                  <span>29</span>
                </div>
                <div className="flex text-sm text-cGrey_1 mt-1">
                  <span>Color: </span>
                  <span>Green</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-10 font-medium text-lg ml-5">
              <p>$45.00</p>
              <p className="border border-cGrey_3 px-4 py-2.5 text-sm">1</p>
              <p>$45.00</p>
            </div>
          </div>
          {/* product02 */}
          <div className="flex items-start justify-start mt-5">
            {/* item */}
            <div className="flex items-start justify-start">
              {/* img */}
              <div>
                <div className="flex items-center justify-center p-3 w-[170px] h-[170px]">
                  <img src="/Greychair.png" alt="product" />
                </div>
                <button className="underline text-sm text-cGrey_1 p-3">
                  Move to Wishlist
                </button>
              </div>
              {/* product info */}
              <div>
                <h4 className="text-cBlack text-lg underline">
                  Simple Wood Chair Collection
                </h4>
                <div className="flex text-sm text-cGrey_1 mt-3">
                  <span>Size: </span>
                  <span>29</span>
                </div>
                <div className="flex text-sm text-cGrey_1 mt-1">
                  <span>Color: </span>
                  <span>Green</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-10 font-medium text-lg ml-5">
              <p>$45.00</p>
              <p className="border border-cGrey_3 px-4 py-2.5 text-sm">1</p>
              <p>$45.00</p>
            </div>
          </div>
        </div>
        {/* edits */}
        <div className="text-cGrey_1 flex items-end justify-end text-2xl gap-2 border-b border-cGrey_3 pb-3">
          <MdModeEdit />
          <MdDelete />
        </div>
        {/* discount and update */}
        <div>
          <div className="mt-5 flex gap-2 items-center">
            <p>Apply Discount Code</p>
            <GoChevronDown />
          </div>
          <div className="font-bold text-sm flex items-center justify-between">
            <div className="flex">
              <input
                type="text"
                className="py-2 px-3 border border-cGrey_2"
                placeholder="SALE2020"
              />
              <button className="bg-cBlack py-2 px-3 text-white">
                Apply Discount
              </button>
            </div>
            <button className="bg-[#F0F0F0] py-2 px-3">
              Update Shopping Cart
            </button>
          </div>
        </div>
      </div>
      {/* SM: left side */}
      <div className="block w-full lg:hidden">
        {/* product01 */}
        <div className="px-2 min-w-max">
          <div className="flex items-start justify-start w-full">
            <div className="flex items-center justify-center p-3 w-[100px] h-[100px]">
              <img src="/Greychair.png" alt="product" />
            </div>
            <div className="w-full">
              <h4 className="text-cBlack underline">
                Simple Wood Chair Collection
              </h4>
              <div className="flex items-start justify-between mt-4">
                <div>
                  <p className="text-cGrey_1 text-sm font-medium">Price</p>
                  <p className="text-cFilterGrey font-medium mt-2">$59.00</p>
                </div>
                <div>
                  <p className="text-cGrey_1 text-sm font-medium">Qty</p>
                  <p className="border border-cGrey_3 px-4 py-1.5 text-cFilterGrey font-medium mt-2">
                    1
                  </p>
                </div>
                <div>
                  <p className="text-cGrey_1 text-sm font-medium">Subtotal</p>
                  <p className="text-cFilterGrey font-medium mt-2">$92.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-cGrey_1 flex items-end justify-end text-2xl gap-2 border-b border-cGrey_3 pb-3">
            <MdModeEdit />
            <MdDelete />
          </div>
        </div>
        {/* product02 */}
        <div className="px-2 min-w-max">
          <div className="flex items-start justify-start w-full mt-7">
            <div className="flex items-center justify-center p-3 w-[100px] h-[100px]">
              <img src="/Greychair.png" alt="product" />
            </div>
            <div className="w-full">
              <h4 className="text-cBlack underline">
                Simple Wood Chair Collection
              </h4>
              <div className="flex items-start justify-between mt-4">
                <div>
                  <p className="text-cGrey_1 text-sm font-medium">Price</p>
                  <p className="text-cFilterGrey font-medium mt-2">$59.00</p>
                </div>
                <div>
                  <p className="text-cGrey_1 text-sm font-medium">Qty</p>
                  <p className="border border-cGrey_3 px-4 py-1.5 text-cFilterGrey font-medium mt-2">
                    1
                  </p>
                </div>
                <div>
                  <p className="text-cGrey_1 text-sm font-medium">Subtotal</p>
                  <p className="text-cFilterGrey font-medium mt-2">$92.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-cGrey_1 flex items-end justify-end text-2xl gap-2 border-b border-cGrey_3 pb-3">
            <MdModeEdit />
            <MdDelete />
          </div>
        </div>
      </div>
      {/* rght side */}
      <div className="w-full lg:w-[30%] px-4 py-3 bg-[#F5F5F5]">
        <h1 className="text-cBlack font-semibold text-lg text-center border-b pb-2">
          simplewood
        </h1>
        {/*  */}
        <div className="flex items-center justify-between font-medium text-cFilterGrey text-sm my-1.5">
          <p>Estimate Shipping and Tax</p>
          <GoChevronUp />
        </div>
        {/* state */}
        <div className="text-sm text-cFilterGrey w-full mt-3">
          <label>Country</label>
          <div className="relative mt-2">
            <input
              type="text"
              placeholder="daisy.watson@example.com"
              className="w-full border-[2px] border-cGreen text-cBlack py-3 px-4"
            />
            <GoChevronDown className="absolute right-4 top-[40%]" />
          </div>
        </div>
        {/* state */}
        <div className="text-sm text-cFilterGrey w-full mt-3">
          <label>State/Province</label>
          <div className="relative mt-2">
            <input
              type="text"
              placeholder="Please select a region"
              className="w-full border-[2px] border-cGreen text-cBlack py-3 px-4"
            />
            <GoChevronDown className="absolute right-4 top-[40%]" />
          </div>
        </div>
        {/* zipcode */}
        <div className="text-sm text-cFilterGrey w-full mt-3">
          <label>Zip/Postal Code</label>
          <div className="relative mt-2">
            <input
              type="text"
              className="w-full border-[2px] border-cGreen text-cBlack py-3 px-4"
            />
            <GoChevronDown className="absolute right-4 top-[40%]" />
          </div>
        </div>
        {/* radio inputs */}
        <div className="text-sm text-cFilterGrey w-full mt-3">
          <label>Flat Rate</label>
          <label className="flex mt-2 gap-4 items-center cursor-pointer">
            <input
              type="radio"
              name="shippingOption"
              value="fixed"
              className="appearance-none w-5 h-5 bg-white border-2 border-gray-300 rounded-full checked:bg-cGreen checked:border-cGreen relative checked:after:content-[''] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:w-2 checked:after:h-2 checked:after:bg-white checked:after:rounded-full checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 transition-all focus:ring-2 focus:ring-cGreen focus:ring-opacity-50"
            />
            <span className="text-cBlack">Fixed $5.00</span>
          </label>
        </div>
        <div className="text-sm text-cFilterGrey w-full mt-3 pb-3 ">
          <label>Best Way</label>
          <label className="flex mt-2 gap-4 items-center cursor-pointer">
            <input
              type="radio"
              name="shippingOption"
              value="table"
              className="appearance-none w-5 h-5 bg-white border-2 border-gray-300 rounded-full checked:bg-cGreen checked:border-cGreen relative checked:after:content-[''] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:w-2 checked:after:h-2 checked:after:bg-white checked:after:rounded-full checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 transition-all focus:ring-2 focus:ring-cGreen focus:ring-opacity-50"
            />
            <span className="text-cBlack">Table Rate $15.00</span>
          </label>
        </div>
        {/* total */}
        <div className="flex items-center justify-between text-sm text-cFilterGrey pt-2 border-t border-[#BDBDBD]">
          <span>Subtotal</span>
          <span>$45.00</span>
        </div>
        <div className="flex items-center justify-between text-sm text-cFilterGrey py-2 border-b border-[#BDBDBD]">
          <span>Tax</span>
          <span>$0.00</span>
        </div>
        <div className="flex items-center justify-between text-lg text-cFilterGrey py-2 ">
          <span>Order Total</span>
          <span>$45.00</span>
        </div>
        {/* button */}
        <Button
          btnText={`Proceed to Checkout`}
          className={`w-full my-5 py-3 font-bold text-center`}
        />
        <button className="text-cFilterGrey text-center text-sm underline">
          Check Out with Multiple Addresses
        </button>
      </div>
    </section>
  );
};

export default ShoppingCart_Info;
