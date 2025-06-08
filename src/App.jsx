import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import CardsSection from './components/CardSection'
import { LogoCarousel } from './components/Carousel/LogoCarousel'

function App() {


  return (
    <div className="font-sans antialiased text-gray-900">
      <Header />
      <Hero />
      <CardsSection />
       <LogoCarousel />
    </div>
  )
}

export default App
