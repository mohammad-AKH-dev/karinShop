"use client";

import React, { forwardRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import WhatshotIcon from '@mui/icons-material/Whatshot';

interface searchModalInterFace {
  close: () => void;
}

const SearchModal = forwardRef(
  (props: searchModalInterFace, ref: React.Ref<HTMLDivElement>) => {
    const { close } = props;
    const [searchInput, setSearchInput] = useState("");
    return (
      <div
        className="search-modal block lg:hidden w-full h-full fixed -top-[50rem] z-[999] bg-[#111827f2] p-4 delay-100
        transition-all duration-400 opacity-95 backdrop-blur-2xl"
        ref={ref}
      >
        {/* search section */}
        <div className="search-section flex items-center gap-x-2">
          <div className="input-wrapper text-gray-400 w-full flex lg:hidden cursor-pointer items-center gap-x-1 rounded-full px-[1rem] bg-gray-800 p-1">
            <SearchIcon className="w-[30px]! h-[30px]! cursor-pointer" />
            <span className="flex items-center gap-x-1 w-full">
              <input
                type="text"
                placeholder="جستجو در همه کالاها"
                className="placeholder:text-gray-400 w-full border-none outline-none"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
              />
            </span>
          </div>
          <ClearIcon className="text-gray-400 cursor-pointer" onClick={close} />
        </div>
        {/* search result */}
        <div className="search-result__title flex items-center gap-x-1 my-4">
          <span className="text-white">نتیجه جستجو:</span>
          <span className="text-blue-400 font-medium">iphone</span>
        </div>
        {/* related results */}
        <ul className="related-results-list flex flex-col gap-y-4 text-gray-300">
          <li className="related-result__item flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-x-2">
              <SearchIcon />
              <span>آیفون 14</span>
            </div>
            <ArrowOutwardIcon />
          </li>
          <li className="related-result__item flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-x-2">
              <SearchIcon />
              <span>قاب آیفون</span>
            </div>
            <ArrowOutwardIcon />
          </li>
          <li className="related-result__item flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-x-2">
              <SearchIcon />
              <span>کاور آیفون 16</span>
            </div>
            <ArrowOutwardIcon />
          </li>
        </ul>
        {/* popular results */}
        <div className="popular-results__wrapper mt-6">
           <div className="popular-results__title flex items-center gap-x-2">
              <WhatshotIcon/>
              <span>جستجوهای پرطرفدار :</span>
           </div>
           <ul className="popular-results__list mt-6 text-gray-400 flex flex-wrap sm:flex-nowrap items-center gap-3">
              <li className="py-1 rounded-3xl border px-4 border-gray-600">#آیفون</li>
              <li className="py-1 rounded-3xl border px-4 border-gray-600">#لپ تاپ</li>
              <li className="py-1 rounded-3xl border px-4 border-gray-600">#هدفون</li>
              <li className="py-1 rounded-3xl border px-4 border-gray-600">#هلدر</li>
           </ul>
        </div>
      </div>
    );
  }
);

export default SearchModal;
