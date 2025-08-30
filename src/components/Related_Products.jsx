import React from "react";
import { Productdata } from "../mockData/Carpenterdata";
import { IoIosStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Related_Products = () => {
  const navigate = useNavigate();
  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };
  return (
    <section className="px-5 lg:px-40 my-20">
      <h2 className="font-light text-4xl text-cBlack flex items-center justify-center">
        Related Products
      </h2>
      <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6 gap-5 w-full">
        {Productdata.slice(0, 4).map(
          ({
            id,
            img,
            productName,
            originalPrice,
            discountedPrice,
            reviews,
          }) => (
            <div
              key={id}
              onClick={() => handleCardClick(id)}
              className="w-full lg:w-[200px]"
            >
              <div className="bg-[#F0F0F0] flex items-center justify-center p-3 w-full">
                <img src={img} alt={productName} />
              </div>
              <h3 className="font-semibold">{productName}</h3>
              <div className="font-sm text-[15px] flex gap-2">
                <span className="line-through text-[#A2A2A2]">
                  {originalPrice}
                </span>
                <span className="text-cBlack">{discountedPrice}</span>
              </div>
              <div className="flex gap-1">
                <div className="flex">
                  <IoIosStar className="text-[#FF9900]" />
                  <IoIosStar className="text-[#FF9900]" />
                  <IoIosStar className="text-[#FF9900]" />
                  <IoIosStar className="text-[#C4C4C4]" />
                  <IoIosStar className="text-[#C4C4C4]" />
                </div>
                <span className="text-xs underline text-cGrey_1">
                  {reviews}
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Related_Products;
