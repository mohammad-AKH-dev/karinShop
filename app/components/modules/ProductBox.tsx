import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import { productType } from "@/app/types";
import { Models } from "appwrite";
import Image from "next/image";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css";
import Link from "next/link";

function ProductBox(props: productType | Models.DefaultDocument) {
  const { $id , discount, image1, image2, brand, price } = props;
  return (
    <Link href={`/shop/${$id}`} className="product-box block bg-[rgb(31,41,55)] p-4 rounded-xl">
      <div className="product-box__header flex items-center justify-between ">
        <div className="product-box__header-right flex items-center gap-x-3 text-[12px]">
          <Tooltip
            placement="top"
            trigger={"hover"}
            overlay={<span className="text-white">سبد خرید</span>}
          >
            <ShoppingCartIcon className="w-[30px]! h-[30px]! cursor-pointer border border-[#374151] rounded-full p-[6px]" />
          </Tooltip>
          <Tooltip
            placement="top"
            trigger={"hover"}
            overlay={<span className="text-white">علاقه مندی</span>}
          >
            <FavoriteBorderIcon className="w-[30px]! h-[30px]! cursor-pointer border border-[#374151] rounded-full p-[6px]" />
          </Tooltip>

          <Tooltip
            placement="top"
            trigger={"hover"}
            overlay={<span className="text-white">مقایسه</span>}
          >
            <ImportExportIcon className="w-[30px]! h-[30px]! cursor-pointer border border-[#374151] rounded-full p-[6px]" />
          </Tooltip>
        </div>
        <div className="product-box__header-left relative">
          <span className="text-sm text-[#60a5fa] font-medium">
            {" "}
            {discount}% تخفیف
          </span>
          <div className="absolute left-[-1rem] top-[-.2rem] w-[4px] rounded-tr-xl rounded-br-xl h-[30px] bg-[#60a5fa]">

          </div>
        </div>
      </div>
      <div className="product-box__image overflow-hidden group">
        <Image
          width={2000}
          height={2000}
          src={image1}
          alt={brand}
          className="group-hover:opacity-0 group-hover:invisible group-hover:-z-10 transition-all relative z-50 inset-0 max-w-[240px] mx-auto"
        />
        <Image
          width={2000}
          height={2000}
          src={image2}
          alt={brand}
          className="group-hover:opacity-100 group-hover:visible group-hover:z-10 transition-all opacity-0 invisible absolute z-50 max-w-[240px] mx-auto top-[3rem] inset-0"
        />
      </div>
      <p className="product-box__brand line-clamp-2 text-ellipsis">{brand}</p>
      <div className="divider w-full h-[1px] bg-[#374151] my-2"></div>
      <div className="product-box__price-infos w-full mt-4 flex flex-row-reverse gap-x-2 items-center justify-start">
        <span className="bg-[#3b82f6] p-1 px-2 rounded-xl flex items-center justify-center text-[11px]">
          تومان
        </span>
        <span className="price-with__discount">
          {(price - Math.floor(price * (discount / 100))).toLocaleString()}
        </span>
        <span className="price_without__discount line-through line-clamp-1 text-[#9ca3af] text-sm font-medium">
          {price.toLocaleString()} تومان
        </span>
      </div>
    </Link>
  );
}

export default ProductBox;
