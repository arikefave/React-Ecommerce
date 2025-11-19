import React from "react";
import Button from "./mini_components/Button";

const Signup = () => {
  return (
    <section className="text-cBlack px-5 lg:px-96 py-14">
      <form>
        <div>
          <h3 className="font-semibold text-lg">Personal Information</h3>
          <div className="flex items-center justify-center gap-10 mt-5">
            <label className="w-[130px]">First name *</label>
            <input
              type="text"
              placeholder="Enter Your First Name"
              className="w-[490px] text-cGreen placeholder:text-cGrey_1 border border-cGrey_2 p-2"
            />
          </div>
          <div className="flex items-center justify-center gap-10 mt-4">
            <label className="w-[130px]">Last Name *</label>
            <input
              type="text"
              placeholder="Enter Your Last Name"
              className="w-[490px] text-cGreen placeholder:text-cGrey_1 border border-cGrey_2 p-2"
            />
          </div>
          <div className="flex gap-3 mt-4">
            <input
              type="checkbox"
              className="border-cGrey_1 active:bg-cGreen"
            />
            <p>Sign Up for Newsletter</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg mt-14">Email & Password</h3>
          <div className="flex items-center justify-center gap-10 mt-5">
            <label className="w-[130px]">Email *</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-[490px] text-cGreen placeholder:text-cGrey_1 border border-cGrey_2 p-2"
            />
          </div>
          <div className="flex items-center justify-center gap-10 mt-4">
            <label className="w-[130px]">Password *</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-[490px] text-cGreen placeholder:text-cGrey_1 border border-cGrey_2 p-2"
            />
          </div>
          <div className="flex items-center justify-center gap-10 mt-4">
            <label className="w-[130px]">Confirm Password *</label>
            <input
              type="password"
              placeholder="Confirm Your Password"
              className="w-[490px] text-cGreen placeholder:text-cGrey_1 border border-cGrey_2 p-2"
            />
          </div>
        </div>
      </form>
      <div className="mt-20 flex items-center justify-between">
        <Button
          className={`p-3 max-w-max font-bold`}
          btnText={`Create an Account`}
        />
        <button className="font-bold text-cGrey_2 underline">Back</button>
      </div>
    </section>
  );
};

export default Signup;
