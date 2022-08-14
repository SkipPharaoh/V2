import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects'
import SideFooter from '../SideFooter/SideFooter';
import TechStack from '../TechStack/TechStack';

const Home: React.FC<{}> = () => {

  return (
    <div>
        <Header />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
        <SideFooter />
        <Footer />
    </div>
  )
}

export default Home