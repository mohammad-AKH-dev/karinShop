import Link from "next/link";
import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

interface buttonPropsType {
  href: string;
}

function Button(props: buttonPropsType) {
  const { href } = props;
  return (
    <Link href={href} className="button bg-primary-blue p-2 rounded-xl flex items-center gap-x-3 group">
      <span className="button-title">مشاهده همه</span>
      <div className="arrow-icon__wrapper bg-blue-500 rounded-full flex items-center justify-center p-1 group-hover:-translate-x-1 transition-all">
        <KeyboardBackspaceIcon />
      </div>
    </Link>
  );
}

export default Button;
