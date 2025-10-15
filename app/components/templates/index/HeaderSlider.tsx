"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Image from "next/image";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

function HeaderSlider() {
  let swiperHook = useSwiper();
  const [images, setImages] = useState([
    "/images/slider/item-1.webp",
    "/images/slider/item-2.jpg",
    "/images/slider/item-3.gif",
    "/images/slider/item-3.jpg",
  ]);

  return (
    <div className="relative group">
      <Swiper
        className="mySwiper  w-full h-[400px] rounded-2xl mt-8 cursor-pointer relative"
        onSwiper={(swiper: any) => (swiperHook = swiper)}
        effect={"fade"}
        autoplay
        modules={[EffectFade, Pagination , Autoplay]}
        pagination={{
          el: ".swiper-pagination", // Use a valid DOM element here
          type: "bullets",
          clickable: true,
          bulletClass:
            "bg-black w-[8px] h-[8px] rounded-full relative z-[100] bottom-[.2rem]",
          bulletActiveClass: "bg-primary-blue",
        }}
        loop
      >
        {images.map((image) => (
          <SwiperSlide>
            <Image
              className="min-h-full w-full object-cover object-center"
              src={image}
              width={4000}
              height={2000}
              unoptimized
              alt={image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute left-0 w-full h-[100px] z-50 bottom-[-1rem]">
        <div
          className="swiper-pagination relative top-[4.5rem] bg-primary-dark left-0 right-0
         flex items-center justify-center max-w-[150px] rounded-md mx-auto gap-x-2 p-4"
        ></div>
        <div
          className="swiper-navigation-wrapper max-[540px]:bottom-16 max-[540px]:right-30 absolute invisible opacity-0 transition-all 
        group-hover:visible group-hover:opacity-100 bottom-9 right-6 z-[1000] flex items-center justify-center gap-x-2"
        >
          <button
            onClick={() => {
              swiperHook.slidePrev();
            }}
            className="bg-primary-dark w-[36px] group/inner
             h-[36px] rounded-full z-50 text-white flex items-center cursor-pointer justify-center transition-all"
          >
            <ChevronRightIcon className="group-hover/inner:text-primary-blue transition-all " />
          </button>
          <button
            onClick={() => {
              swiperHook.slideNext();
            }}
            className="bg-primary-dark w-[36px] group/inner
             h-[36px] rounded-full z-50 text-white flex items-center cursor-pointer justify-center transition-all"
          >
            <ChevronLeftIcon className="group-hover/inner:text-primary-blue transition-all " />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderSlider;
