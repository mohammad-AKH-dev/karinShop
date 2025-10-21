import React from "react";
import SectionTitle from "../../modules/SectionTitle/SectionTitle";
import BorderAllIcon from "@mui/icons-material/BorderAll";

function PopularProducts() {
  return (
    <section className="popular-products__section">
      <div className="popular-products__content">
        <SectionTitle
          icon={<BorderAllIcon/>}
          href="/shop"
          title="دسته بندی های"
          blueTitle="محبوب"
          subtitle="جدیدترین و بروزترین دسته بندی ها"
        />
      </div>
    </section>
  );
}

export default PopularProducts;
