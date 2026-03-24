import { Link } from "react-router-dom";

interface Product {
  id: number;
  nama: string;
  img: string;
  keterangan: string;
  kategori: string;
}

interface CardsProps {
  data: Product[];
}

const Cards = ({ data }: CardsProps) => {
  return (
    <>
      {data.map((product) => (
        <div className="product-card" key={product.id}>
          <Link to={`/product/${product.id}`} className="card-link">
            <div className="image-container">
              <img src={product.img} alt={product.nama} />
            </div>
            <div className="product-info">
              <div className="product-category">{product.kategori}</div>
              <div className="product-name">{product.nama}</div>
              <div className="product-description">{product.keterangan}</div>
            </div>
            <div className="detail-button">Detail barang</div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Cards;
