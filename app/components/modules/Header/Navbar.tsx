"use client";

import { Models } from "appwrite";
import React, { useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";
import MegaMenu from "../../templates/Navbar/MegaMenu";
import { pageType, } from "@/app/types";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import SearchIcon from "@mui/icons-material/Search";
import SearchModal from "../../templates/Navbar/SearchModal";




function Navbar({paths}: {paths: Models.DefaultDocument[]}) {

  const megaMenuRef = useRef<HTMLDivElement>(null);
  const searchModalRef = useRef<HTMLDivElement>(null);

  const showMegaMenu = () => {
    if (megaMenuRef.current) {
      megaMenuRef.current.className =
        "mega-menu w-[850px] h-[384px] top-[3rem] -right-[5rem] xl:right-0 bg-gray-800 duration-400 backdrop-blur-2xl absolute visible opacity-100 z-10 rounded-xl p-4 transition-all flex  gap-x-6";
    }
  };

  const hideMegaMenu = () => {
    if (megaMenuRef.current) {
      megaMenuRef.current.className =
        "mega-menu w-[850px] h-[384px] top-[4rem] -right-[5rem] xl:right-0 bg-gray-800 duration-400 absolute invisible opacity-0 -z-10 rounded-xl p-4 transition-all flex  gap-x-6";
    }
  };

  const showSearchModal = () => {
    if (searchModalRef.current) {
      searchModalRef.current.classList.remove("-top-[50rem]");
      searchModalRef.current.classList.add("top-0");
    }
  };

  const hideSearchModal = () => {
    if (searchModalRef.current) {
      searchModalRef.current.classList.remove("top-0");
      searchModalRef.current.classList.add("-top-[50rem]");
    }
  };

  return (
    <nav className="navbar-section">
      <div
        className="navbar-content lg:container mx-auto 
       flex justify-between items-center py-3 px-[1rem]
       lg:pt-6 md:px-[.5rem] xl:px-[6rem]"
      >
        {/* navbar menu */}
        <div
          className="navbar-content__-section
         paths-list bg-gray-800 w-full hidden lg:flex items-center justify-between rounded-full p-4 px-8"
        >
          {/* right-section */}
          <ul className="flex items-center justify-start gap-x-10">
            {
              paths.length && paths?.map((path: any) => (
                <li key={path.$id} className="path-item transition-all">
                  {path.href &&
                  !path.categories.length &&
                  !path.pages.length ? (
                    <Link className="path-link" href={path.href}>
                      {path.title}
                    </Link>
                  ) : path.title === "دسته بندی ها" ? (
                    <span
                      className="path-span flex items-center gap-x-1 relative cursor-pointer"
                      onMouseEnter={showMegaMenu}
                      onMouseLeave={hideMegaMenu}
                    >
                      {path.title}
                      <KeyboardArrowDownIcon />
                      <MegaMenu
                        selectedTab={JSON.parse(path.categories)}
                        categories={JSON.parse(path.categories)}
                        onClose={hideMegaMenu}
                        ref={megaMenuRef}
                      />
                    </span>
                  ) : (
                    <span className="path-span flex items-center gap-x-1 relative cursor-pointer group transition-all">
                      {path.title}
                      <KeyboardArrowDownIcon className="transition-all group-hover:rotate-180 duration-200" />
                      <ul
                        className="pages-list absolute bg-gray-800 w-[192px] flex invisible opacity-0 -z-[10] group-hover:opacity-100
                    group-hover:visible group-hover:z-10 flex-col gap-y-2 p-2 top-[5rem] duration-300 transition-all group-hover:top-[3rem] rounded-xl"
                      >
                        {/* pages */}
                        {path?.pages?.length &&
                          JSON.parse(path.pages).map((page: pageType) =>
                            page.path ? (
                              <li
                                key={page.name}
                                className="page-item w-full  hover:bg-primary-blue transition-all rounded-xl"
                              >
                                <Link
                                  className="transition-all p-2 duration-200 hover:-translate-x-3 w-full h-full block"
                                  href={page.path}
                                >
                                  {page.name}
                                </Link>
                              </li>
                            ) : (
                              <li
                                key={page.name}
                                className="page-item w-full group/inner flex relative items-center justify-between hover:bg-primary-blue transition-all rounded-xl"
                              >
                                <span className="transition-all p-2 duration-200 hover:-translate-x-3 w-full h-full block">
                                  {page.name}
                                </span>
                                <ChevronLeftIcon />
                                {page.subPages.length && (
                                  <ul
                                    className="solid-menu w-[176px] absolute flex flex-col gap-y-2 p-2 group-hover:-top-[3rem]
                                top-0 transition-all invisible opacity-0 group-hover/inner:visible group-hover/inner:opacity-100 -z-10 group-hover/inner:z-10
                                 duration-500 -left-[12.5rem] bg-gray-800 rounded-xl"
                                  >
                                    {page.subPages.map((subpage) => (
                                      <li
                                        key={subpage.name}
                                        className="subpage-item w-full hover:bg-primary-blue transition-all rounded-xl"
                                      >
                                        <Link
                                          href={subpage.path}
                                          className="subpage-link w-full h-full block p-2 transition-all duration-200 hover:-translate-x-3 "
                                        >
                                          {subpage.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            )
                          )}
                      </ul>
                    </span>
                  )}
                </li>
              ))
            }
          </ul>
          {/* left-section */}
          <div className="navbar-content__left-section flex items-center gap-x-2">
            <LocationPinIcon />
            <span className="location-content">آدرس خود را انتخاب کنید</span>
          </div>
        </div>
        {/* search input */}
        <div
          onClick={showSearchModal}
          className="input-wrapper text-gray-400 w-full flex lg:hidden cursor-pointer items-center gap-x-3 rounded-full px-[1rem] bg-gray-800 p-2"
        >
          <SearchIcon className="w-[30px]! h-[30px]!" />
          <span className="flex items-center gap-x-1">
            جستجو در <h4 className="font-Morabba">کارین شاپ</h4>
          </span>
        </div>
      </div>
      <SearchModal ref={searchModalRef} close={hideSearchModal} />
    </nav>
  );
}

export default Navbar;
