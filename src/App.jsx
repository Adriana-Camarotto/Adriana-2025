import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import CardsSection from './components/CardSection'

function App() {


  return (
    <div className="font-sans antialiased text-gray-900">
      <Header />
      <Hero />
      <CardsSection />
    </div>
  )
}

export default App
