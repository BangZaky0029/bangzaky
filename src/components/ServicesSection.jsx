// ============================================
// SERVICES SECTION COMPONENT
// Path: src/components/ServicesSection.jsx
// ============================================

import React from 'react'
import { Globe, Layout, Code, Zap, CheckCircle } from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe size={32} />,
      title: 'Website Development',
      description: 'Custom-built websites tailored to your specific needs, from simple landing pages to complex web applications.',
      benefits: [
        'Responsive design across all devices',
        'SEO-optimized structure',
        'Fast loading times',
        'Easy content management'
      ]
    },
    {
      icon: <Layout size={32} />,
      title: 'Landing Page Development',
      description: 'High-converting landing pages designed to capture leads and drive your marketing campaigns to success.',
      benefits: [
        'Conversion-focused design',
        'A/B testing ready',
        'Mobile-first approach',
        'Analytics integration'
      ]
    },
    {
      icon: <Code size={32} />,
      title: 'Company Profile Website',
      description: "Professional corporate websites that establish credibility and showcase your brand's unique value proposition.",
      benefits: [
        'Professional brand image',
        'Multi-page architecture',
        'Content management system',
        'Social media integration'
      ]
    },
    {
      icon: <Zap size={32} />,
      title: 'Custom Web Solutions',
      description: 'Specialized web applications and custom features designed to solve your unique business challenges.',
      benefits: [
        'Scalable architecture',
        'Third-party integrations',
        'Custom functionality',
        'Ongoing support'
      ]
    }
  ]

  return (
    <section id="services" className="services-section reveal">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">Comprehensive web solutions for your business</p>
        </div>

        <div className="services-grid reveal-stagger">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-benefits">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx}>
                    <CheckCircle size={16} />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
