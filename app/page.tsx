import Image from "next/image";
import { useEffect, useState } from "react";
import {Database} from './appwrite'
import {dataBaseId} from './utils/utils'
import HeaderSlider from "./components/templates/index/HeaderSlider";

export default function Home() {

  return (
    <div className="main-page px-[5.5rem] xl:px-[4.2rem]">
       <HeaderSlider/>
    </div>
  );
}
