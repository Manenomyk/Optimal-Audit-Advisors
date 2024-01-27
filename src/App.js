import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Pages/Homepage/Homepage';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} ></Route>
          <Route exact path='/about' element={<About />} ></Route>
          <Route exact path='/services' element={<Services />}></Route> 
        </Routes>
      </Router>

  );
}

export default App;
