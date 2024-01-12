import Link from "next/link";
import { forwardRef } from "react";
import SvgIcon, { IconType } from "./SvgIcon";

interface FooterIconProps {
  href: string;
  icon: IconType | string;
}

const FooterIcon = forwardRef<HTMLAnchorElement, FooterIconProps>(
  ({ href, icon, ...props }, ref) => {
    return (
      <Link
        href={href}
        target="blank"
        ref={ref}
        {...props}
        className=" dark:hover:text-blue-500 hover:text-red-500 font-semibold dark:text-white text-black"
      >
        <SvgIcon
          xmlns="http://www.w3.org/2000/svg"
          icon={icon as IconType}
          width={32}
          height={32}
          fill="currentColor"
          viewBox="0 0 256 256"
        />
      </Link>
    );
  }
);

FooterIcon.displayName = "FooterIcon";

export default FooterIcon;
