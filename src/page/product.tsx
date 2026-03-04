import "./PageStyle.css";
const Product = () => {
  return (
    <>
      <section className="container">
        <aside className="sidebar">
          <h2>Kategori</h2>
          <ul className="category-list">
            <li className="category-item active">Semua</li>
            <li className="category-item">Atap & Struktur</li>
            <li className="category-item">Lantai & Keramik</li>
            <li className="category-item">Perkakas & Hardware</li>
            <li className="category-item">Cat & Finishing</li>
            <li className="category-item">Sanitasi & Pipa</li>
            <li className="category-item">Kelistrikan</li>
          </ul>
        </aside>

        <main className="main-content">test</main>
      </section>
    </>
  );
};

export default Product;
