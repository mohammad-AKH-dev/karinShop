import React from "react";
import Button from "../Button";

interface SectionTitlePropsType {
  icon: any
  title: string;
  blueTitle: string;
  subtitle: string;
  href: string;
}

function SectionTitle(props: SectionTitlePropsType) {
  const { icon, title, blueTitle , subtitle} = props;
  return (
    <div className="section-title flex flex-col gap-y-6 sm:flex-row items-center justify-between mt-24">
      <div className="secion-title__right flex items-center gap-x-4">
        <div className="icon-wrapper w-[48px] h-[48px] bg-[#1f2937] flex items-center justify-center rounded-xl">{icon}</div>
        <div className="section-title__wrapper text-[1.5rem] font-Morabba ">
          <h4 className="section-title">
            {title}
            <span className="section-blue__title text-primary-blue"> {blueTitle}</span>
          </h4>
          <p className="section-sub__title text-sm tracking-widest font-medium line-clamp-1">{subtitle}</p>
        </div>
      </div>
      <div className="section-title__left flex items-center justify-center">
        <Button href="/shop"/>
      </div>
    </div>
  );
}

export default SectionTitle;
