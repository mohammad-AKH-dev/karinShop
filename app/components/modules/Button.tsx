import Link from "next/link";
import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

interface buttonPropsType {
  href: string;
}

function Button(props: buttonPropsType) {
  const { href } = props;
  return (
    <Link href={href} className="button bg-primary-blue p-2 rounded-md">
      <span className="button-title">مشاهده همه</span>
      <div className="arrow-icon__wrapper">
        <KeyboardBackspaceIcon />
      </div>
    </Link>
  );
}

export default Button;
