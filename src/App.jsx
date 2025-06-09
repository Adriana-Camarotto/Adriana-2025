import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import CardsSection from './components/CardSection'
import VideoTextSection from './components/VideoTextSection'
import { LogoCarousel } from './components/Carousels/LogoCarousel'
import { TestimonialCarousel } from './components/Carousels/TestimonialsCarousel'
import { Business } from './components/business/Business'


function App() {


  return (
    <div className="font-sans antialiased text-gray-900">
      <Header />
      <Hero />
      <CardsSection />
      <LogoCarousel />
      <VideoTextSection />
      <TestimonialCarousel />
      <Business />     
    </div>
  )
}

export default App
