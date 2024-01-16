import { SetStateAction } from "react";

interface MobileMenuIconProps {
  isOpen: boolean;
  setOpen: (value: SetStateAction<boolean>) => void;
}

const MobileMenuIcon = ({ isOpen, setOpen }: MobileMenuIconProps) => {
  const lineStyle = [
    "rotate-45 translate-y-[5px]",
    "opacity-0 translate-x-20",
    "-rotate-45 -translate-y-[5px]",
  ];

  return (
    <div
      onClick={() => setOpen(!isOpen)}
      className="group transition-all duration-500 ease-in order-3 text-lg flex flex-col space-y-[0.2rem]  cursor-pointer items-center font-semibold md:hidden"
    >
      {lineStyle.map((line, id) => (
        <div
          key={id}
          className={`${isOpen && line} ${
            id === 1
              ? "duration-500 ease-in-out h-[0.1rem]"
              : "duration-300 ease-in h-[0.1125rem]"
          } relative rounded-xl origin-center transition-all w-4 dark:bg-white/70 dark:text-white/70 fill-black text-black bg-black group-hover:bg-red-500 dark:group-hover:bg-blue-500`}
        ></div>
      ))}
    </div>
  );
};

export default MobileMenuIcon;
