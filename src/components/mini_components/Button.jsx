import React from "react";

const Button = ({ className, btnText }) => {
  return (
    <button
      className={`${className} rounded-[1.7px] flex items-center justify-center bg-cGreen text-white hover:bg-cGreen/70 hover:shadow-lg transition-all duration-300 ease-in-out`}
    >
      {btnText}
    </button>
  );
};

export default Button;
