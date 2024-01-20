import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Loadpage from './Components/Loadpage';
import Details from './Components/Details';
import Newsletter from './Components/Newsletter';

function App() {
  return (
    <div>
      <Navbar />
      <Loadpage />
      <Details />
      <Newsletter />
    </div>
  );
}

export default App;
