import Image from "next/image";
import Link from "next/link";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DateRangeIcon from '@mui/icons-material/DateRange';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Models } from "appwrite";

interface BlogBoxPropsType {
  image: string;
  title: string;
  views: number;
  date: string;
} 

function BlogBox(props: BlogBoxPropsType | Models.DefaultDocument) {
  const { image, title , date , views} = props;

  return (
    <div className="blog-box">
      <div className="blog-box__image-wrapper relative w-full">
        <Image width={2000} height={2000} src={image} alt={title} />
        <div className="absolute top-0 right-0 left-0 w-full h-full ">
          <Link href={"/"}>
            ادامه مطلب
            <ChevronLeftIcon />
          </Link>
        </div>
      </div>
      <p className="blog-box__title">{title}</p>
      <span className="divider block w-full h-[1px] bg-[rgba(255,255,255,0.1)]"></span>
      <div className="blog-box__infos">
        <div className="blog-box__realese">
          <DateRangeIcon/>
          <span className="date">{date}</span>
        </div>
        <div className="blog-box__views">
          <span className="views">{views}</span>
          <VisibilityIcon/>
        </div>
      </div>
    </div>
  );
}

export default BlogBox;
