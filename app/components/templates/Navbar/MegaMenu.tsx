"use client";

import { categoryType } from "@/app/types";
import Link from "next/link";
import React, { forwardRef, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

type MegaMenuPropsType = {
  selectedTab: categoryType[];
  categories: categoryType[];
  onClose: () => void;
};

const MegaMenu = forwardRef(
  (props: MegaMenuPropsType, ref: React.Ref<HTMLDivElement>) => {
    const { onClose, categories, selectedTab } = props;
    const [activeTab, setActiveTab] = useState<categoryType>(selectedTab[0]);

    const setActiveMenu = (category: categoryType) => {
      setActiveTab(category);
    };

    return (
      <div
        className="mega-menu w-[850px] h-[384px] top-[4rem] -right-[5rem] xl:right-0 bg-gray-800 absolute visible opacity-0  rounded-xl p-4 transition-all flex duration-400 gap-x-6"
        onMouseLeave={() => {
          onClose();
          setActiveTab(selectedTab[0]);
        }}
        ref={ref}
      >
        <div className="mega-menu__right w-[30%] h-full ">
          <ul className="mega-menu__right-list w-full h-full flex items-start p-4 rounded-xl bg-primary-dark flex-col gap-y-2">
            {categories.map((category) => (
              <li
                key={category.name}
                onMouseEnter={() => setActiveMenu(category)}
                className={`mega-menu__list-item w-full transition-all hover:bg-primary-blue p-2 rounded-md ${
                  category.name === activeTab.name && "bg-primary-blue"
                }`}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="mega-menu__left w-[70%] h-full">
          {!activeTab.accessories &&
          !activeTab.brands &&
          !activeTab.prices &&
          !activeTab.titles ? (
            <div className="flex items-center justify-center w-full h-full">
              <span>موردی یافت نشد</span>
            </div>
          ) : (
            <Link href={"/shop"} className="text-blue-400 p-4 text-sm">
              مشاهده همه
              <ChevronLeftIcon />
            </Link>
          )}
          <div className="mega-menu__left-paths grid grid-cols-3 mt-4">
            {/* brands */}
            {activeTab.brands && (
              <div className="active-tab__brands px-4">
               
                  <h5 className="active-tab__brands-title font-semibold whitespace-nowrap">
                    {activeTab?.titles?.length && activeTab.titles[0]}
                  </h5>
                
                {activeTab.brands?.length && (
                  <ul className="active-tab__brands-list mt-4 flex items-start flex-col gap-y-3">
                    {activeTab.brands?.map((brand,index) => (
                      <li key={index} className="brand-item text-[#9ca3af] whitespace-nowrap text-ellipsis line-clamp-1 max-w-[155px]">
                        {brand}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            {/* prices */}
            {activeTab.prices && (
              <div className="active-tab__prices px-4">
                
                  <h5 className="active-tab__prices-title font-semibold whitespace-nowrap">
                    {activeTab.titles?.length && activeTab.titles[1]}
                  </h5>
                
                {activeTab.prices?.length && (
                  <ul className="active-tab__prices-list mt-4 flex items-start flex-col gap-y-3">
                    {activeTab.prices?.map((price,index) => (
                      <li key={index} className="price-item text-[#9ca3af] whitespace-nowrap text-ellipsis line-clamp-1 max-w-[155px]">
                        {price}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            {/* accessories */}
            {activeTab.accessories && (
              <div className="active-tab__accessories px-4">
                <h5 className="active-tab__accessories-title font-semibold whitespace-nowrap">
                  {activeTab.titles?.length && activeTab?.titles[2]}
                </h5>

                {activeTab.accessories?.length && (
                  <ul className="active-tab__accessories-list mt-4 flex items-start flex-col gap-y-3">
                    {activeTab.accessories?.map((accessory,index) => (
                      <li key={index} className="accessory-item text-[#9ca3af] whitespace-nowrap text-ellipsis line-clamp-1 max-w-[155px]">
                        {accessory}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default MegaMenu;
