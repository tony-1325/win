import { useParams, Link } from "react-router-dom";
import data from "../data/Data"; // Sesuaikan path datanya
import "../layouts/style/detail.css"; // Opsional: buat file CSS khusus detail

const DetailProduct = () => {
  const { id } = useParams();
  const productItem = data.find((item) => String(item.id) === String(id));

  if (!productItem) {
    return <h2>Produk tidak ditemukan</h2>;
  }

  return (
    <div className="detail-page-container">
      {/* 2. Tambahkan Tombol Kembali di Sini */}
      <Link to="/product" className="back-button">
        <span>&larr;</span> Kembali ke Daftar Produk
      </Link>

      {/* Card Detail dari sebelumnya */}
      <div className="detail-card">
        <div className="detail-image-section">
          <img src={productItem.img} alt={productItem.nama} />
        </div>

        <div className="detail-info-section">
          <span className="detail-category">{productItem.kategori}</span>
          <h1 className="detail-title">{productItem.nama}</h1>
          <div className="detail-divider"></div>
          <h3 className="detail-subtitle">Deskripsi Produk</h3>
          <p className="detail-description">{productItem.keterangan}</p>
          <button className="detail-action-btn">Hubungi Kami</button>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
