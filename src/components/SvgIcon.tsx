import React, { SVGProps, forwardRef } from "react";
import { iconPaths } from "../../public/IconPaths";
import { encodedPNGPaths } from "../../public/EncodedPNGPaths";

export type IconType = keyof typeof iconPaths | keyof typeof encodedPNGPaths;
interface SvgIconProps extends SVGProps<SVGSVGElement> {
  // Add additional props specific to your SVG component
  icon: IconType;
}

const SvgIcon = forwardRef<SVGSVGElement, SvgIconProps>(
  ({ icon, ...props }, ref) => {
    const iconPath: string =
      (iconPaths as Record<string, string>)[icon] ||
      (encodedPNGPaths as Record<string, string>)[icon];

    return (
      <svg ref={ref} {...props}>
        <g dangerouslySetInnerHTML={{ __html: iconPath }} />
      </svg>
    );
  }
);

SvgIcon.displayName = "SvgIcon";

export default SvgIcon;
