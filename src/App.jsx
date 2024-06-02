import React from 'react'
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Skills from './Components/skills/Skills';
import Project from './Components/project/Project';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';

const App = () => {
  return (
      <div>
        <Header/>
        <Home/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
        <Footer/>
      </div>
  )
}

export default App

