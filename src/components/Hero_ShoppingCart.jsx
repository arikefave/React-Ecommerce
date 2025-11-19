import React from "react";
import { MdOutlineChevronRight } from "react-icons/md";

const Hero_ShoppingCart = () => {
  return (
    <section
      style={{ backgroundImage: "url('/hero_bg.svg')" }}
      className="text-white min-h-max px-5 lg:px-40 py-10"
    >
      <div className="flex text-xs font-normal ">
        <p>Home</p>
        <MdOutlineChevronRight />
        <p>Shopping Cart</p>
      </div>
      <h1 className="font-light text-[40px] mt-5">Shopping Cart</h1>
    </section>
  );
};

export default Hero_ShoppingCart;
