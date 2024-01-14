import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";

type EmptyStateType = "empty" | "error" | "loading";

interface EmptyStateProps {
  type: EmptyStateType;
  text?: string;
  buttonText?: string;
  link?: string;
  buttonStyle?: string;
  textStyle?: string;
  iconStyle?: string;
}

const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      type,
      text,
      buttonText,
      link,
      buttonStyle,
      textStyle,
      iconStyle,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        {...props}
        className={"flex flex-col justify-center items-center"}
        style={{ minHeight: "64vh" }}
      >
        <div className="text-center align-middle">
          <div className={iconStyle}>
            <Image
              src={
                "https://github.com/skippharaoh/NoirTech/blob/main/public/Images/404_Not_found.png?raw=true"
              }
              alt={`${type.toUpperCase()} State Icon`}
              height={240}
              width={240}
            />
          </div>
          <>
            <p
              className={
                `${textStyle}` +
                " mt-8 font-normal lg:font-bold text-sm md:text-base"
              }
            >
              {text}
            </p>
            <Link href={link ?? "/"}>
              <button
                className={
                  buttonStyle ??
                  "border-2 solid py-2 px-4 mt-6 font-normal lg:font-bold space-x-2 text-sm md:text-base border-blue-800 hover:bg-blue-800 hover:text-white hover:drop-shadow-2xl text-blue-800 rounded-md md:rounded-xl md:px-5 md:py-3 shadow-md drop-shadow-lg dark:bg-blue-800 dark:hover:bg-white dark:hover:text-black dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-600"
                }
              >
                {buttonText}
              </button>
            </Link>
          </>
        </div>
      </div>
    );
  }
);

EmptyState.displayName = "EmptyState";

export default EmptyState;
