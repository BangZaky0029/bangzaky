// ============================================
// CONTACT SECTION COMPONENT
// Path: src/components/ContactSection.jsx
// ============================================

import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Instagram, ArrowRight, FacebookIcon, TwitterIcon } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    const whatsappMessage = `Hi, I'm ${formData.name} (${formData.email}). ${formData.message}`;
    const whatsappUrl = `https://wa.me/6281995770190?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">Ready to start your next project?</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p className="contact-text">
              Have a project in mind? Let's discuss how I can help bring your vision to life. 
              I'm always excited to take on new challenges and create something amazing together.
            </p>

            <div className="contact-methods">
              <a
                href="https://wa.me/6281995770190?text=Halo%20Bang%20Zaky%2C%0APerkenalkan%2C%20saya%20ingin%20berkonsultasi%20terkait%20jasa%20pembuatan%20website.%0AMohon%20informasikan%20mengenai%20layanan%2C%20estimasi%20biaya%2C%20dan%20timeline%20pengerjaan.%0A%0ATerima%20kasih."
                className="contact-method"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Phone size={24} />
                <div>
                    <div className="method-label">WhatsApp</div>
                    <div className="method-value">+62 819-9577-0190</div>
                </div>
                </a>

              <a href="mailto:bangzaky@example.com" className="contact-method">
                <Mail size={24} />
                <div>
                  <div className="method-label">Email</div>
                  <div className="method-value">bangzaky0029@gmail.com</div>
                </div>
              </a>
            </div>

            <div className="social-links">
              <a href="https://linkedin.com" alt="LinkedIn Profile" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/BangZaky29" alt="GitHub Profile" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={24} />
              </a>
              <a href="https://github.com/BangZaky0029" alt="GitHub Profile" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={24} />
              </a>
              <a href="https://www.instagram.com/zaky_aulia_qolbi29/" alt="Instagram Zaky" target="_blank" rel="noopener noreferrer" className="social-link">
                <Instagram size={24} />
              </a>
              <a href="https://web.facebook.com/qolbi.qolbi.1257" alt="Facebook Zaky" target="_blank" rel="noopener noreferrer" className="social-link">
                <FacebookIcon size={24} />
              </a>
              <a href="https://twitter.com/BangZaky0029" alt="Twitter Zaky" target="_blank" rel="noopener noreferrer" className="social-link">
                <TwitterIcon size={24} />
              </a>
              <a href="mailto:bangzaky0029@gmail.com" alt="Email Zaky" target="_blank" rel="noopener noreferrer" className="social-link">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="John Doe"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="john@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Tell me about your project..."
                rows="5"
              />
            </div>
            <button onClick={handleSubmit} className="btn btn-primary btn-full">
              Send Message via WhatsApp
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;