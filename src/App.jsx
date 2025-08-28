import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Technologies from './components/Technologies'
import Education from './components/Education'


function App() {
  return (
    <>
    <Header/>
      <Body />
      <About />
      <Technologies />
      <Education />
      <Projects />
      <Contact />
      <Footer/>
      
    </>
  )
}

export default App