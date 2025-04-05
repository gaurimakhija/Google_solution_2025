import { useState } from 'react';
import './App.css';
import useLenis from './hooks/useLenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import LandingCanvas from './components/LandingCanvas';

function App() {
  const [count, setCount] = useState(0);
  useLenis();

  return (
    <>
      <Hero/>
      <Navbar/>
      <Gallery/>
    </>
  );
}

export default App;
