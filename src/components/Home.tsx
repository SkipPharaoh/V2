import React from 'react';
import About from './About';
import Projects from './Projects'

const Home: React.FC<{}> = () => {

  return (
    <div>
        <About />
        <Projects />
    </div>
  )
}

export default Home