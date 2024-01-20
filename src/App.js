import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Loadpage from './Components/Loadpage';
import Details from './Components/Details';
import Newsletter from './Components/Newsletter';
import ServiceSection from './Components/ServiceSection';

function App() {
  return (
    <div>
      <Navbar />
      <Loadpage />
      <Details />
      <Newsletter />
      <ServiceSection />
    </div>
  );
}

export default App;
