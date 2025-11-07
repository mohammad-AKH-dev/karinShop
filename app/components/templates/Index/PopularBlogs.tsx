"use client";

import React from "react";
import NavigationSectionTitle from "../../modules/NavigationSectionTitle/NavigationSectionTitle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Database } from "@/app/appwrite";
import { dataBaseId } from "@/app/utils/utils";
import { useQuery } from "@tanstack/react-query";
import BlogBox from "../../modules/BlogBox";

function PopularBlogs() {
  const getBlogs = async () => {
    const res = await Database.listDocuments({
      databaseId: dataBaseId,
      collectionId: "blogs",
    });
    const blogs = res.documents;

    return blogs;
  };

  const { data, isPending, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });
  return (
    <section className="popular-blogs__section">
      <div className="popular-blogs__content">
        <NavigationSectionTitle
          title="محبوب ترین"
          blueTitle="مقالات"
          href="/shop"
          subtitle="جدیدترین و بروزترین مقالات"
          icon={<CheckCircleIcon />}
        />
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper mt-16 overflow-x-clip! overflow-visible!"
          slidesPerView={1}
          breakpoints={{
            530: {
              slidesPerView: 1.5
            },
            640: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 2.5
            },
            960: {
              slidesPerView: 3
            }, 
            1100: {
              slidesPerView: 4
            }
          }}
          spaceBetween={30}
        >
          {data?.map((blog) => (
            <SwiperSlide key={blog.$id}>
              <BlogBox {...blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default PopularBlogs;
