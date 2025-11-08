"use client";

import React, { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";
import Image from "next/image";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface footerIconsType {
  id: number;
  name: string;
  icon: React.JSX.Element;
}

function Footer() {
  const [socials, setSocials] = useState<footerIconsType[]>([
    {
      id: 1,
      name: "instagram",
      icon: <InstagramIcon className="text-sm text-blue-500" />,
    },
    {
      id: 2,
      name: "whatsapp",
      icon: <WhatsAppIcon className="text-sm text-blue-500" />,
    },
    {
      id: 3,
      name: "linkedIn",
      icon: <LinkedInIcon className="text-sm  text-blue-500" />,
    },
    {
      id: 4,
      name: "Youtube",
      icon: <YouTubeIcon className="text-sm text-blue-500" />,
    },
  ]);
  return (
    <footer
      className="footer mt-16 container bg-gray-900
     dark:bg-gray-800 mx-auto rounded-2xl px-8 p-6"
    >
      <div
        className=" w-full flex items-start justify-between 
    flex-col gap-x-7 lg:gap-x-10 gap-y-10 lg:flex-row flex-nowrap lg:flex-wrap  text-white rounded-2xl "
      >
        <div className="footer-box flex flex-col gap-y-5">
          <h3 className="footer-box__title font-Morabba text-[1.25rem]">
            درباره کارین شاپ
          </h3>
          <p className="footer-box__paragraph text-gray-400 leading-8 lg:max-w-[360px]">
            در فروشگاه آنلاین ما، بهترین مدل‌های موبایل و لپ‌تاپ از برندهای
            معتبر جهانی را با کیفیت بالا و قیمتی مناسب برای شما فراهم آورده‌ایم.
            با انتخاب محصولات ما، تجربه‌ای حرفه‌ای و لذت‌بخش از فناوری را در
            خانه یا محل کار داشته باشید.
          </p>
          <div className="socials flex items-center justify-start gap-x-4">
            {socials.map((social) => (
              <div
                className="social bg-gray-950 cursor-pointer w-[40px] h-[40px] rounded-xl flex items-center justify-center"
                key={social.id}
              >
                {social.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-box">
          <h3 className="footer-box__title font-Morabba text-[1.25rem]">
            دسترسی سریع
          </h3>
          <ul className="footer-box__list mt-5 flex flex-col gap-y-2">
            <li className="footer-box__list-item">
              <Link
                href={"/"}
                className="footer-link text-gray-400 transition-all hover:text-primary-blue"
              >
                صفحه اصلی
              </Link>
            </li>
            <li className="footer-box__list-item">
              <Link
                href={"/shop"}
                className="footer-link text-gray-400 transition-all hover:text-primary-blue"
              >
                فروشگاه
              </Link>
            </li>
            <li className="footer-box__list-item">
              <Link
                href={"/contact-us"}
                className="footer-link text-gray-400 transition-all hover:text-primary-blue"
              >
                تماس با ما
              </Link>
            </li>
            <li className="footer-box__list-item">
              <Link
                href={"/FAQ"}
                className="footer-link text-gray-400 transition-all hover:text-primary-blue"
              >
                سوالات متداول
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-box w-full lg:w-fit">
          <h3 className="footer-box__title font-Morabba text-[1.25rem]">
            تماس با ما
          </h3>
          <ul className="footer-box__list mt-5 flex flex-col gap-y-6 text-gray-400">
            <li className="footer-box__list-item flex items-center justify-between">
              <span>شماره تماس:</span>
              <span dir="ltr">012-345 678</span>
            </li>
            <li className="footer-box__list-item flex items-center justify-between gap-x-6">
              <span>آدرس ایمیل :</span>
              <span>KarinShop@gmail.com</span>
            </li>
            <li className="footer-box__list-item flex items-center justify-between gap-x-6">
              <span>آدرس :</span>
              <span>بلوار آزادی، استاد معین پلاک ۱۰</span>
            </li>
          </ul>
        </div>
        <div className="footer-box">
          <div className="footer-box__images flex items-center gap-x-3">
            <div className="w-[80px] h-[80px] bg-gray-950 flex items-center justify-center rounded-xl">
              <Image
                width={2000}
                height={2000}
                className="w-[64px] h-[64px]"
                src={"/images/footer/footer-1.webp"}
                alt="footer-1"
              />
            </div>
            <div className="w-[80px] h-[80px] bg-gray-950 flex items-center justify-center rounded-xl">
              <Image
                width={2000}
                height={2000}
                className="w-[64px] h-[64px]"
                src={"/images/footer/footer-2.webp"}
                alt="footer-2"
              />
            </div>
          </div>
          <div
            className="scroll-top__btn ring-2 ring-gray-400 text-gray-300 w-32 
        rounded-lg text-sm flex items-center gap-x-2 py-1.5 px-2 mt-10 max-lg:mx-auto lg:mr-auto"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <span>بازگشت به بالا</span>
            <ExpandLessIcon />
          </div>
        </div>
      </div>
      <div className="events-section container w-full rounded-xl bg-gray-950 dark:bg-gray-900 flex flex-col md:flex-row gap-y-4 items-center justify-between p-4 md:p-6 mt-6">
        <h3 className="logo text-3xl leading-10 font-Morabba">
          <span className="dark:text-secondary-blue text-primary-blue">
            کارین
          </span>
          <span> شاپ </span>
        </h3>
        <div className="bg-gray-900 dark:bg-gray-800 p-1.5 rounded-xl max-w-72 lg:w-[350px] flex items-center justify-between">
          <input
            type="text"
            className="bg-transparent text-gray-200 px-2 w-full border-none outline-none"
            placeholder="از جدیدترین تخفیف ها با خبر شوید"
          />
          <button className="px-4 py-1 bg-blue-500 rounded-xl font-DanaMedium">
            ثبت
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
