"use client";

import { useState } from "react";

const InteractiveFooterText = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
      className="relative transition-all ease-in-out duration-1000   "
    >
      <p
        className={` ${
          isHovering && "scale-150 blur-[6px]"
        } group font-bold animate-text duration-700 transition-all linear  group-hover:bg-white lg:text-gray-700 lg:dark:text-white/40 lg:group-hover:text-transparent bg-gradient-to-r mb-2 from-[#800080] via-[#FF0000] to-[#800080] dark:bg-gradient-to-r dark:from-white dark:via-[#FF0000] dark:to-white bg-clip-text text-transparent text-sm sm:text-base md:text-lg`}
      >
        Caniggia &quot;Skip&quot; Thompson
      </p>
      {isHovering && (
        <p
          className={`opacity-0 bg-purple-100 px-1 md:px-2 py-1 rounded-2xl bg-opacity-30 backdrop-blur-xl hover:opacity-100 transition-all duration-1000 linear absolute top-[35%] left-[50%] -translate-x-[50%]  -translate-y-[50%] w-max text-gray-800 dark:text-white font-bold text-base z-10 `}
        >
          Enjoying this? ⭐ my Github Repo
        </p>
      )}
    </div>
  );
};

export default InteractiveFooterText;
