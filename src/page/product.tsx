import data from "../data/Data";
import Cards from "../components/Cards";
import "../layouts/style/product.css";
import { useState } from "react";

const Product = () => {
  // 1. Kita hanya butuh satu state: kategori apa yang sedang dipilih?
  const [activeCategory, setActiveCategory] = useState("Semua");

  // 2. Bersihkan data (hapus spasi) agar perbandingan teks akurat
  const cleanData = data.map((item) => ({
    ...item,
    kategori: item.kategori.trim(),
  }));

  // 3. Derived State: Hitung data yang akan ditampilkan secara otomatis
  // Tidak butuh useEffect, tidak butuh setAllData
  const filteredData =
    activeCategory === "Semua"
      ? cleanData
      : cleanData.filter((item) => item.kategori === activeCategory);

  const categories = [
    "Semua",
    "atap & struktur",
    "lantai & keramik",
    "Perkakas & Hardware",
    "Cat & Finishing",
    "Sanitasi & Pipa",
    "Kelistrikan",
  ];

  return (
    <div className="product-container">
      <aside className="sidebar">
        <h2>Kategori</h2>
        <ul className="category-list">
          {categories.map((cat) => (
            <li
              key={cat}
              className={`category-item ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)} // Langsung ubah kategori di sini
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </li>
          ))}
        </ul>
      </aside>

      <main className="main-content">
        <div className="product-grid">
          {/* Kirim data hasil filter ke komponen Cards */}
          <Cards data={filteredData} />
        </div>
      </main>
    </div>
  );
};

export default Product;
