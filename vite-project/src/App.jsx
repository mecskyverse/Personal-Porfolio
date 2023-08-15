import { useState } from 'react'
import './App.scss'
import { About, Footer, Header, Skills, Work, Testimonial } from './container/index'
import { Navbar } from './components/index'
function App() {

  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />

    </div>
  )
}

export default App
