import { Fragment } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

interface DarkModeToggleProps {
  currentTheme: string | undefined;
  setTheme: (theme: string) => void;
}

const DarkModeToggle = ({ currentTheme, setTheme }: DarkModeToggleProps) => {
  const isDark = currentTheme === "dark";

  return (
    <Fragment>
      <button
        onClick={() => {
          setTheme(isDark ? "light" : "dark");
        }}
        className={`${
          isDark ? "fill-red-500" : "fill-blue-400"
        } w-max md:order-8`}
      >
        {isDark ? (
          <MdLightMode className="w-5 h-5 lg:w-6 lg:h-6 fill-white hover:fill-blue-400 duration-300 ease-in" />
        ) : (
          <MdDarkMode className="w-5 h-5 lg:w-6 lg:h-6 fill-black hover:fill-red-500 duration-300 ease-in" />
        )}
      </button>
    </Fragment>
  );
};

export default DarkModeToggle;
