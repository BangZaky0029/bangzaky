// ============================================
// MAIN APP COMPONENT (WITH PRICING & ORDER VIEWS)
// Path: src/App.jsx
// ============================================

import React, { useState, useEffect } from 'react'

// Import Components
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import PortfolioSection from './components/PortfolioSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import PricingPage from './components/PricingPage'
import OrderPage from './components/OrderPage'

// Import Styles
import './styles/index.css'
import { initScrollEffects } from './utils/scrollEffects'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [activeView, setActiveView] = useState('home')
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [paymentMethod, setPaymentMethod] = useState('BCA')

  useEffect(() => { initScrollEffects() }, [])

  useEffect(() => {
    if (activeView !== 'home') return
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeView])

  const scrollToSection = (sectionId) => {
    setActiveView('home')
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="app">
      <Navigation
        activeSection={activeSection}
        activeView={activeView}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setActiveView={setActiveView}
      />

      {activeView === 'home' ? (
        <>
          <HeroSection scrollToSection={scrollToSection} />
          <AboutSection />
          <ServicesSection />
          <PortfolioSection />
          <ContactSection />
        </>
      ) : activeView === 'price' ? (
        <PricingPage
          onOrder={(pkg) => {
            setSelectedPackage(pkg)
            setActiveView('pesanan')
          }}
        />
      ) : (
        <OrderPage
          selectedPackage={selectedPackage}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          onBack={() => setActiveView('price')}
        />
      )}

      <Footer />
    </div>
  )
}

export default App
