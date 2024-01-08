import LoveGesture from "@public/assets/icons/love-gesture.svg";
import Image from "next/image";
import { forwardRef } from "react";

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
        <Image
          src={LoveGesture}
          alt="love"
          width="30"
          className="-mt-4 filter dark:invert invert-0 dark:sepia sepia-100 saturate-2500 hue-rotate-0 brightness-100 contrast-100"
        />
      </div>
    );
  }
);

PageSignature.displayName = "PageSignature";

export default PageSignature;
