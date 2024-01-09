import { forwardRef } from "react";
import SvgIcon from "./SvgIcon";

interface PageSignatureProps {}

const PageSignature = forwardRef<HTMLDivElement, PageSignatureProps>(
  ({ ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className="flex mx-auto justify-center mt-16 select-none"
      >
        <span className="font-black font-app text-2xl md:text-3xl align-text-bottom tracking-wider mx-3 md:mx-6">
          Peace &amp; Blessings
        </span>
        <SvgIcon
          icon="love-gesture"
          width={30}
          viewBox="0 0 512 512"
          name="Love Gesture SVG Vector Icon"
          attributeName="Love Gesture SVG Vector Icon"
          className="-mt-4 filter dark:invert invert-0 dark:sepia-100 sepia-100 saturate-2500 hue-rotate-0 brightness-100 contrast-100"
        />
      </div>
    );
  }
);

PageSignature.displayName = "PageSignature";

export default PageSignature;
