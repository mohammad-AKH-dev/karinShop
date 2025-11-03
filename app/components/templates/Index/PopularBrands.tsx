"use client";

import React, { useState } from "react";
import NavigationSectionTitle from "../../modules/NavigationSectionTitle/NavigationSectionTitle";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

function PopularBrands() {
  const [brands, setBrands] = useState([
    { id: 1, brand: "asus", img: "/images/brands/brand-1.png" },
    { id: 2, brand: "philips", img: "/images/brands/brand-2.webp" },
    { id: 3, brand: "tsco", img: "/images/brands/brand-3.webp" },
    { id: 4, brand: "anker", img: "/images/brands/brand-4.webp" },
    { id: 5, brand: "huawei", img: "/images/brands/brand-5.webp" },
    { id: 6, brand: "samsung", img: "/images/brands/brand-6.png" },
    { id: 7, brand: "xiaomi", img: "/images/brands/brand-7.png" },
  ]);

  return (
    <section className="popular-brands__section">
      <div className="popular-brands__content">
        <NavigationSectionTitle
          title="محبوب ترین"
          blueTitle="برندها"
          href="/shop"
          subtitle="جدیدترین و بروزترین محصولات"
          icon={<PhoneAndroidIcon />}
        />
        <Swiper
          className="mySwiper mt-12"
          navigation={true}
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            470: {
                slidesPerView: 1.3,
                spaceBetween: 60
            },
            540: {
                spaceBetween: 30
            },
            600: {
                slidesPerView: 1.8,
                spaceBetween: 50
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 150
            },
            830: {
                slidesPerView: 2.5,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3.5,
                spaceBetween: 30
            },
            1280: {
                slidesPerView: 4.5,
                spaceBetween: 30
            },
            1330: {
                slidesPerView: 5,
                spaceBetween: 30
            }
          }}
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.id}>
              <div className="brand_image__wrapper bg-[rgb(31,44,55)] rounded-xl flex items-center min-w-[240px] h-[112px] justify-center">
                <Image
                  className="w-[190px]"
                  width={1500}
                  height={1500}
                  src={brand.img}
                  alt={brand.brand}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default PopularBrands;
