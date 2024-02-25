"use client";

import useDarkMode from "@/hooks/useDarkMode";
import SkipDesign from "@public/assets/images/NameDesign.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MutableRefObject,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import DarkModeToggle from "./DarkModeToggle";
import MobileMenuIcon from "./MobileMenuIcon";
import NavLinks from "./NavLinks";

interface NavBarProps {}

const NavBar = forwardRef<HTMLDivElement, NavBarProps>(({ ...props }, ref) => {
  const { setTheme, currentTheme } = useDarkMode();
  const pathName = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  let [isOpen, setOpen] = useState(false);
  const touchRef = useRef<HTMLDivElement | null>(null);

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
            <Image
              src={SkipDesign}
              alt="Image of the name Skip"
              height={"50"}
            />
          </Link>
        </div>

        <DarkModeToggle currentTheme={currentTheme} setTheme={setTheme} />

        <MobileMenuIcon isOpen={isOpen} setOpen={setOpen} />

        <NavLinks
          isOpen={isOpen}
          pathName={pathName}
          clickHandler={clickHandler}
        />
      </div>
    </nav>
  );
});

NavBar.displayName = "NavBar";

export default NavBar;
