import { largeSVGPaths } from "@public/LargeSVGPaths";
import { SVGProps, forwardRef } from "react";
import { encodedPNGPaths } from "../../public/EncodedPNGPaths";

export type LargeIconType =
  | keyof typeof largeSVGPaths
  | keyof typeof encodedPNGPaths;

interface LargeSvgIconProps extends SVGProps<SVGSVGElement> {
  // Add additional props specific to your SVG component
  icon: LargeIconType;
}

const LargeSvgIcon = forwardRef<SVGSVGElement, LargeSvgIconProps>(
  ({ icon, ...props }, ref) => {
    const iconPath: string =
      (largeSVGPaths as Record<string, string>)[icon] ||
      (encodedPNGPaths as Record<string, string>)[icon];

    return (
      <svg ref={ref} {...props}>
        <g dangerouslySetInnerHTML={{ __html: iconPath }} />
      </svg>
    );
  }
);

LargeSvgIcon.displayName = "LargeSvgIcon";

export default LargeSvgIcon;
