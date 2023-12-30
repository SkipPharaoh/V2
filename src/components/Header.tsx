"use client";

import useDarkMode from "@/hooks/useDarkMode";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MutableRefObject,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

interface Link {
  name: string;
  link: string;
}

interface HeaderProps {}

const Header = forwardRef<HTMLDivElement, HeaderProps>(({ ...props }, ref) => {
  const { setTheme, currentTheme } = useDarkMode();
  const pathName = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  let [open, setOpen] = useState(false);
  const touchRef = useRef<HTMLDivElement | null>(null);

  let Links: Link[] = [
    { name: "work", link: "/work" },
    { name: "about", link: "/about" },
    { name: "tech", link: "/tech" },
  ];

  const clickHandler = (link: string) => {
    if (pathName !== link) {
      setTimeout(() => {
        setOpen(false);
      }, 700);
    }
  };

  const useOutsideAlerter = (ref: MutableRefObject<HTMLDivElement | null>) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideAlerter(touchRef);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    setMounted(true);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  const setRefs = (node: HTMLDivElement | null) => {
    if (node) {
      // Set the ref for the nav element
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }

      // Set the ref for the div containing navigation content
      touchRef.current = node;
    }
  };

  return (
    <nav
      ref={setRefs}
      {...props}
      className={`${
        isScrolled && "bg-opacity-[0.7] shadow-md drop-shadow-lg "
      } font-medium duration-500 bg-opacity-90 transition-all linear z-40 dark:text-white w-[75%] sm:w-[75%] md:w-[70%] lg:w-[55%] xl:w-[50%] max-w-6xl mx-auto  bg-white dark:bg-[#353535] drop-shadow-xs backdrop-blur-sm top-4 sticky rounded-2xl `}
    >
      <div className="flex justify-between md:space-x-10 lg:space-x-12 xl:space-x-16 md:flex items-center place-items-center md:justify-center py-3 md:px-10 px-8">
        <div className="select-none order-2 md:order-1 cursor-pointer flex items-center text-gray-800">
          <Link href={"/"} className="">
            {/* TODO: Render an actual image of my name (Skip or Caniggia) */}
            {/* {currentTheme === "dark" ? (
              <Image src={pranjal_header_white} alt="header" width="100" />
            ) : (
              <Image src={pranjal_header_black} alt="header" width="100" />
            )} */}
            <h1 className="text-black dark:text-white duration-300 ease-in hover:text-red-500 dark:hover:text-blue-500">
              Caniggia
            </h1>
          </Link>
        </div>
        {currentTheme === "dark" ? (
          <button
            onClick={() => {
              setTheme("light");
            }}
            className="w-max md:order-8 fill-red-500 "
          >
            <MdLightMode className="w-5 h-5 lg:w-6 lg:h-6 fill-white hover:fill-blue-400 duration-300 ease-in" />{" "}
          </button>
        ) : (
          <button
            onClick={() => {
              setTheme("dark");
            }}
            className="w-max md:order-8 fill-blue-400"
          >
            <MdDarkMode className="w-5 h-5 lg:w-6 lg:h-6 fill-black hover:fill-red-500 duration-300 ease-in" />{" "}
          </button>
        )}

        <div
          onClick={() => setOpen(!open)}
          className="group transition-all duration-500 ease-in order-3 text-lg flex flex-col space-y-[0.2rem]  cursor-pointer items-center font-semibold md:hidden"
        >
          <div
            className={` ${
              open && "rotate-45 translate-y-[5px] "
            } relative rounded-xl origin-center transition-all duration-300 ease-in w-4 h-[0.1125rem] dark:bg-white/70 dark:text-white/70 fill-black text-black bg-black group-hover:bg-red-500 dark:group-hover:bg-blue-500`}
          ></div>
          <div
            className={` ${
              open && "opacity-0 translate-x-20"
            } relative rounded-xl origin-center transition-all duration-500 ease-in-out w-4 h-[0.1rem] dark:bg-white/70 dark:text-white/70 fill-black text-black bg-black group-hover:bg-red-500 dark:group-hover:bg-blue-500`}
          ></div>
          <div
            className={` ${
              open && "-rotate-45 -translate-y-[5px]"
            } relative rounded-xl origin-center transition-all duration-300 ease-in w-4 h-[0.1125rem] dark:bg-white/70 dark:text-white/70 fill-black text-black bg-black group-hover:bg-red-500 dark:group-hover:bg-blue-500`}
          ></div>
        </div>
        <ul
          className={` rounded-3xl md:rounded-none dark:bg-[#353535] bg-white  py-4 md:py-0 md:bg-inherit font-semibold order-4 md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-light-blue md:bg-none md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 lg:transition-none transition-all duration-500 ease-in ${
            open ? "top-[3.5rem]" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-base lg:text-lg md:my-0 my-7"
            >
              <Link
                href={link.link}
                onClick={() => clickHandler(`${link.name}`)}
                className={`${
                  pathName === link.link
                    ? " text-red-500 font-semibold "
                    : " text-gray-700 dark:text-white "
                } hover:text-red-500 dark:hover:text-blue-500 duration-500`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li
            key={4}
            className="md:ml-8  text-base xl:text-[1.1rem] font-regular md:my-0 my-7"
          >
            <a
              href="/Caniggia_Thompson_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-gray-800 dark:text-white hover:text-red-500 dark:hover:text-blue-500 duration-500"
            >
              resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
});

Header.displayName = "Header";

export default Header;
