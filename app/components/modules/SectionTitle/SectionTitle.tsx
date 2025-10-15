import React from "react";
import Button from "../Button";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

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
    <div className="section-title flex items-center justify-center">
      <div className="secion-title__right">
        <div className="icon-wrapper">{icon}</div>
        <div className="section-title__wrapper">
          <h4 className="section-title">
            {title}
            <span className="section-blue__title">{blueTitle}</span>
          </h4>
          <p className="section-sub__title">{subtitle}</p>
        </div>
      </div>
      <div className="section-title__left">
        <Button href="/shop"/>
      </div>
    </div>
  );
}

export default SectionTitle;
