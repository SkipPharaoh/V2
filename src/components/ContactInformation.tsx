"use client";

import React, { forwardRef } from "react";

interface ContactInformationProps {}

const ContactInformation = forwardRef<HTMLDivElement, ContactInformationProps>(
  ({ ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        <p className="text-gray-400 select-none font-semibold mb-1 dark:text-white/30 ">
          Contact
        </p>

        <p className="">
          Although I might not be a widely known individual, I&apos;m easily
          reachable through my social media channels. <br />
          Feel free to reach out to me via{" "}
          <span className="text-red-700 font-bold">GMail</span> at{" "}
          <a
            onClick={() =>
              navigator.clipboard.writeText("caniggiathompson@gmail.com")
            }
            className=" underline underline-offset-4 decoration-2 decoration-red-400 group select-all font-semibold dark:hover:text-red-400 hover:text-red-700 cursor-pointer select "
            href="mailto:caniggiathompson@gmail.com"
          >
            {" "}
            caniggiathompson@gmail.com
          </a>{" "}
          or connect with me on{" "}
          <span className="text-blue-700 font-bold">LinkedIn</span> as{" "}
          <a
            href="https://www.linkedin.com/in/skippharaoh"
            className=" underline underline-offset-4 decoration-2 decoration-red-400 font-semibold dark:hover:text-red-400 hover:text-red-700 cursor-pointer select"
            rel="noopener noreferrer"
            target="blank"
          >
            {" "}
            Caniggia &quot;Skip&quot; Thompson
          </a>
          . Alternatively, you can drop me a direct message on{" "}
          <span className="text-orange-500 font-bold">TikTok</span> at{" "}
          <a
            href="https://www.tiktok.com/@skip_pharaoh"
            target="blank"
            rel="noopener noreferrer"
            className=" font-semibold underline underline-offset-4 decoration-2 decoration-red-400 dark:hover:text-red-400 hover:text-red-700 cursor-pointer select "
          >
            {" "}
            @skip_pharaoh
          </a>
          .{" "}
        </p>
      </div>
    );
  }
);

ContactInformation.displayName = "ContactInformation";

export default ContactInformation;
