"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Image from "next/image";
import React, { useRef, useState } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

function FilteringSection() {
  const [isShowSelectionOptions, setIsShowSelectionOptions] =
    useState<boolean>(false);
  const [prices, setPrices] = useState<[number, number]>([40000, 300000]);

  return (
    <div className="filtering-section w-[30%] rounded-md dark:bg-gray-800 bg-white shadow px-4 py-3">
      <div className="filtering-section__title flex items-center justify-between">
        <h4 className="font-medium text-gray-700 dark:text-gray-200 text-lg">
          فیلترها
        </h4>
        <div className="text-blue-500 dark:text-blue-400 text-sm cursor-pointer">
          {" "}
          حذف فیلتر‌ها
        </div>
      </div>
      <button
        className="w-full flex cursor-pointer justify-between items-center pt-8 mb-4 text-gray-800 dark:text-gray-100"
        onClick={() => setIsShowSelectionOptions((prev) => !prev)}
      >
        <span>دسته بندی </span>
        <span id="icon-1" className="text-gray-800 dark:text-gray-100">
          <svg
            className={`size-5 transition-transhtmlForm duration-300 ${
              isShowSelectionOptions ? "-rotate-90" : "rotate-0"
            }`}
          >
            <ChevronLeftIcon />
          </svg>
        </span>
      </button>
      {/* دسته بندی ها */}
      <div
        className={`${
          isShowSelectionOptions ? "max-h-[210px]" : "max-h-0"
        } overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="pb-3 text-gray-700 dark:text-gray-300 w-full flex flex-col gap-y-1.5">
          <div className="inline-flex items-center mt-1">
            <label
              className="relative flex cursor-pointer items-center rounded-full p-3"
              htmlFor="ripple-on"
              data-ripple-dark="true"
            >
              <input
                id="ripple-on"
                type="checkbox"
                className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all behtmlFore:absolute behtmlFore:top-2/4 behtmlFore:left-2/4 behtmlFore:block behtmlFore:h-12 behtmlFore:w-12 behtmlFore:-translate-y-2/4 behtmlFore:-translate-x-2/4 behtmlFore:rounded-full behtmlFore:bg-slate-400 behtmlFore:opacity-0 behtmlFore:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:behtmlFore:bg-slate-400 hover:behtmlFore:opacity-10 dark:bg-gray-600 dark:checked:bg-blue-500 darKchecked:bg-blue-500  "
              />
              <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              className="cursor-pointer text-gray-800 dark:text-gray-400 mr-1"
              htmlFor="ripple-on"
            >
              همه کالاها
            </label>
          </div>

          <div className="inline-flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full p-3"
              htmlFor="ripple-2"
              data-ripple-dark="true"
            >
              <input
                id="ripple-2"
                type="checkbox"
                className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all behtmlFore:absolute behtmlFore:top-2/4 behtmlFore:left-2/4 behtmlFore:block behtmlFore:h-12 behtmlFore:w-12 behtmlFore:-translate-y-2/4 behtmlFore:-translate-x-2/4 behtmlFore:rounded-full behtmlFore:bg-slate-400 behtmlFore:opacity-0 behtmlFore:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:behtmlFore:bg-slate-400 hover:behtmlFore:opacity-10 dark:bg-gray-600 dark:checked:bg-blue-500 darKchecked:bg-blue-500  "
              />
              <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              className="cursor-pointer text-gray-800 dark:text-gray-400 mr-1"
              htmlFor="ripple-2"
            >
              موبایل
            </label>
          </div>

          <div className="inline-flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full p-3"
              htmlFor="ripple-3"
              data-ripple-dark="true"
            >
              <input
                id="ripple-3"
                type="checkbox"
                className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all behtmlFore:absolute behtmlFore:top-2/4 behtmlFore:left-2/4 behtmlFore:block behtmlFore:h-12 behtmlFore:w-12 behtmlFore:-translate-y-2/4 behtmlFore:-translate-x-2/4 behtmlFore:rounded-full behtmlFore:bg-slate-400 behtmlFore:opacity-0 behtmlFore:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:behtmlFore:bg-slate-400 hover:behtmlFore:opacity-10 dark:bg-gray-600 dark:checked:bg-blue-500 darKchecked:bg-blue-500  "
              />
              <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              className="cursor-pointer text-gray-800 dark:text-gray-400 mr-1"
              htmlFor="ripple-3"
            >
              لپ تاپ
            </label>
          </div>

          <div className="inline-flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full p-3"
              htmlFor="ripple-4"
              data-ripple-dark="true"
            >
              <input
                id="ripple-4"
                type="checkbox"
                className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all behtmlFore:absolute behtmlFore:top-2/4 behtmlFore:left-2/4 behtmlFore:block behtmlFore:h-12 behtmlFore:w-12 behtmlFore:-translate-y-2/4 behtmlFore:-translate-x-2/4 behtmlFore:rounded-full behtmlFore:bg-slate-400 behtmlFore:opacity-0 behtmlFore:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:behtmlFore:bg-slate-400 hover:behtmlFore:opacity-10 dark:bg-gray-600 dark:checked:bg-blue-500 darKchecked:bg-blue-500  "
              />
              <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              className="cursor-pointer text-gray-800 dark:text-gray-400 mr-1"
              htmlFor="ripple-4"
            >
              هدفون، هدست
            </label>
          </div>
        </div>
      </div>
      {/* کالا های موجود */}
      <div
        className="w-full justify-between flex items-center gap-x-3  py-4"
        dir="ltr"
      >
        <label
          htmlFor="hs-valid-toggle-switch"
          className="relative inline-block w-11 h-6 cursor-pointer"
        >
          <input
            type="checkbox"
            id="hs-valid-toggle-switch"
            className="peer sr-only"
          />
          <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-500 dark:bg-neutral-700 dark:peer-checked:bg-blue-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></span>
          <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white"></span>
        </label>
        <label
          htmlFor="hs-valid-toggle-switch"
          className="text-gray-800 dark:text-gray-100"
        >
          فقط کالا های موجود
        </label>
      </div>
      {/* ارسال امروز */}

      <div
        className="w-full justify-between flex items-center gap-x-3 py-4 "
        dir="ltr"
      >
        <label
          htmlFor="hs-valid-toggle-switch2"
          className="relative inline-block w-11 h-6 cursor-pointer"
        >
          <input
            type="checkbox"
            id="hs-valid-toggle-switch2"
            className="peer sr-only"
          />
          <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-500 dark:bg-neutral-700 dark:peer-checked:bg-blue-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></span>
          <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white"></span>
        </label>
        <label
          htmlFor="hs-valid-toggle-switch2"
          className="text-gray-800 dark:text-gray-100 flex items-center gap-x-2"
        >
          <Image
            width={2000}
            height={2000}
            className="size-5"
            src="/images/svg/time.png"
            alt="time"
          />
          ارسال امروز
        </label>
      </div>
      {/* محدوده قیمت */}

      <div className="price-range w-full flex items-center justify-between py-4 cursor-pointer">
        <span>محدوده قیمت</span>
        <NavigateBeforeIcon />
      </div>
      <div className="range-slider__wrapper py-3">
        <RangeSlider
          value={prices}
          onInput={(event) => setPrices(event)}
          min={0}
          max={350000}
        />
        <div className="price-input py-4 font-medium text-gray-800 dark:text-gray-500 flex flex-row-reverse items-center justify-between">
          <div className="min-price flex flex-row-reverse items-center gap-x-2">
            <span>تومان</span>
            <span>{prices[0].toLocaleString()}</span>
          </div>
          <div className="max-price flex flex-row-reverse items-center gap-x-2">
            <span>تومان</span>
            <span>{prices[1].toLocaleString()}</span>
          </div>
        </div>
      </div>
      {/* ارسال فروشنده */}
      <div
        className="w-full justify-between flex items-center gap-x-3 "
        dir="ltr"
      >
        <label
          htmlFor="hs-valid-toggle-switch3"
          className="relative inline-block w-11 h-6 cursor-pointer"
        >
          <input
            type="checkbox"
            id="hs-valid-toggle-switch3"
            className="peer sr-only"
          />
          <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-500 dark:bg-neutral-700 dark:peer-checked:bg-blue-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></span>
          <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white"></span>
        </label>
        <label
          htmlFor="hs-valid-toggle-switch3"
          className="text-gray-800 dark:text-gray-100 flex items-center gap-x-2"
        >
          <img className="size-5" src="/images/svg/Seller.svg" alt="" />
          ارسال فروشنده
        </label>
      </div>
      {/* خرید حضوری در تهران */}
      <div
        className="w-full justify-between flex items-center gap-x-3 py-8"
        dir="ltr"
      >
        <label
          htmlFor="hs-valid-toggle-switch4"
          className="relative inline-block w-11 h-6 cursor-pointer"
        >
          <input
            type="checkbox"
            id="hs-valid-toggle-switch4"
            className="peer sr-only"
          />
          <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-500 dark:bg-neutral-700 dark:peer-checked:bg-blue-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></span>
          <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white"></span>
        </label>
        <label
          htmlFor="hs-valid-toggle-switch4"
          className="text-gray-800 dark:text-gray-100 flex items-center gap-x-1"
        >
          <img className="size-5" src="/images/svg/shop.png" alt="" />
          خرید حضوری در تهران
        </label>
      </div>
    </div>
  );
}

export default FilteringSection;
