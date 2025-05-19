import Link from "next/link";

interface Link {
  name: string;
  link: string;
}

interface NavLinksProps {
  isOpen: boolean;
  pathName: string;
  clickHandler: (link: string) => void;
}

// TODO: Change the resume link to a page that has the job experience in timeline format with an option to view/download resume
const NavLinks = ({ isOpen, pathName, clickHandler }: NavLinksProps) => {
  const Links: Link[] = [
    { name: "Work", link: "/work" },
    { name: "About", link: "/about" },
    { name: "Tech", link: "/tech" },
    { name: "Resume", link: "/Caniggia_Thompson_Resume.pdf" },
    // { name: "Experience", link: "/experience" },
  ];

  const resumeStyle = "xl:text-[1.1rem] font-regular ";
  const linkStyle = "lg:text-lg";

  const isResume = (name: string) => {
    return name === "Resume";
  };

  return (
    <ul
      className={`rounded-3xl md:rounded-none dark:bg-[#353535] bg-white  py-4 md:py-0 md:bg-inherit font-semibold order-4 md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-light-blue md:bg-none md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 lg:transition-none transition-all duration-500 ease-in ${
        isOpen ? "top-[3.5rem]" : "top-[-490px]"
      }`}
    >
      {Links.map((link) => (
        <li
          key={link.name}
          className={`${isResume(link.name) ? resumeStyle : linkStyle}
            md:ml-8 text-base md:my-0 my-7`}
        >
          <Link
            href={link.link}
            target={isResume(link.name) ? "_blank" : "_self"}
            rel={isResume(link.name) ? "noreferrer" : undefined}
            onClick={
              isResume(link.name)
                ? undefined
                : () => clickHandler(`${link.name}`)
            }
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
    </ul>
  );
};

export default NavLinks;
