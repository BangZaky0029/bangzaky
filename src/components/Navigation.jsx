// ============================================
// NAVIGATION COMPONENT
// Path: src/components/Navigation.jsx
// ============================================

import React from 'react'
import { Menu, X } from 'lucide-react'
import myLogo from '../assets/mylogo-02.png'

const Navigation = ({ activeSection, activeView, scrollToSection, isMenuOpen, setIsMenuOpen, setActiveView }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'myPortfolio' },
    { id: 'contact', label: 'Contact' },
    { id: 'price', label: 'Price' }
  ]

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo" onClick={() => { setActiveView('home'); scrollToSection('home') }}>
          <div className="logo-inner">
            <img src={myLogo} alt="Logo" className="logo-img" />
            <span className="logo-text">BangZaky</span>
          </div>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-link ${
                item.id === 'price'
                  ? (activeView === 'price' ? 'active' : '')
                  : (activeSection === item.id ? 'active' : '')
              }`}
              onClick={() => {
                if (item.id === 'price') {
                  setActiveView('price')
                  setIsMenuOpen(false)
                } else {
                  scrollToSection(item.id)
                }
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
