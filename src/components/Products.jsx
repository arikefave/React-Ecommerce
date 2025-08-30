import React from "react";

const Products = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center px-5 lg:px-40 py-20 w-full">
      {/* {left side} */}
      <div className="grid grid-cols-1 lg:grid-rows-4">
        <div className="flex flex-col items-center">
          <div className="items-center justify-center max-w-max">
            <img src="/left-pr1.svg" alt="product" className="" />
          </div>
          <div className="flex gap-x-1 mt-3 ">
            <img src="/plus_icon.svg" alt="icon" />
            <small className="">Sofas</small>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="items-center justify-center max-w-max">
            <img src="/left-pr2.svg" alt="product" className="" />
          </div>
          <div className="flex gap-x-1 mt-3 ">
            <img src="/plus_icon.svg" alt="icon" />
            <small className="">Tables</small>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="items-center justify-center max-w-max">
            <img src="/left-pr3.svg" alt="product" className="" />
          </div>
          <div className="flex gap-x-1 mt-3 ">
            <img src="/plus_icon.svg" alt="icon" />
            <small className="">Floor lamps & Fixtures</small>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="items-center justify-center max-w-max">
            <img src="/left-pr4.svg" alt="product" className="" />
          </div>
          <div className="flex gap-x-1 mt-3 ">
            <img src="/plus_icon.svg" alt="icon" />
            <small className="">Commode</small>
          </div>
        </div>
      </div>
      {/* {right side} */}
      <div className="grid grid-rows-1 lg:grid-rows-4">
        <div className="gap-2 flex flex-col items-center">
          <div className="items-center justify-center">
            <img src="/right-pr1.svg" alt="product" />
          </div>
          <div className="flex gap-x-1">
            <img src="/plus_icon.svg" alt="icon" />
            <small>Sofas</small>
          </div>
        </div>
        <div className="gap-2 flex flex-col items-center">
          <div className="items-center justify-center">
            <img src="/right-pr2.svg" alt="product" />
          </div>
          <div className="flex gap-x-1">
            <img src="/plus_icon.svg" alt="icon" />
            <small>Sofas</small>
          </div>
        </div>
        <div className="border-cGrey_3 border-[1px] justify-center items-center py-20 px-5 text-cGrey_2">
          <h3 className="font-bold text-4xl">Get 10% Discount</h3>
          <p className="mt-2 text-base">
            Get 10% discount with notified about the latest news and updates, no
            spam, we proise1
          </p>
          <input
            type="text"
            placeholder="Enter your email address"
            className="border-cGrey_3 border-[1px] rounded-[40px] p-3 mt-4"
          />
        </div>
        <div className="gap-2 flex flex-col items-center">
          <div className="items-center justify-center">
            <img src="/right-pr3.svg" alt="product" />
          </div>
          <div className="flex gap-x-1">
            <img src="/plus_icon.svg" alt="icon" />
            <small>Sofas</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
