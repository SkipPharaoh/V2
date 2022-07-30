// import React from 'react';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Disc from './components/Disc';

const App: React.FC<{}> = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/disc.pdf' element={<Disc />} />
      </Routes>
    </div>
  );
}

export default App;
