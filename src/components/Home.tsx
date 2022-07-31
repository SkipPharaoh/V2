import React from 'react';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import Projects from './Projects'

const Home: React.FC<{}> = () => {

  return (
    <div>
        <Header />
        <About />
        <Projects />
        <Footer />
    </div>
  )
}

export default Home