import headshot from '../assets/headshot.png'

const About: React.FC<{}> = () => {
  return (
    <div className="About">

        <div>
            <div>
                <h3>Hi, my name is</h3>
                <h1>Caniggia Thompson.</h1>
                <h2>
                    I solve problems & build things on the internet.
                </h2>
                <p>
                    A software engineer with a passion and tenacity for problem-solving. Currently, I'm solving interesting problems & building amazing products at <a href="https://offerup.com/"><b>OfferUP</b></a>.
                </p>
            </div>
            <img src={headshot} alt="Handsome Fellow"/>
        </div>
        <div>
            <div>
                <h1>About Me</h1>

                {/* About Me Section */}
                <p>Hello, most of my friends call me Skip and I'm a recent graduate of General Assembly's full-time software engineering immersive Bootcamp. I have a passion and tenacity for problem-solving, which feeds my creativity.</p>
                <p>My interest for software developing started when I came across Google's courses available on Coursera. That led me to take a course available on Coursera by MIT called 'Python For Everyone.' Fast-forward to today, and I've had the privilege of building and exploring some of the many tools available to software developers.</p>
                <p>I am curious and motivated to learn as much as I can to strengthen my problem-solving skills, which will result in becoming a better developer.</p>
            </div>
        </div>

    </div>
  )
}

export default About