import { useState } from 'react'
import './App.css'
import useLenis from './hooks/useLenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';

function App() {
  const [count, setCount] = useState(0)
  useLenis();
  return (
    <>
      <Navbar/>
      <Hero/>
      <Gallery/>
    </>
  )
}

export default App
