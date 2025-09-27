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
  const pathName = usePathname();
  const [isOpen, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setTheme, currentTheme } = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const touchRef = useRef<HTMLDivElement | null>(null);

  const clickHandler = (link: string) => {
    if (pathName !== link) {
      setTimeout(() => {
        setOpen(false);
      }, 100);
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
      window.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        window.removeEventListener("mousedown", handleClickOutside);
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
      } font-medium duration-500 bg-opacity-90 transition-all linear z-40 dark:text-white w-[85%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[65%] 2xl:w-[60%] max-w-7xl mx-auto bg-white dark:bg-[#353535] drop-shadow-xs backdrop-blur-sm top-4 sticky rounded-2xl`}
    >
      <div className="flex items-center justify-between py-3 px-4 md:px-6 lg:px-8">
        <div className="flex-shrink-0 select-none cursor-pointer flex items-center text-gray-800 order-1">
          <Link href={"/"} onClick={() => setOpen(false)}>
            <Image
              src={SkipDesign}
              alt="Image of the name Skip"
              className="h-[35px] md:h-[40px] lg:h-[45px] w-auto object-contain"
              priority
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
