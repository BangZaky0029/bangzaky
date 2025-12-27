import React from 'react'
import { Zap, CheckCircle, ArrowRight } from 'lucide-react'
import '../styles/style_web/pricing.css'

const PricingPage = ({ onOrder }) => {
  const packages = [
    {
      tier: 'BASIC',
      price: 'Rp 500.000',
      oldPrice: 'Rp 750.000',
      saving: 'Rp 250.000',
      maintenance: 'Maintenance mulai Rp 200.000 / bulan',
      highlight: 'Untuk UMKM & personal yang baru mulai',
      features: [
        '1 halaman landing page',
        'Desain rapi & responsive',
        'Maks. 4 section',
        'Tombol WhatsApp',
        'Revisi 1x',
        'Pengerjaan ±3 hari'
      ],
      benefits: ['Punya website profesional', 'Biaya paling hemat'],
      bonus: 'Gratis 1 minggu support'
    },
    {
      tier: 'SILVER',
      price: 'Rp 1.250.000',
      oldPrice: 'Rp 1.750.000',
      saving: 'Rp 500.000',
      maintenance: 'Maintenance mulai Rp 450.000 / bulan',
      highlight: 'Paket paling seimbang & paling diminati',
      features: [
        'Landing page custom design',
        'Maks. 7 section',
        'Copywriting dibantu & dirapikan',
        'Form kontak (WA / Email)',
        'Basic SEO',
        'Optimasi kecepatan dasar',
        'Revisi 2x',
        'Pengerjaan ±5 hari'
      ],
      benefits: [
        'Tampilan profesional & dipercaya',
        'Cocok untuk promosi WA / IG'
      ],
      bonus: 'Gratis 1 bulan maintenance Basic Care',
      recommended: true
    },
    {
      tier: 'GOLD',
      price: 'Rp 2.350.000',
      oldPrice: 'Rp 3.000.000',
      saving: 'Rp 650.000',
      maintenance: 'Maintenance mulai Rp 850.000 / bulan',
      highlight: 'Untuk jualan serius & iklan berbayar',
      features: [
        'Custom UI/UX (branding kuat)',
        'Landing page fokus konversi',
        'Copywriting persuasif',
        'Integrasi WhatsApp',
        'Google Analytics',
        'SEO On-Page',
        'Animasi ringan',
        'Revisi 3x'
      ],
      benefits: [
        'Closing rate lebih tinggi',
        'Brand terlihat lebih premium'
      ],
      bonus: 'Gratis 1 bulan maintenance Standard Care'
    },
    {
      tier: 'PREMIUM',
      price: 'Rp 3.500.000',
      oldPrice: 'Rp 5.000.000',
      saving: 'Rp 1.500.000',
      maintenance: 'Maintenance mulai Rp 1.250.000 / bulan',
      highlight: 'All-in untuk brand & campaign besar',
      features: [
        'Full custom UI/UX',
        'Copywriting profesional',
        'WhatsApp integration',
        'Google Analytics',
        'Facebook Pixel',
        'Advanced speed optimization',
        'SEO struktur konten',
        'Revisi unlimited (wajar)',
        'Support 30 hari'
      ],
      benefits: [
        'Website jadi aset bisnis',
        'Siap scale iklan besar'
      ],
      bonus: 'Gratis 1 bulan maintenance Premium Care'
    }
  ]

  return (
    <section id="price" className="pricing-section reveal">
      <div className="container">
        <div className="pricing-header">
          <h2 className="pricing-title">Jasa Pembuatan Landing Page</h2>
          <p className="pricing-subtitle">
            Website profesional · Mobile friendly · Fokus konversi
          </p>
        </div>

        <div className="pricing-grid reveal-stagger">
          {packages.map((p) => (
            <div
              key={p.tier}
              className={`pricing-card ${p.recommended ? 'recommended' : ''}`}
            >
              {p.recommended && (
                <span className="badge-recommended">Recommended</span>
              )}

              <h3 className="pricing-tier">{p.tier}</h3>
              <p className="pricing-highlight">{p.highlight}</p>

              <div className="pricing-price-wrap">
                <div className="pricing-saving">Hemat {p.saving}</div>
                <div className="pricing-old">{p.oldPrice}</div>
                <div className="pricing-price animate-pop">{p.price}</div>
              </div>

              <div className="pricing-maintenance">{p.maintenance}</div>

              <ul className="pricing-features">
                {p.features.map((f) => (
                  <li key={f}>
                    <CheckCircle size={16} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="pricing-benefits">
                {p.benefits.map((b) => (
                  <div key={b} className="benefit-item">
                    <Zap size={16} />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="pricing-bonus">
                🎁 <strong>Bonus:</strong> {p.bonus}
              </div>

              <button
                className="pricing-btn"
                onClick={() => onOrder({ tier: p.tier, price: p.price })}
              >
                Pesan Sekarang
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>

        <p className="pricing-footer-note">
          Untuk hasil maksimal, kami sarankan paket Silver atau Gold.  
          Paket Premium cocok untuk website jangka panjang dan campaign besar.
        </p>
      </div>
    </section>
  )
}

export default PricingPage