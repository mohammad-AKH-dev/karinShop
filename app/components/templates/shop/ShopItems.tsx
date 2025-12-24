"use client";

import React, { useState } from "react";
import SortIcon from "@mui/icons-material/Sort";

type categoryType = {
  id: number;
  name: string;
};

function ShopItems() {
  const [categories, setCategories] = useState<categoryType[]>([
    {
      id: 1,
      name: "محبوب ترین",
    },
    {
      id: 2,
      name: "پرفروش ترین",
    },
    {
      id: 3,
      name: "ارزان ترین",
    },
    {
      id: 4,
      name: "گران ترین",
    },
  ]);
  const [activeCategory, setActiveCategory] = useState({
    id: 1,
    name: "محبوب ترین",
  });
  return (
    <div className="shop-items w-full">
        {/* دسته بندی */}
      <section className="sorting-section w-full flex items-center justify-between">
        <div className="sorting-right__section text-gray-400 flex gap-x-6">
          <div className="flex gap-x-2">
            <SortIcon />
            <span className="font-semibold">مرتب سازی :</span>
          </div>
          <ul className="categories-list flex items-center gap-x-6">
            {categories.map((category) =>
              category.name === activeCategory.name ? (
                <li
                  key={category.id}
                  className="category-item cursor-pointer text-blue-500"
                >
                  {category.name}
                </li>
              ) : (
                <li
                  key={category.id}
                  className="category-item cursor-pointer transition-all duration-150 hover:text-blue-500"
                  onClick={() => setActiveCategory(category)}
                >
                  {category.name}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="sorting-left__section text-gray-400 flex items-center gap-x-2 text-sm translate-y-1 ">
           <span className="product-count">13,040</span>
           <span>کالا</span>
        </div>
      </section>
      {/* محصولات */}
      <section className="products-section">
         
      </section>
    </div>
  );
}

export default ShopItems;
