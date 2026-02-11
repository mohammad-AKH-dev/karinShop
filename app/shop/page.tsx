import React from "react";
import BreadCrumbs from "../components/modules/BreadCrumbs";
import { BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import Link from "next/link";
import FilteringSection from "../components/modules/shop/FilteringSection";
import ShopItems from "../components/templates/shop/ShopItems";

function page() {
  return (
    <div className="shop-page mx-auto px-12 py-6">
      <BreadCrumbs>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/shop">فروشگاه</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadCrumbs>
      <section className="shop-page__section mt-6 px-4">
        <div className="shop-page__right-section flex gap-x-5 w-full">
          {/* filtering */}
          <FilteringSection/>
          {/* products */}
          <ShopItems/>
        </div>
      </section>
    </div>
  );
}

export default page;
