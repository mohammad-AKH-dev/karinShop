import Image from "next/image";
import Link from "next/link";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DateRangeIcon from "@mui/icons-material/DateRange";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Models } from "appwrite";

interface BlogBoxPropsType {
  image: string;
  title: string;
  views: number;
  date: string;
}

function BlogBox(props: BlogBoxPropsType | Models.DefaultDocument) {
  const { image, title, date, views } = props;

  return (
    <div className="blog-box p-2 bg-[rgb(31,44,55)] max-w-[286px] group rounded-lg cursor-pointer hover:-translate-y-4 duration-300 transition-all">
      <div className="blog-box__image-wrapper relative w-full">
        <Image
          width={2000}
          height={2000}
          src={image}
          alt={title}
          className="rounded-tr-4xl object-cover rounded-bl-4xl rounded-tl-lg rounded-br-lg"
        />
        <div className="absolute top-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible
         right-0 left-0 w-full h-full rounded-tr-4xl rounded-bl-4xl 
        rounded-tl-lg rounded-br-lg group-hover:backdrop-brightness-50 transition-all flex items-center justify-center">
          <Link href={"/"} className="p-2 py-1 border-2 border-white rounded-lg">
            ادامه مطلب
            <ChevronLeftIcon />
          </Link>
        </div>
      </div>
      <p className="blog-box__title font-semibold my-4 text-[15px]">{title}</p>
      <span className="divider block w-full h-[1px] bg-[rgba(255,255,255,0.1)]"></span>
      <div className="blog-box__infos mt-2 mb-4 flex items-center justify-between text-sm">
        <div className="blog-box__realese text-blue-500 dark:text-sky-400 flex gap-x-1 items-center">
          <DateRangeIcon className="w-17px! text-[18px]!"/>
          <span className="date pt-[4px]">{date}</span>
        </div>
        <div className="blog-box__views flex gap-x-1 items-center">
          <span className="views pt-[4px]">{views}</span>
          <VisibilityIcon className="w-17px! text-[18px]!"/>
        </div>
      </div>
    </div>
  );
}

export default BlogBox;
