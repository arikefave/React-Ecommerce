import React from "react";
import { MdOutlineChevronRight } from "react-icons/md";

const Hero_Catalog = () => {
  return (
    <section
      style={{ backgroundImage: "url('/hero_bg.svg')" }}
      className="text-white min-h-max px-5 lg:px-40 py-10"
    >
      <div className="flex text-xs font-normal ">
        <p>Home</p>
        <MdOutlineChevronRight />
        <p>New Luma Yoga Collection</p>
      </div>
      <h1 className="font-light text-[40px] mt-5">
        Simple Wood Chair Collection
      </h1>
    </section>
  );
};

export default Hero_Catalog;
