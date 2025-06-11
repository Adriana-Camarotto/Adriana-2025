import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import CardsSection from './components/CardSection'
import VideoTextSection from './components/VideoTextSection'
import { LogoCarousel } from './components/carousels/LogoCarousel'
import { Business } from './components/business/Business'
import { ExpertStats } from './components/ExpertStats'
import { ContactSection } from './components/ContactSection'
import { TestimonialsCarousel } from './components/carousels/TestimonialsCarousel'


function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Header />
      <Hero />
      <CardsSection />
      <LogoCarousel />
      <VideoTextSection />
      <TestimonialsCarousel />
      <Business />
      <ExpertStats />
      <ContactSection />
    </div>
  )
}

export default App
