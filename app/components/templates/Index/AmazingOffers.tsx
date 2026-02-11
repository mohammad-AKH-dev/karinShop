"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { Database } from "@/app/appwrite";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { dataBaseId } from "@/app/utils/utils";
import { Models } from "appwrite";
import { useQuery } from "@tanstack/react-query";
import OfferBox from "../../modules/OfferBox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ProductsLoading from "../../modules/loaders/ProductsLoading";

function AmazingOffers() {
  const getProducts = async () => {
    const res = await Database.listDocuments({
      databaseId: dataBaseId,
      collectionId: "products",
    });

    const products: Models.DefaultDocument[] = res.documents;

    return products;
  };
  const { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <section className="amazing-offers__section rounded-3xl bg-primary-blue mt-20">
      <div className="amazing-offers__content">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper p-4! h-[328px]"
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={
            {
              360: {
                slidesPerView: 1
              },
              640: {
                slidesPerView: 2
              },
              780: {
                slidesPerView: 3
              },
              1024: {
                slidesPerView: 4
              },
              1280: {
                slidesPerView: 5.5
              },
             

            }
          }
        >
          {data?.length ? (
            <>
              <SwiperSlide>
                <div className="amaxing-offer__timer-box sm:max-w-[14rem] translate-y-6 p-4 flex flex-col gap-y-4 items-center justify-center">
                  <Image
                    width={1000}
                    height={1000}
                    src={"/images/Amazings.svg"}
                    alt="amazings"
                    className="w-28 h-28"
                  />
                  {/* timer */}
                  <div className="timer-wrapper flex items-center gap-x-2">
                    <div className="hour order-5 w-[30px] font-extrabold h-[30px] bg-white rounded-lg text-[#374151] p-1 flex items-center justify-center">
                      02
                    </div>
                    <span className="order-4">:</span>
                    <div className="minute order-3 w-[30px] font-extrabold h-[30px] bg-white rounded-lg text-[#374151] p-1 flex items-center justify-center">
                      43
                    </div>
                    <span className="order-2">:</span>
                    <div className="second order-1 w-[30px] font-extrabold h-[30px] bg-white rounded-lg text-[#374151] p-1 flex items-center justify-center">
                      39
                    </div>
                  </div>
                  <Link href={"/shop"}>
                    <span>مشاهده همه</span>
                    <ChevronLeftIcon />
                  </Link>
                </div>
              </SwiperSlide>
              {data?.map((product) => (
                <SwiperSlide>
                  <OfferBox {...product} key={product.$id} />
                </SwiperSlide>
              ))}
              <SwiperSlide>
                <div className="w-[14rem] sm:max-w-[14rem] h-[18.5rem] bg-[rgb(31,41,55)] p-4 rounded-xl flex items-center justify-center">
                  <Link
                    href={"/shop"}
                    className="flex items-center justify-center flex-col gap-y-2"
                  >
                    <div className="border-3 border-primary-blue rounded-full w-[35px] h-[35px] flex items-center justify-center">
                      <ArrowBackIcon className="text-primary-blue" />
                    </div>
                    <span className="text-primary-blue">مشاهده همه</span>
                  </Link>
                </div>
              </SwiperSlide>
            </>
          ) : (
            <ProductsLoading/>
          )}
        </Swiper>
      </div>
    </section>
  );
}

export default AmazingOffers;
