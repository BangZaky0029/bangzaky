// ============================================
// ABOUT SECTION COMPONENT
// Path: src/components/AboutSection.jsx
// ============================================

import React from 'react'
import { CheckCircle } from 'lucide-react'

const AboutSection = () => {
  const expertise = [
    'React & Modern JavaScript',
    'Responsive Web Design',
    'UI/UX Implementation',
    'Performance Optimization',
    'SEO Best Practices',
    'API Integration'
  ]

  return (
    <section id="about" className="about-section reveal">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Building digital solutions that matter</p>
        </div>

        <div className="about-content reveal-stagger">
          <div className="about-text">
            <p className="about-paragraph">
              I'm a passionate web developer specializing in creating exceptional digital 
              experiences. With over 5 years of experience in the industry, I've helped 
              businesses of all sizes establish their online presence and achieve their goals.
            </p>
            <p className="about-paragraph">
              My approach combines technical excellence with creative problem-solving. 
              I believe that great websites are not just about code, they're about understanding 
              your business needs and delivering solutions that drive real results.
            </p>

            <div className="values-grid">
              <div className="value-item">
                <CheckCircle size={24} className="value-icon" />
                <div>
                  <h4>Quality First</h4>
                  <p>Every line of code is crafted with attention to detail and best practices</p>
                </div>
              </div>
              <div className="value-item">
                <CheckCircle size={24} className="value-icon" />
                <div>
                  <h4>Client Focused</h4>
                  <p>Your success is my priority, delivering solutions that exceed expectations</p>
                </div>
              </div>
              <div className="value-item">
                <CheckCircle size={24} className="value-icon" />
                <div>
                  <h4>Modern Tech</h4>
                  <p>Using the latest technologies to build fast, secure, and scalable websites</p>
                </div>
              </div>
            </div>
          </div>

          <div className="expertise-card">
            <h3>Core Expertise</h3>
            <div className="expertise-list">
              {expertise.map((skill, index) => (
                <div key={index} className="expertise-item">
                  <div className="expertise-dot"></div>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
