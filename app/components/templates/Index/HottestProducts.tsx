"use client";

import React from "react";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";

function HottestProducts() {
  return (
    <section className="hottest-products__section mt-24">
      <div className="hottest-products__content bg-[rgb(31,44,55)] rounded-xl">
        <h4 className="hottest-products__title flex pt-6 justify-center gap-x-2">
          <WhatshotIcon className="text-orange-400" />
          <span className="text-lg text-gray-800 font-medium dark:text-gray-200">
            داغ ترین چند ساعت گذشته
          </span>
        </h4>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={50}
          className="mySwiper px-[30px]! pt-4!"
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2
            },
            950: {
              slidesPerView: 3
            },
            1280: {
              slidesPerView: 4
            }
          }}
        >
          <SwiperSlide>
            <div className="hot-boxes__wrapper">
              <Link
                href={"/shop"}
                className="hot-box flex items-center justify-center gap-x-4"
              >
                <Image
                  width={2000}
                  height={2000}
                  className="hot-box__image w-[112px] h-[112px]"
                  src={"/images/products/product-1.png"}
                  alt="product-1"
                />
                <p className="hot-box__paragraph line-clamp-2 overflow-hidden text-[#d1d5db]">
                  مانیتور گیمینگ ایسوس مدل ROG Swift PG259QN
                </p>
              </Link>
              <Link
                href={"/shop"}
                className="hot-box flex items-center justify-center gap-x-4 border-t border-[rgb(55,65,81)]"
              >
                <Image
                  width={2000}
                  height={2000}
                  className="hot-box__image w-[112px] h-[112px]"
                  src={"/images/products/product-3.png"}
                  alt="product-1"
                />
                <p className="hot-box__paragraph line-clamp-2">
                  کنسول بازی پلی استیشن 5 نسخه دیسک دار
                </p>
              </Link>
              <Link
                href={"/shop"}
                className="hot-box flex items-center justify-center gap-x-4 border-t border-[rgb(55,65,81)]"
              >
                <Image
                  width={2000}
                  height={2000}
                  className="hot-box__image w-[112px] h-[112px]"
                  src={"/images/products/product-7.png"}
                  alt="product-1"
                />
                <p className="hot-box__paragraph line-clamp-2">
                  ساعت هوشمند سامسونگ مدل Galaxy Watch 6
                </p>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hot-boxes__wrapper">
              <Link
                href={"/shop"}
                className="hot-box flex items-center justify-center gap-x-4"
              >
                <Image
                  width={2000}
                  height={2000}
                  className="hot-box__image w-[112px] h-[112px]"
                  src={"/images/products/product-1.png"}
                  alt="product-1"
                />
                <p className="hot-box__paragraph line-clamp-2 overflow-hidden text-[#d1d5db]">
                  لپ تاپ 14 اینچی لنوو مدل ThinkPad X1 Carbon
                </p>
              </Link>
              <Link
                href={"/shop"}
                className="hot-box flex items-center justify-center gap-x-4 border-t border-[rgb(55,65,81)]"
              >
                <Image
                  width={2000}
                  height={2000}
                  className="hot-box__image w-[112px] h-[112px]"
                  src={"/images/products/product-3.png"}
                  alt="product-1"
                />
                <p className="hot-box__paragraph line-clamp-2">
                  گوشی موبایل سامسونگ مدل Galaxy S23 Ultra
                </p>
              </Link>
              <Link
                href={"/shop"}
                className="hot-box flex items-center justify-center gap-x-4 border-t border-[rgb(55,65,81)]"
              >
                <Image
                  width={2000}
                  height={2000}
                  className="hot-box__image w-[112px] h-[112px]"
                  src={"/images/products/product-7.png"}
                  alt="product-1"
                />
                <p className="hot-box__paragraph line-clamp-2">
                  هدفون بی‌سیم اپل مدل AirPods Pro 2
                </p>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hot-boxes__wrapper">
              <Link
                href={"/shop"}
                className="hot-box flex items-center justify-center gap-x-4"
              >
                <Image
                  width={2000}
                  height={2000}
                  className="hot-box__image w-[112px] h-[112px]"
                  src={"/images/products/product-1.png"}
                  alt="product-1"
                />
                <p className="hot-box__paragraph line-clamp-2 overflow-hidden text-[#d1d5db]">
                  مانیتور گیمینگ ایسوس مدل ROG Swift PG259QN
                </p>
              </Link>
              <Link
                href={"/shop"}
                className="hot-box flex items-center justify-center gap-x-4 border-t border-[rgb(55,65,81)]"
              >
                <Image
                  width={2000}
                  height={2000}
                  className="hot-box__image w-[112px] h-[112px]"
                  src={"/images/products/product-3.png"}
                  alt="product-1"
                />
                <p className="hot-box__paragraph line-clamp-2">
                  کنسول بازی پلی استیشن 5 نسخه دیسک دار
                </p>
              </Link>
              <Link
                href={"/shop"}
                className="hot-box flex items-center justify-center gap-x-4 border-t border-[rgb(55,65,81)]"
              >
                <Image
                  width={2000}
                  height={2000}
                  className="hot-box__image w-[112px] h-[112px]"
                  src={"/images/products/product-7.png"}
                  alt="product-1"
                />
                <p className="hot-box__paragraph line-clamp-2">
                  ساعت هوشمند سامسونگ مدل Galaxy Watch 6
                </p>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hot-boxes__wrapper">
              <Link
                href={"/shop"}
                className="hot-box flex items-center justify-center gap-x-4"
              >
                <Image
                  width={2000}
                  height={2000}
                  className="hot-box__image w-[112px] h-[112px]"
                  src={"/images/products/product-1.png"}
                  alt="product-1"
                />
                <p className="hot-box__paragraph line-clamp-2 overflow-hidden text-[#d1d5db]">
                  لپ تاپ 14 اینچی لنوو مدل ThinkPad X1 Carbon
                </p>
              </Link>
              <Link
                href={"/shop"}
                className="hot-box flex items-center justify-center gap-x-4 border-t border-[rgb(55,65,81)]"
              >
                <Image
                  width={2000}
                  height={2000}
                  className="hot-box__image w-[112px] h-[112px]"
                  src={"/images/products/product-3.png"}
                  alt="product-1"
                />
                <p className="hot-box__paragraph line-clamp-2">
                  گوشی موبایل سامسونگ مدل Galaxy S23 Ultra
                </p>
              </Link>
              <Link
                href={"/shop"}
                className="hot-box flex items-center justify-center gap-x-4 border-t border-[rgb(55,65,81)]"
              >
                <Image
                  width={2000}
                  height={2000}
                  className="hot-box__image w-[112px] h-[112px]"
                  src={"/images/products/product-7.png"}
                  alt="product-1"
                />
                <p className="hot-box__paragraph line-clamp-2">
                  هدفون بی‌سیم اپل مدل AirPods Pro 2
                </p>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hot-boxes__wrapper">
              <Link
                href={"/shop"}
                className="hot-box flex items-center justify-center gap-x-4"
              >
                <Image
                  width={2000}
                  height={2000}
                  className="hot-box__image w-[112px] h-[112px]"
                  src={"/images/products/product-1.png"}
                  alt="product-1"
                />
                <p className="hot-box__paragraph line-clamp-2 overflow-hidden text-[#d1d5db]">
                  مانیتور گیمینگ ایسوس مدل ROG Swift PG259QN
                </p>
              </Link>
              <Link
                href={"/shop"}
                className="hot-box flex items-center justify-center gap-x-4 border-t border-[rgb(55,65,81)]"
              >
                <Image
                  width={2000}
                  height={2000}
                  className="hot-box__image w-[112px] h-[112px]"
                  src={"/images/products/product-3.png"}
                  alt="product-1"
                />
                <p className="hot-box__paragraph line-clamp-2">
                  کنسول بازی پلی استیشن 5 نسخه دیسک دار
                </p>
              </Link>
              <Link
                href={"/shop"}
                className="hot-box flex items-center justify-center gap-x-4 border-t border-[rgb(55,65,81)]"
              >
                <Image
                  width={2000}
                  height={2000}
                  className="hot-box__image w-[112px] h-[112px]"
                  src={"/images/products/product-7.png"}
                  alt="product-1"
                />
                <p className="hot-box__paragraph line-clamp-2">
                  ساعت هوشمند سامسونگ مدل Galaxy Watch 6
                </p>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default HottestProducts;
