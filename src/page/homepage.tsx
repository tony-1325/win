import React from "react";
import "../layouts/style/Home.css";

const Home: React.FC = () => {
  return (
    <div className="app-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Solusi Material Konstruksi & Arsitektur Terlengkap
          </h1>
          <p className="hero-subtitle">
            Sediakan fondasi terbaik untuk proyek Anda. Dari baja ringan
            berkualitas, semen, hingga keramik premium dengan harga kompetitif.
          </p>
          <a href="/products" className="btn-primary">
            Lihat Katalog Produk
          </a>
        </div>
      </header>

      {/* Keunggulan (Value Proposition) */}
      <section className="features-section">
        <div className="feature-card">
          <div className="feature-icon">🛡️</div>
          <h3>Kualitas Premium</h3>
          <p>
            Material bersertifikat SNI yang menjamin ketahanan dan keamanan
            bangunan Anda.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Pengiriman Cepat</h3>
          <p>
            Armada logistik kami siap mengantar pesanan langsung ke lokasi
            proyek Anda.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💰</div>
          <h3>Harga Kompetitif</h3>
          <p>
            Dapatkan penawaran harga grosir terbaik untuk kebutuhan skala besar.
          </p>
        </div>
      </section>

      {/* Kategori Populer */}
      <section className="categories-section">
        <h2 className="section-title">Kategori Pilihan</h2>
        <div className="categories-grid">
          <div className="category-card">
            <div className="category-image bg-baja"></div>
            <h3>Baja Ringan & Atap</h3>
          </div>
          <div className="category-card">
            <div className="category-image bg-keramik"></div>
            <h3>Lantai & Keramik</h3>
          </div>
          <div className="category-card">
            <div className="category-image bg-semen"></div>
            <h3>Semen & Mortar</h3>
          </div>
          <div className="category-card">
            <div className="category-image bg-perkakas"></div>
            <h3>Perkakas & Hardware</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
