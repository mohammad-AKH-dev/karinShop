import React from "react";
import Button from "../Button";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface SectionTitlePropsType {
  icon: any;
  title: string;
  blueTitle: string;
  subtitle: string;
  href: string;
}

function NavigationSectionTitle(props: SectionTitlePropsType) {
  const { icon, title, blueTitle, subtitle } = props;
  return (
    <div className="navigation-section-title flex flex-col gap-y-6 sm:flex-row items-center justify-between mt-24">
      <div className="navigation-secion-title__right flex items-center gap-x-4">
        <div className="icon-wrapper w-[48px] h-[48px] bg-[#1f2937] flex items-center justify-center rounded-xl">
          {icon}
        </div>
        <div className="navigation-section-title__wrapper text-[1.5rem] font-Morabba sm:line-clamp-1 md:line-clamp-none">
          <h4 className="navigation-section-title">
            {title}
            <span className="navigation-section-blue__title text-primary-blue">
              {" "}
              {blueTitle}
            </span>
          </h4>
          <p className="navigation-section-sub__title text-sm tracking-widest font-medium sm:line-clamp-1 md:line-clamp-none">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="navigation-section-title__left flex items-center gap-x-3 justify-center">
         <div className="navigation-wrapper flex items-center gap-x-2">
            <div className="chevron-right p-2 bg-[rgb(31,41,55)] rounded-lg flex items-center justify-center cursor-pointer">
              <ChevronRightIcon/>
            </div>
            <div className="chevron-left p-2 bg-[rgb(31,41,55)] rounded-lg flex items-center justify-center cursor-pointer">
              <ChevronLeftIcon/>
            </div>
         </div>
        <Button href="/shop" />
      </div>
    </div>
  );
}

export default NavigationSectionTitle;
