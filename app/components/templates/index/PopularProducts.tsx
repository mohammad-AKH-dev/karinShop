"use client";

import React, { useState } from "react";
import SectionTitle from "../../modules/SectionTitle/SectionTitle";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import PopularProductBox from "./PopularProductBox";
import { popularCategoriesType } from "@/app/types";

function PopularProducts() {
  const [popularCategories, setPopuarCategories] =
    useState<popularCategoriesType>([
      {
        id: crypto.randomUUID(),
        title: "آرایشی بهداشتی",
        img: "/images/populars/arayeshi.png",
      },
      {
        id: crypto.randomUUID(),
        title: "کالای دیجیتال",
        img: "/images/populars/digital.png",
      },
      {
        id: crypto.randomUUID(),
        title: "گیفت کارت",
        img: "/images/populars/gift.png",
      },
      {
        id: crypto.randomUUID(),
        title: "خانه و آشپزخانه",
        img: "/images/populars/home.png",
      },
      {
        id: crypto.randomUUID(),
        title: "لوازم تحریر",
        img: "/images/populars/lavazem-tahrir.png",
      },
      {
        id: crypto.randomUUID(),
        title: "موبایل",
        img: "/images/populars/mobile.png",
      },
      {
        id: crypto.randomUUID(),
        title: "ابزارآلات",
        img: "/images/populars/workshop.png",
      },
    ]);

  return (
    <section className="popular-products__section">
      <div className="popular-products__content">
        <SectionTitle
          icon={<BorderAllIcon />}
          href="/shop"
          title="دسته بندی های"
          blueTitle="محبوب"
          subtitle="جدیدترین و بروزترین دسته بندی ها"
        />
        <ul className="popular-products__list flex flex-wrap gap-y-12 gap-x-3 items-center justify-evenly mt-20">
          {popularCategories.map((category) => (
            <PopularProductBox key={category.id} {...category} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PopularProducts;
