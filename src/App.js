
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { Home } from 'lucide-react';

function App() {
   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <Routes>
       
        <Route  path="/"
          element={
            <>
              <Navbar/>
              <Hero />
              <About/>
              <Projects/>
              <Skills/>
              <Contact/>
            </>
          } />
          {/* <Route  path="/about"
          element={
            <>
             <Navbar/>
              <About  />
              <Projects/>

            </>
          } />
          <Route  path="/contact"
          element={
            <>
              <Navbar/>
              <Contact  />
            </>
          } />
          <Route  path="/projects"
          element={
            <>
              <Navbar/>
              <Projects  />
              <Skills/>
            </>
          } />

          <Route  path="/skills"
          element={
            <>
              <Navbar/>
              <Skills  />
              <Contact/>
            </>
          } /> */}
      </Routes>

    </Router>
    // <div className="App">
    //   <Navbar />
    //   <Hero />
    //   <About />
    //   <Projects />
    //   <Skills />
    //   <Contact />
    // </div>
  );
}

export default App;