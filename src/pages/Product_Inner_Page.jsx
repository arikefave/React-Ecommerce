import React from "react";
import Hero_Inner_Page from "../components/Hero_Inner_Page";
import Product_Desc from "../components/Product_Desc";
import Product_News from "../components/Product_News";

const Product_Inner_Page = () => {
  return (
    <div>
      <Hero_Inner_Page />
      <Product_Desc />
      <Product_News />
    </div>
  );
};

export default Product_Inner_Page;
