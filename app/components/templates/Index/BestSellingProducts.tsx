'use client'

import React, { useEffect } from "react";
import { Database } from "@/app/appwrite";
import { dataBaseId } from "@/app/utils/utils";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { Models } from "appwrite";
import { useQuery } from "@tanstack/react-query";
import NavigationSectionTitle from "../../modules/NavigationSectionTitle/NavigationSectionTitle";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductBox from "../../modules/ProductBox";

function BestSellingProducts() {
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
    console.log("latest products", data);
  }, [data]);
  return (
    <section className="best-selling__products-section">
      <div className="best-selling__products-content">
        <NavigationSectionTitle
          title="محصولات"
          blueTitle="پر فروش"
          href="/shop"
          subtitle="جدیدترین و بروزترین محصولات"
          icon={<PhoneAndroidIcon />}
        />
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper p-4! px-0! mt-12"
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            360: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.5,
            },
            800: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {data?.length ? (
            <>
              {" "}
              {data?.map((product) => (
                <SwiperSlide>
                  <ProductBox {...product} key={product.$id} />
                </SwiperSlide>
              ))}
            </>
          ) : (
            <span>Loading...</span>
          )}
        </Swiper>
      </div>
    </section>
  );
}

export default BestSellingProducts;
