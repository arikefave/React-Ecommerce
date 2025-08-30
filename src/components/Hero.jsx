import React from "react";
import Button from "./mini_components/Button";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <section
      className="min-h-screen text-white py-7 px-40 flex items-center gap-x-20 justify-items-start bg-cover"
      style={{ backgroundImage: "url('/hero_bg.svg')" }}
    >
      <div className="flex flex-col justify-between gap-5 ">
        <img src="/fbook_icon.svg" alt="facebook" />
        <img src="/x_icon.svg" alt="twitter" />
        <img src="/ytube_icon.svg" alt="youtube" />
        <img src="/google_icon.svg" alt="google" />
      </div>
      <div>
        <div className="w-[300px]">
          <h1 className="font-bold text-4xl leading-[113%]">
            SimpleWood Chair Collection
          </h1>
          <p className="text-[14px] mt-3">
            Find hand-curated collections that fit your style, space, and
            budget.
          </p>
          <Button btnText={`Shop Now`} className="max-w-max py-2 px-3 mt-8" />
        </div>
        <div className="hidden">
          <span className="rounded-full items-center justify-center bg-cGreen">
            0
          </span>
          <span className="rounded-full items-center justify-center bg-cGrey">
            0
          </span>
          <span className="rounded-full items-center justify-center bg-cGrey">
            0
          </span>
          <span className="rounded-full items-center justify-center bg-cGrey">
            0
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 place-content-center place-items-center">
        <div className="grid grid-rows-2 place-content-center place-items-center gap-4">
          <img src="/yellow_chair.svg" alt="yellow-chair" />
          <img src="/brown_chair.svg" alt="brown-chair" />
        </div>
        <img src="white_chair.svg" alt="white-chair" />
      </div>
    </section>
  );
};

export default Hero;
