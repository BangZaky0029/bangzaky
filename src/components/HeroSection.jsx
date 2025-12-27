// ============================================
// HERO SECTION COMPONENT
// Path: src/components/HeroSection.jsx
// ============================================

import React, { useEffect, useState } from 'react'
import { ArrowRight, Code, Layout, Zap } from 'lucide-react'
import myLogo from '../assets/mylogo-02.png'

const HeroSection = ({ scrollToSection }) => {
  const [years, setYears] = useState(0)
  const [projects, setProjects] = useState(0)
  const [satisfaction, setSatisfaction] = useState(0)

  useEffect(() => {
    const duration = 3000
    const start = performance.now()
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setYears(Math.floor(progress * 5))
      setProjects(Math.floor(progress * 50))
      setSatisfaction(Math.floor(progress * 100))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [])

  return (
    <section id="home" className="hero-section reveal">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for Projects
          </div>
          
          <h1 className="hero-title">
            BangZaky
            <span className="title-accent">Web Developer</span>
          </h1>
          
          <p className="hero-subtitle">
            Transforming ideas into powerful digital experiences. I build modern, 
            responsive websites that drive business growth and deliver measurable results.
          </p>

          <div className="hero-cta reveal-stagger">
            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
              Hire Me
              <ArrowRight size={20} />
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('portfolio')}>
              View Portfolio
            </button>
          </div>

          <div className="hero-stats reveal-stagger">
            <div className="stat-item">
              <div className="stat-number">{years}+ </div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{projects}+ </div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{satisfaction}% </div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal-stagger">
          <div className="visual-card card-1">
            <Code size={32} />
            <span>Clean Code</span>
          </div>
          <div className="visual-card card-2">
            <img src={myLogo} alt="Logo" className='logo-img-2'/>
          </div>
          <div className="visual-card card-3">
            <Zap size={32} />
            <span>Fast Performance</span>
          </div>
          <div className="visual-card card-4">
            <Layout size={32} />
            <span>Modern UI</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
