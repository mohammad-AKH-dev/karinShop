import Image from "next/image";
import { useEffect, useState } from "react";
import {Database} from './appwrite'
import {dataBaseId} from './utils/utils'
import HeaderSlider from "./components/templates/index/HeaderSlider";
import PopularProducts from "./components/templates/index/PopularProducts";
import AmazingOffers from "./components/templates/index/AmazingOffers";
import LatestProducts from "./components/templates/index/LatestProducts";
import Campagins from "./components/templates/index/Campagins";
import BestSellingProducts from "./components/templates/index/BestSellingProducts";
import PopularBrands from "./components/templates/index/PopularBrands";
import HottestProducts from "./components/templates/index/HottestProducts";
import PopularBlogs from "./components/templates/index/PopularBlogs";



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
