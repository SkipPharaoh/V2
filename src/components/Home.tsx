import React from 'react';
import About from './About';
import Experience from './Experience';
import Footer from './Footer';
import Header from './Header';
import Projects from './Projects'
import SideFooter from './SideFooter';
import TechStack from './TechStack';

const Home: React.FC<{}> = () => {

  return (
    <div>
        <Header />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <SideFooter />
        <Footer />
    </div>
  )
}

export default Home