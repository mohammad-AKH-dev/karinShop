import { productType } from "@/app/types";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import React from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Image from "next/image";
import { Models } from "appwrite";
import Link from "next/link";

function OfferBox(props: productType | Models.DefaultDocument) {
  const { score, isAvailableToday, image1, brand, price, discount , $id} = props;

  return (
    <Link href={`/shop/${$id}`} className="product-box block bg-[rgb(31,41,55)] p-4 rounded-xl sm:max-w-[15rem]">
      <div className="product-box__header text-[12px] flex flex-row-reverse items-center justify-between">
        <div className="product-score flex flex-row-reverse items-center gap-x-1 text-gray-400">
          <StarBorderIcon />
          <span className="score">{Math.floor(score)}.00</span>
        </div>
        {isAvailableToday && (
          <div className="today-post flex flex-row-reverse items-center gap-x-1">
            <span>ارسال امروز</span>
            <RocketLaunchIcon />
          </div>
        )}
      </div>
      <div className="product-box__image-wrapper overflow-hidden flex items-center justify-center">
        <Image
          width={2000}
          height={2000}
          src={image1}
          alt={brand}
          className="product-box__image transition-all mt-2 hover:scale-110 max-w-[184px] max-h-[134px] object-cover"
        />
      </div>
      <p className="product-box__brand line-clamp-2 text-[.8rem] mt-4 text-[#d1d5db]">
        {brand}
      </p>
      <div className="divider w-full h-[2px] my-2 bg-[#374151]"></div>
      <div className="product-price__wrapper flex flex-row-reverse items-center justify-between">
        <span className="product-price font-medium">
          {price.toLocaleString()} تومان
        </span>
        <span className="product-discount mt-2 text-sm bg-[#3b82f6] py-1 px-2 text-[12px] flex items-center justify-center rounded-2xl">
          <div className="translate-y-[2px]">{discount}%</div>
        </span>
      </div>
    </Link>
  );
}

export default OfferBox;
