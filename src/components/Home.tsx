import React from 'react';
import About from './About';
import Footer from './Footer';
import Projects from './Projects'

const Home: React.FC<{}> = () => {

  return (
    <div>
        <About />
        <Projects />
        <Footer />
    </div>
  )
}

export default Home