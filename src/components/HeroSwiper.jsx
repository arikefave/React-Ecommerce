import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { swiperData } from "../mockData/Carpenterdata";

const HeroSwiper = () => {
  return (
    <div>
      <Swiper
        direction="horizontal"
        loop={true}
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        scrollbar={{
          draggable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        className="h-max"
      >
        {swiperData.map(({ id, heading, paragraph, btnText }) => {
          return (
            <SwiperSlide key={id}>
              <div
                className="lg:min-h-screen text-white lg:py-7 px-5 lg:px-40 flex flex-col-reverse lg:flex lg:flex-row items-center gap-y-5 lg:gap-x-20 lg:justify-items-start pt-12"
                style={{
                  backgroundImage: "url('/hero_bg.svg')",
                  backgroundSize: `cover`,
                  backgroundPosition: `center`,
                  backgroundRepeat: `no-repeat`,
                }}
              >
                <div className="lg:flex lg:flex-col justify-between gap-5 hidden">
                  <img src="/fbook_icon.svg" alt="facebook" />
                  <img src="/x_icon.svg" alt="twitter" />
                  <img src="/ytube_icon.svg" alt="youtube" />
                  <img src="/google_icon.svg" alt="google" />
                </div>
                <div className="flex flex-col lg:flex-col items-center justify-center lg:items-start lg:justify-start lg:w-[300px] ">
                  <h1 className="font-bold text-4xl leading-[113%] w-[80%] lg:w-full text-center lg:text-start">
                    {heading}
                  </h1>
                  <p className="text-[14px] mt-3 text-center lg:text-start">
                    {paragraph}
                  </p>
                  <button className="max-w-max py-2 px-3 mt-8 mb-12 lg:mb-0 rounded-[1.7px] flex items-center justify-center bg-cGreen text-white hover:bg-cGreen/70 hover:shadow-lg transition-all duration-300 ease-in-out">
                    {btnText}
                    <IoIosArrowRoundForward />
                  </button>
                </div>
                <div className="grid grid-cols-2 place-content-center place-items-center gap-4">
                  <div className="grid grid-rows-2 place-content-center place-items-center gap-4">
                    <img src="/yellow_chair.svg" alt="yellow-chair" />
                    <img src="/brown_chair.svg" alt="brown-chair" />
                  </div>
                  <img src="/white_chair.svg" alt="white-chair" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
