import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cBlack text-white min-w-max px-5 lg:px-40 py-10 text-center">
      <div className="flex-row lg:flex items-center justify-between">
        <ul className="flex justify-center items-left lg:items-center gap-4">
          <Link to="/">Policy</Link>
          <Link to="/">Terms & Conditions</Link>
          <Link to="/">Help</Link>
        </ul>
        <div className="flex items-center justify-center mt-4 lg:mt-0">
          <img src="/brand_icon.svg" alt="icon" />
          <span className="text-4xl">SimpleWood.</span>
        </div>
        <div className="flex justify-center items-center mt-5 gap-7">
          <p>Follow Us on Social</p>
          <img src="/footer_socials.svg" alt="socials" />
        </div>
      </div>
      <p className="text-[13px] mt-5 lg:mt-10">
        Copyring © Viachas Kul. All right reserved.
      </p>
    </footer>
  );
};

export default Footer;
