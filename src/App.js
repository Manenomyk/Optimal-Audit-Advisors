import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Loadpage from './Components/Loadpage';
import Details from './Components/Details';

function App() {
  return (
    <div>
      <Navbar />
      <Loadpage />
      <Details />
    </div>
  );
}

export default App;
