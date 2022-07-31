import React from 'react';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import Projects from './Projects'
import TechStack from './TechStack';

const Home: React.FC<{}> = () => {

  return (
    <div>
        <Header />
        <About />
        <TechStack />
        <Projects />
        <Footer />
    </div>
  )
}

export default Home