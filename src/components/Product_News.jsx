import React from "react";
import Button from "./mini_components/Button";

const Product_News = () => {
  return (
    <section className="max-h-max flex flex-col py-14 px-5 lg:px-40 bg-cPrGrey">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-7 lg:space-x-5 place-items-center place-content-center text-cBlack mb-16">
        <div>
          <img src="/news01.svg" alt="news" />
          <Button
            className={`font-bold text-[11px] mt-2 px-3 py-2`}
            btnText={`Lifestyle`}
          />
          <h5 className="font-semibold text-lg mt-4">
            Staircase Ideas: New Riser Finishes to Transform Your Staircase
          </h5>
          <small className="font-light text-sm mt-3">
            Our statement staircase ideas can give your hallway a whole new
            lease of life without any messy building work or plannin...
          </small>
        </div>
        <div>
          <img src="/news02.svg" alt="news" />
          <button className="font-bold text-[11px] mt-2 px-3 py-2 rounded-[1.7px] flex items-center justify-center bg-[#0081B8] text-white hover:bg-[#0081B870] hover:shadow-lg transition-all duration-300 ease-in-out">
            Lifestyle
          </button>
          <h5 className="font-semibold text-lg mt-4">
            Staircase Ideas: New Riser Finishes to Transform Your Staircase
          </h5>
          <small className="font-light text-sm mt-3">
            Our statement staircase ideas can give your hallway a whole new
            lease of life without any messy building work or plannin...
          </small>
        </div>
        <div>
          <img src="/news03.svg" alt="news" />
          <Button
            className={`font-bold text-[11px] mt-2 px-3 py-2`}
            btnText={`Lifestyle`}
          />
          <h5 className="font-semibold text-lg mt-4">
            Staircase Ideas: New Riser Finishes to Transform Your Staircase
          </h5>
          <small className="font-light text-sm mt-3">
            Our statement staircase ideas can give your hallway a whole new
            lease of life without any messy building work or plannin...
          </small>
        </div>
      </div>
      <button className="text-sm underline">See More</button>
    </section>
  );
};

export default Product_News;
