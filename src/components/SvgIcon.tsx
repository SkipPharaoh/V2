import React, { SVGProps, forwardRef } from "react";
import { iconPaths } from "../../public/IconPaths";

interface SvgIconProps extends SVGProps<SVGSVGElement> {
  // Add additional props specific to your SVG component
  icon: keyof typeof iconPaths;
}

const SvgIcon = forwardRef<SVGSVGElement, SvgIconProps>(
  ({ icon, ...props }, ref) => {
    const iconPath: string = iconPaths[icon];

    return (
      <svg ref={ref} {...props}>
        <g dangerouslySetInnerHTML={{ __html: iconPath }} />
      </svg>
    );
  }
);

SvgIcon.displayName = "SvgIcon";

export default SvgIcon;
