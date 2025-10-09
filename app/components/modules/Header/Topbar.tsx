"use client";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SunnyIcon from "@mui/icons-material/Sunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
function Topbar() {

  return (
    <div className="topbar-section bg-gray-800 lg:bg-transparent w-full">
      <div className="topbar lg:container mx-auto  flex justify-between items-center py-3 px-[1rem] lg:pt-6 lg:px-[.5rem] xl:px-[6rem]">
        {/* right section */}
        <div className="topbar-right__section">
          <div className="search-input__wrapper hidden lg:flex flex-row-reverse bg-[#374151] p-[.4rem] w-84 rounded-full justify-end gap-x-[.5rem]">
            <input
              type="text"
              placeholder="جستجو در کارین..."
              className="placeholder:text-gray-400 border-none outline-none w-full"
            />
            <div className="search-btn__wrapper bg-primary-blue w-[46px] h-[38px] flex items-center justify-center rounded-full">
              <SearchIcon />
            </div>
          </div>
          <div className="menu-btn__wrapper cursor-pointer block lg:hidden border rounded-full border-[#374151] hover:bg-[#1f2937] transition-all p-2">
            <MenuIcon />
          </div>
        </div>
        {/* center section */}
        <div className="topbar-mid__section">
          <Link href={"/"} className="logo-link flex flex-col items-center">
            <h3 className="logo text-3xl lg:text-[2.25rem] leading-10 font-Morabba">
              <span className="dark:text-secondary-blue text-primary-blue">
                کارین
              </span>
              <span> شاپ </span>
            </h3>
            <p className="text-text-subtitle mx-auto hidden lg:block font-medium dark:text-gray-400">
              خرید موبایل و لپ تاپ
            </p>
          </Link>
        </div>
        {/* left section */}
        <div className="topbar-left__section flex items-center justify-center flex-row-reverse gap-x-[1rem]">
          <div className="basket-icon__wrapper cursor-pointer bg-primary-blue p-2 hidden lg:flex items-center justify-center relative rounded-full">
            <div
              className="basket-items__count bg-red-500 absolute w-[15px] h-[15px] flex
           justify-center text-[13px] top-[-.25rem] right-0 rounded-full text-text-dark"
            >
              2
              <div className="absolute bg-red-500 inset-0 animate-ping rounded-full w-[15px] h-[15px]"></div>
            </div>
            <LocalMallIcon />
          </div>
          <div className="theme-btn__wrapper cursor-pointer border rounded-full border-[#374151] hover:bg-[#1f2937] transition-all p-2">
            <SunnyIcon />
          </div>
          <div
            className="user-panel__btn border border-[#374151] hover:bg-[#1f2937] transition-all p-2 px-4
        cursor-pointer rounded-full gap-x-2 hidden lg:flex flex-row-reverse items-center justify-center"
          >
            <span>حساب کاربری</span>
            <PersonIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
