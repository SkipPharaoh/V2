// import headshot from '../../assets/headshot.png'

const About: React.FC<{}> = () => {
  return (
    <div className="About">
      <div>
        <h3>Hi, my name is</h3>
        <h1>Caniggia Thompson.</h1>
        <h2>I solve problems & build things on the internet.</h2>
        <p>
          A software engineer with a passion and tenacity for problem-solving.
          Currently, I'm solving interesting problems & building amazing
          products at{" "}
          <a href="https://offerup.com/">
            <b>OfferUP</b>
          </a>
          .
        </p>
        {/* <img src={headshot} alt="Handsome Fellow"/> */}
      </div>
      <div>
        <h1>About Me</h1>

        {/* About Me Section */}
        <p>
          Hello, most of my friends call me Skip & I have a passion for
          problem-solving, which feeds my creativity. My interest for software
          development started when I came across Google's courses available on
          Coursera. That led me to take a course available on Coursera by MIT
          called 'Python For Everyone.' Fast-forward to today, and I've had the
          privilege of building and exploring some of the many tools available
          to software developers.
        </p>
        <p>
          I enjoy building projects in TypeScript on the internet. I'm currently diving deep into TypeScript & starting to contribute to Open-Source Projects. My goal is to create my own Open-Source project that will benefit many users.
        </p>
        <p>
          I am currently focusing on building amazing digital experiences at{" "}
          <a href="https://offerup.com/">
            <b>OfferUP</b>
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
