import Image from "next/image";
import { useEffect, useState } from "react";
import {Database} from './appwrite'
import {dataBaseId} from './utils/utils'
import HeaderSlider from "./components/templates/Index/HeaderSlider";
import PopularProducts from "./components/templates/Index/PopularProducts";
import AmazingOffers from "./components/templates/Index/AmazingOffers";
import LatestProducts from "./components/templates/Index/LatestProducts";
import Campagins from "./components/templates/Index/Campagins";
import BestSellingProducts from "./components/templates/Index/BestSellingProducts";
import PopularBrands from "./components/templates/Index/PopularBrands";
import HottestProducts from "./components/templates/Index/HottestProducts";
import PopularBlogs from "./components/templates/Index/PopularBlogs";


export default function Home() {

  return (
    <div className="main-page px-[5.5rem] xl:px-[4.2rem]">
       <HeaderSlider/>
       <PopularProducts/>
       <AmazingOffers/>
       <LatestProducts/>
       <Campagins/>
       <BestSellingProducts/>
       <PopularBrands/>
       <HottestProducts/>
       <PopularBlogs/>
    </div>
  );
}
