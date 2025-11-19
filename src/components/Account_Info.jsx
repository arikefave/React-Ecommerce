import React from "react";

const Account_Info = () => {
  return (
    <section className="text-cGrey_1 flex-row lg:flex lg:gap-16 px-5 lg:px-40 py-10">
      {/* left side */}
      <div className="w-full lg:w-[30%]">
        <div className="text-cBlack bg-cPrGrey pl-5 py-1">
          Account Dashboard
        </div>
        <div className="pl-5 py-1">Account Information</div>
        <div className="pl-5 py-1">Address Book</div>
        <div className="pl-5 py-1">My Orders</div>
        <div className="pl-5 py-1">My Wishlist</div>
        <div className="pl-5 py-1">Newsletter Subscriptions</div>
      </div>
      {/* right side */}
      <div className="w-full lg:w-[70%]">
        <span className="text-cBlack font-semibold text-lg py-1">
          Account Information
        </span>
        {/* Contact Information & Newsletters */}
        <div className="flex flex-col lg:flex-row gap-16 mt-3">
          {/* Contact Information */}
          <div className="w-full lg:w-[35%] py-2">
            <span className="font-medium text-cGreen text-[13px] leading-5 uppercase">
              Contact Information
            </span>
            <p>Alex Driver</p>
            <p>ExampeAdress@gmail.com</p>
            <div className="text-sm text-black flex items-center justify-between mt-5">
              <button className="underline">Edit</button>
              <button className="underline">Change Password</button>
            </div>
          </div>
          {/* Newsletters */}
          <div className="w-full lg:w-[35%] py-2">
            <span className="font-medium text-cGreen text-[13px] leading-5 uppercase">
              Newsletters
            </span>
            <p>You don't subscribe to our newsletter.</p>
            <button className="text-sm text-black mt-5 underline">Edit</button>
          </div>
        </div>
        {/* Address Book */}
        <div className="mt-7">
          <span className="text-cBlack font-semibold text-lg py-1 mr-3">
            Address Book
          </span>
          <button className="text-sm text-black underline">Edit</button>
        </div>
        {/* Billing Address & Shipping Address */}
        <div className="flex flex-col lg:flex-row gap-16 mt-3">
          {/* Default Billing Address */}
          <div className="w-full lg:w-[35%] py-2">
            <span className="font-medium text-cGreen text-[13px] leading-5 uppercase">
              Default Billing Address
            </span>
            <p>You have not set a default billing address.</p>
            <button className="text-sm text-black mt-5 underline">
              Edit Address
            </button>
          </div>
          {/* Shipping Address */}
          <div className="w-full lg:w-[35%] py-2">
            <span className="font-medium text-cGreen text-[13px] leading-5 uppercase">
              Default Shipping Address
            </span>
            <p>You have not set a default shipping address.</p>
            <button className="text-sm text-black mt-5 underline">
              Edit Address
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account_Info;
