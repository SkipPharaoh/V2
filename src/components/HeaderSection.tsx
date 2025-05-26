import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { forwardRef, Fragment, HTMLAttributes } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import SvgIcon, { IconType } from "./SvgIcon";

type RolesWithIcons = {
  role: string;
  icon: IconType;
  viewBox: string;
  altName: string;
};

type IconAttributes = Omit<RolesWithIcons, "role">;

type HomeStyleType = {
  avatar: StaticImageData;
  alt: string;
  name: string;
  handle: string;
  link: string;
  bio: string;
  city: string;
};

interface HeaderSectionProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  gradient?: string;
  centerItems?: boolean;
  showSvgRow?: boolean;
  avatarIcon?: IconAttributes;
  rolesWithIcons?: RolesWithIcons[];
  name?: string;
  nameIcon?: IconAttributes;
  homeStyle?: HomeStyleType;
}

// TODO: Call this component directly on the pages instead of a wrapper component... maybe??

const HeaderSection = forwardRef<HTMLDivElement, HeaderSectionProps>(
  (
    {
      title,
      subtitle,
      gradient,
      centerItems = true,
      showSvgRow = true,
      avatarIcon,
      rolesWithIcons,
      name,
      nameIcon,
      homeStyle,
      className = "",
      ...props
    },
    ref
  ) => {
    if (homeStyle) {
      const { avatar, alt, name, handle, link, bio, city } = homeStyle;

      const [prefix, suffix] = bio.split(city).map((str) => str.trim());

      return (
        <div ref={ref} {...props} className={`${className}`.trim()}>
          <div className="flex flex-row justify-start items-center mt-20">
            <Image src={avatar} alt={alt} width={100} height={100} />
            <div className="flex flex-col ml-4">
              <h2 className="flex sm:text-2xl md:text-2xl lg:text-2xl">
                <span className="font-semibold">{name}</span>
              </h2>
              <h3>
                <Link
                  href={link}
                  target="_blank"
                  className="dark:text-[#d6d4d4b4] text-[#717171bb] flex items-center"
                >
                  {handle}
                  <BsArrowUpRight className="stroke-1 h-3" />
                </Link>
              </h3>
            </div>
          </div>
          <div className="mt-6 sm:text-xl md:text-2xl lg:text-2xl">
            <p className="font-light sm:leading-6 md:leading-6 lg:leading-8">
              {prefix}{" "}
              <span className="font-medium select-none animate-text bg-gradient-to-br from-red-400 dark:from-red-400 via-[#fff4f4] dark:via-[#fff] dark:text-black text-border2 to-blue-400 dark:to-blue-400 rounded px-2 py-[0.05rem]">
                {city}
              </span>{" "}
              {suffix}
            </p>
          </div>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        {...props}
        className={`pt-24 flex flex-col ${
          centerItems ? "items-center" : ""
        } mx-auto ${className}`.trim()}
      >
        <h2
          className={`font-deca bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold ${gradient}`}
        >
          {title}
        </h2>

        {avatarIcon && (
          <div className="mx-auto transition-all duration-1000 ease-in-out -mt-8 dark:shadow-xs shadow-2xl dark:shadow-red-50/10 shadow-red-300">
            <SvgIcon
              icon={avatarIcon.icon}
              height={600}
              width={600}
              viewBox={avatarIcon.viewBox}
              name={avatarIcon.altName}
              attributeName={avatarIcon.altName}
              className="rounded-2xl select-none drop-shadow-md shadow-red-200 dark:shadow-orange-100/60 dark:drop-shadow-sm shadow-2xl h-28 w-28 md:h-32 md:w-32 lg:h-40 lg:w-40 border-white border-2"
            />
          </div>
        )}

        {subtitle && (
          <p className="mt-6 max-w-xl text-center md:w-[70%] mx-auto text-sm font-normal md:text-base lg:text-lg mb-2">
            {subtitle}
          </p>
        )}

        {showSvgRow && (
          <div className="select-none flex justify-center space-x-4 items-center mt-2 text-gray-400">
            <SvgIcon
              icon="arrow-forward"
              xmlns="http://www.w3.org/2000/svg"
              width="124"
              height="14"
              fill="currentColor"
              className="fill-gray-300 rotate-180"
            />
            <p>✦</p>
            <SvgIcon
              icon="arrow-reversed"
              xmlns="http://www.w3.org/2000/svg"
              width="124"
              height="14"
              fill="currentColor"
              className="fill-gray-300 rotate-0 scale-y-100"
            />
          </div>
        )}

        {name && (
          <div className="text-center mx-auto mt-8 z-20">
            <h3 className="mx-auto font-bold text-lg lg:text-xl xl:text-2xl">
              {name}
              {nameIcon && (
                <span className="inline-flex items-baseline">
                  <SvgIcon
                    icon={nameIcon.icon}
                    viewBox={nameIcon.viewBox}
                    name={nameIcon.altName}
                    attributeName={nameIcon.altName}
                    className="self-center w-8 h-8 mx-1"
                  />
                </span>
              )}
            </h3>

            {rolesWithIcons && (
              <p className="text-gray-400 font-deca font-normal text-xs sm:text-sm md:text-md lg:text-lg">
                {rolesWithIcons.map((info, id) => (
                  <Fragment key={info.role}>
                    {id !== 0 && " || "}
                    {info.role}{" "}
                    <span className="inline-flex items-baseline">
                      <SvgIcon
                        icon={info.icon}
                        viewBox={info.viewBox}
                        name={info.altName}
                        attributeName={info.altName}
                        className="self-center w-6 h-6 mx-1"
                      />
                    </span>{" "}
                  </Fragment>
                ))}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

HeaderSection.displayName = "HeaderSection";

export default HeaderSection;
