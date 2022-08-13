import React from "react";
// import Logo from '../assets/logo.png';

const Header: React.FC<{}> = () => {
  return (
    <nav>
      <div>
        <a href="/">
          <img
            src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png"
            alt="Keep"
          />
        </a>
      </div>
      <div>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
      </div>
      <div>
        <a
          href={require("../../assets/docs/Resume.pdf")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Header;
