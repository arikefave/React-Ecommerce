import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { IoIosStar } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import Button from "./mini_components/Button";

const Purchase_Info_02 = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  return (
    <section className="font-semibold text-lg text-cBlack px-5 lg:px-40 mt-20">
      <div>
        <div
          onClick={toggleDetails}
          className="border border-[#E0E0E0] w-full px-2 py-1 flex items-center bg-[#F5F5F5]"
        >
          <GoPlus className="text-cBlack" />
          <h4>Details</h4>
        </div>
        {showDetails && (
          <div className="gap-y-3 font-light text-sm px-8 py-3">
            <p>The sofa quickly and easily turns into a spacious bed.</p>
            <p>
              It is recommended to use as a sleeping place for guests, not
              intended for daily use as a bed.
            </p>
          </div>
        )}
      </div>
      <div className="border-b border-[#E0E0E0] w-full px-2 py-1 flex items-center">
        <GoPlus className="text-cBlack" />
        <h4>Sizes</h4>
      </div>
      <div className="border-b border-[#E0E0E0] w-full px-2 py-1 flex items-center">
        <GoPlus className="text-cBlack" />
        <h4>Care instructions</h4>
      </div>
      <div className="border-b border-[#E0E0E0] w-full px-2 py-1 flex items-center">
        <GoPlus className="text-cBlack" />
        <h4>Quality and environmental information</h4>
      </div>
      <div className="border-b border-[#E0E0E0] w-full px-2 py-1 flex items-center">
        <GoPlus className="text-cBlack" />
        <h4>Packing Information</h4>
      </div>
      <div className="border-b border-[#E0E0E0] w-full px-2 py-1 flex items-center">
        <GoPlus className="text-cBlack" />
        <h4>Instructions and documents</h4>
      </div>
      <div className="w-full px-2 py-1 flex items-center">
        <GoPlus className="text-cBlack" />
        <h4>Product Availability</h4>
      </div>
      <div
        onClick={toggleReviews}
        className="flex items-center border px-2 py-1 w-full border-[#E0E0E0] bg-[#F5F5F5]"
      >
        <GoPlus className="text-cBlack" />
        <h4>Reviews</h4>
      </div>
      {showReviews && (
        <div className="px-8 py-3 border-x border-b border-[#E0E0E0]">
          <h5 className="font-light text-[26px] text-cGrey_1">
            Customer Reviews
          </h5>
          {/* comment01 */}
          <div className="py-3">
            <p className="font-medium text-base lg:text-lg text-cBlack">
              As an ocean lifeguard, I've used several types of lower grade
              binos in the past and eventually just gave up on using binos all
              together because they would always have issues.
            </p>
            <div className="flex flex-col lg:flex-row lg:gap-20 py-4 border-b border-cGrey_3">
              {/* rating */}
              <div className="flex items-center gap-y-4">
                <small>Rating</small>
                <div className="flex">
                  <IoIosStar className="text-[#FF9900]" />
                  <IoIosStar className="text-[#FF9900]" />
                  <IoIosStar className="text-[#FF9900]" />
                  <IoIosStar className="text-[#C4C4C4]" />
                  <IoIosStar className="text-[#C4C4C4]" />
                </div>
              </div>
              {/* comment */}
              <div className="text-sm">
                <small className="block text-cBlack">
                  Rides up a bit during workouts but otherwise it's pretty
                  comfy! I like the hood.
                </small>
                <small className="block text-cGrey_1">
                  Review by Gala 3/25/19
                </small>
              </div>
            </div>
          </div>
          {/* comment02 */}
          <div>
            <h6 className="font-medium text-base pt-3">
              Rides up during workouts
            </h6>
            <div className="flex flex-col lg:flex-row gap-x-20 pb-4 pt-5 border-b border-cGrey_3">
              {/* rating */}
              <div className="flex items-center gap-y-4">
                <small>Rating</small>
                <div className="flex">
                  <IoIosStar className="text-[#FF9900]" />
                  <IoIosStar className="text-[#FF9900]" />
                  <IoIosStar className="text-[#FF9900]" />
                  <IoIosStar className="text-[#C4C4C4]" />
                  <IoIosStar className="text-[#C4C4C4]" />
                </div>
              </div>
              {/* comment */}
              <div className="text-sm">
                <small className="block text-cBlack">
                  Rides up a bit during workouts but otherwise it's pretty
                  comfy! I like the hood.
                </small>
                <small className="block text-cGrey_1">
                  Review by Gala 3/25/19
                </small>
              </div>
            </div>
          </div>
          {/* comment03 */}
          <div>
            <h6 className="font-medium text-base pt-3">
              Rides up during workouts
            </h6>
            <div className="flex flex-col lg:flex-row gap-x-20 pb-4 pt-5 border-b border-cGrey_3">
              {/* rating */}
              <div className="flex items-center gap-y-4">
                <small>Rating</small>
                <div className="flex">
                  <IoIosStar className="text-[#FF9900]" />
                  <IoIosStar className="text-[#FF9900]" />
                  <IoIosStar className="text-[#FF9900]" />
                  <IoIosStar className="text-[#C4C4C4]" />
                  <IoIosStar className="text-[#C4C4C4]" />
                </div>
              </div>
              {/* comment */}
              <div className="text-sm">
                <small className="block text-cBlack">
                  Rides up a bit during workouts but otherwise it's pretty
                  comfy! I like the hood.
                </small>
                <small className="block text-cGrey_1">
                  Review by Gala 3/25/19
                </small>
              </div>
            </div>
          </div>
          {/* reviewer */}
          <div className="pt-5">
            <p className="font-normal text-base text-cGrey_1">
              You're reviewing:
            </p>
            <p className="font-medium text-lg text-cBlack mt-1">
              Mona Pullover Hoodlie
            </p>
          </div>
          {/* your rating */}
          <div className="mt-3 font-medium text-sm space-y-1 ">
            <p>Your Rating *</p>
            <p>Rating</p>
            <div className="flex">
              <IoStarOutline className="text-cGrey_2" />
              <IoStarOutline className="text-cGrey_2" />
              <IoStarOutline className="text-cGrey_2" />
              <IoStarOutline className="text-cGrey_2" />
              <IoStarOutline className="text-cGrey_2" />
            </div>
          </div>
          {/* form */}
          <form className="text-sm text-cFilterGrey w-full lg:w-[493px] mt-5 space-y-3">
            <div>
              <label>Nickname *</label>
              <input
                type="text "
                className="border border-cGrey_2 w-full px-2 py-1 mt-2"
              />
            </div>
            <div>
              <label>Symmary *</label>
              <input
                type="text "
                className="border border-cGrey_2 w-full px-2 py-1 mt-2"
              />
            </div>
            <div>
              <label>Review *</label>
              <input
                type="text "
                className="border border-cGrey_2 w-full min-h-[80px] px-2 py-1 mt-2"
              />
            </div>
            <Button
              btnText={`Submit Review`}
              className={`max-w-max py-2 px-3 font-bold text-sm`}
            />
          </form>
        </div>
      )}
    </section>
  );
};

export default Purchase_Info_02;
