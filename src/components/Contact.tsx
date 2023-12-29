import Image from "next/image";
import { forwardRef } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { TfiLinkedin, TfiTwitterAlt } from "react-icons/tfi";
import ChatBubble from "../../public/assets/icons/chat-bubble.svg";

interface ContactProps {}

const Contact = forwardRef<HTMLDivElement, ContactProps>(
  ({ ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className="h-max xl:px-12 lg:h-[22rem] p-6 sm:p-8 md:px-10 pt-32 md:pt-40 lg:pt-10 bg-gradient-to-tr dark:from-[#f6ebeb20] dark:to-[#fff8ec20] from-[#f6ebeb90] to-[#fff8ec60] flex flex-col lg:flex-row mx-auto rounded-3xl shadow-md drop-shadow-2xl backdrop-blur-xl items-center justify-center lg:justify-between "
      >
        <div className="order-2 sm:w-[75%] lg:w-[80%] lg:basis-[60%] flex flex-col space-y-6 cirGradient bg-clip-text">
          <h2 className="tracking-normal animate-text bg-gradient-to-r from-[#800080] via-[#FF0000] to-[#800080] dark:bg-gradient-to-r dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl font-bold font-deca selection:text-gray-700 dark:selection:text-white/90 ">
            Get in touch{" "}
          </h2>
          <p className="text-sm md:text-md font-normal lg:text-lg xl:text-xl ">
            If you have any questions or would like to discuss potential
            opportunities, please don&apos;t hesitate to reach out to me using
            the links below.
          </p>
          <div className="grid grid-cols-3 text-[0.7rem] md:text-[0.85rem] lg:text-base gap-2 md:gap-3 lg:gap-4">
            <a
              href="https://twitter.com/SKIP_Pharaoh"
              target="_blank"
              className=" flex align-middle items-center font-jak font-bold space-x-1 w-max "
            >
              <TfiTwitterAlt className="text-[#518FC7] dark:text-[#f87171] h-3 w-3 md:h-4 md:w-4 " />
              <h5 className="text-transparent text-[#518FC7] dark:text-[#f87171]">
                Twitter
              </h5>
            </a>
            <a
              href="https://linkedin.com/in/skippharaoh"
              target="_blank"
              rel="noopener noreferrer"
              className=" flex align-middle items-center font-jak font-bold space-x-1 w-max "
            >
              <TfiLinkedin className="text-[#0077B5] dark:text-[#f87171] h-3 w-3 md:h-4 md:w-4" />
              <h5 className="text-transparent text-[#0077B5] dark:text-[#f87171]">
                LinkedIn
              </h5>
            </a>
            <a
              href="mailto:caniggiathompson@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" flex align-middle items-center font-jak font-bold space-x-1 w-max "
            >
              <MdOutlineAlternateEmail className="text-[#3B82F6] dark:text-[#f87171] h-3 w-3 md:h-4 md:w-4 " />
              <h5 className="text-transparent text-[#3B82F6] dark:text-[#f87171]">
                E-mail
              </h5>
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2 absolute -rotate-[15deg] lg:rotate-0 lg:flex top-6 right-4 md:top-10 md:right-12 lg:basis-[40%]">
          <Image
            src={ChatBubble}
            alt="contact"
            width={750}
            height={650}
            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
            loading="lazy"
            className=" select-none backdrop-shadow-xl h-24 w-24 md:h-40 md:w-44 lg:w-[15rem] lg:h-[16rem] xl:w-[16rem] xl:h-[18rem] "
          />
        </div>
      </div>
    );
  }
);

Contact.displayName = "Contact";

export default Contact;
