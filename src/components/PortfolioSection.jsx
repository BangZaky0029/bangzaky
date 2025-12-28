// ============================================
// PORTFOLIO SECTION COMPONENT
// Path: src/components/PortfolioSection.jsx
// ============================================

import React from 'react'

const projects = [
    { title: 'Bangzaky', category: 'Personal Porfolio', description: 'Website portofolio pribadi dengan berbagai proyek dan layanan.', tags: ['React','Landing','SEO'], url: 'https://bangzaky.vercel.app/'},
    { title: 'MBell', category: 'Personal Porfolio', description: 'Website layanan Make Over Profesional Make-Up Artis.', tags: ['React','Landing','SEO'], url: 'https://mbell.vercel.app/'},
    { title: 'Najmi Service', category: 'Personal Porfolio', description: 'Website layanan Solusi Service Elektronik & ListrikProfesional dan Terpercaya.', tags: ['React','Landing','SEO'], url: 'https://najmiservice.netlify.app/'},
    { title: 'Nuansa Solution', category: 'Company Profile', description: 'Website resmi Nuansa Solution dengan layanan dan fitur lengkap.', tags: ['React','Landing','SEO'], url: 'https://nuansasolution.id/' },
    { title: 'Generator Surat Kuasa', category: 'Tool Hukum', description: 'Buat surat kuasa resmi dengan struktur yang rapi dan siap cetak.', tags: ['React','UX','Form Builder'], url: 'https://nuansasolution.id/surat-kuasa/' },
    { title: 'Kalkulator PPh', category: 'Tax Calculator', description: 'Hitung PPh dengan akurat dan cepat untuk berbagai skema.', tags: ['React','Finance','Calculator'], url: 'https://nuansasolution.id/calculator-PPH/' },
    { title: 'Kalkulator Pajak Properti', category: 'Tax Calculator', description: 'Estimasi pajak properti secara instan berdasarkan parameter wilayah.', tags: ['React','Maps','Calculator'], url: 'https://nuansasolution.id/kalkulator-pajak-properti/' },
    { title: 'Surat Pernyataan', category: 'Tool Hukum', description: 'Generator surat pernyataan formal dengan format profesional.', tags: ['React','Form','Generator'], url: 'https://nuansasolution.id/surat-pernyataan/' },
    { title: 'Surat Permohonan', category: 'Tool Hukum', description: 'Penyusunan surat permohonan yang jelas dan efektif.', tags: ['React','UX','Generator'], url: 'https://nuansasolution.id/surat-permohonan/' },
    { title: 'Surat Perintah Kerja', category: 'Operasional', description: 'Template surat perintah kerja untuk kebutuhan operasional.', tags: ['React','Workflow','Template'], url: 'https://nuansasolution.id/surat-perintah-kerja/' },
    { title: 'Surat Jalan', category: 'Operasional', description: 'Generator surat jalan untuk keperluan pengiriman barang.', tags: ['React','Logistics','Template'], url: 'https://nuansasolution.id/surat-jalan/' }
]

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="portfolio-section reveal">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">myPortfolio</h2>
          <p className="section-subtitle">Karya pilihan dengan fokus fungsional dan konversi</p>
        </div>

        <div className="portfolio-grid reveal-stagger">
          {projects.map((project, index) => (
            <a key={index} href={project.url} target="_blank" rel="noopener noreferrer" className="portfolio-card">
              <div className="portfolio-live">
                <iframe src={project.url} title={project.title} loading="lazy" sandbox="allow-scripts allow-same-origin allow-forms" />
              </div>
              <div className="portfolio-content">
                <span className="portfolio-category">{project.category}</span>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                <div className="portfolio-url">{project.url}</div>
                <div className="portfolio-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="portfolio-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
