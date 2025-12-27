import React from 'react'
import reactLogo from '../assets/mylogo-02.png'

const OrderPage = ({ selectedPackage, paymentMethod, setPaymentMethod, onBack }) => {
  return (
    <section id="pesanan" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Pembayaran</h2>
          <p className="section-subtitle">Pilih metode pembayaran</p>
        </div>

        <div style={{ marginBottom: 24, display: 'flex', gap: 12, justifyContent: 'center' }}>
          <button
            className={`btn ${paymentMethod === 'BCA' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setPaymentMethod('BCA')}
          >
            BCA
          </button>
          <button
            className={`btn ${paymentMethod === 'QR' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setPaymentMethod('QR')}
          >
            QR
          </button>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <h3 className="service-title">Ringkasan Pesanan</h3>
            <p className="service-description">
              {selectedPackage ? `${selectedPackage.tier}  ${selectedPackage.price}` : 'Belum memilih paket'}
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <button className="btn btn-secondary" onClick={onBack}>Kembali ke Price</button>
            </div>
          </div>

          <div className="service-card">
            {paymentMethod === 'BCA' ? (
              <>
                <h3 className="service-title">Pembayaran via BCA</h3>
                <p className="service-description">Nomor Rekening</p>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#34d399' }}>8705623461</div>
                <div style={{ marginTop: 12, fontSize: 14, color: '#9ca3af' }}>
                  Silakan transfer sesuai nominal. Kirim bukti transfer via WhatsApp.
                </div>
              </>
            ) : (
              <>
                <h3 className="service-title">Pembayaran via QR</h3>
                <p className="service-description">Scan QR di bawah ini</p>
                <div
                  style={{
                    width: 220,
                    height: 220,
                    borderRadius: 16,
                    border: '1px dashed #34d399',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9ca3af',
                    fontSize: 18,
                    fontWeight: 700
                  }}
                >
                  Coming Soon
                </div>
                <div style={{ marginTop: 12, fontSize: 14, color: '#9ca3af' }}>
                  Gunakan aplikasi pembayaran untuk scan QR.
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrderPage
