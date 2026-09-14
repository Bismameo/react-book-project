import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import { useCart } from '../context/CartContext';
import { bestsellers, formatPrice } from '../utils/products';
import { FaShoppingCart } from 'react-icons/fa';

function BestSellers() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = (book) => {
    addToCart(book);
    navigate('/cart', { state: { buyNow: true, productId: book.id } });
  };

  return (
    <>
      <style>{`
        .bestsellers-hero {
          background: linear-gradient(135deg, #000000 0%, #111111 100%);
          padding: clamp(40px, 6vw, 80px) 0;
          text-align: center;
          color: #fff;
          margin-bottom: clamp(30px, 5vw, 60px);
          box-shadow: inset 0 -20px 30px -10px rgba(0,0,0,0.4);
        }

        .bestsellers-hero h1 {
          font-weight: 700;
          margin-bottom: 15px;
          font-size: clamp(1.8rem, 4.5vw, 3rem);
        }

        .bestsellers-hero p {
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
          font-size: clamp(0.9rem, 2vw, 1.1rem);
        }

        .bestseller-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.04);
          transition: all 0.35s ease;
          height: 100%;
        }

        .bestseller-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important;
        }

        .bestseller-img-wrap {
          position: relative;
          overflow: hidden;
        }

        .bestseller-img {
          width: 100%;
          height: clamp(150px, 35vw, 260px);
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .bestseller-card:hover .bestseller-img {
          transform: scale(1.06);
        }

        .bestseller-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: #ffc107;
          color: #000;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: clamp(0.65rem, 1.2vw, 0.8rem);
          font-weight: 700;
        }

        .bestseller-body {
          padding: clamp(12px, 2vw, 20px);
        }

        .bestseller-title {
          font-weight: 600;
          color: #0F172A;
          margin-bottom: 4px;
          font-size: clamp(0.95rem, 1.8vw, 1.1rem);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .bestseller-author {
          color: #64748b;
          font-size: clamp(0.8rem, 1.3vw, 0.9rem);
          margin-bottom: 8px;
        }

        .bestseller-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .bestseller-price {
          font-weight: 700;
          color: #000;
          font-size: clamp(0.9rem, 1.6vw, 1.05rem);
        }

        .bestseller-rating {
          font-size: clamp(0.75rem, 1.2vw, 0.85rem);
          color: #ffc107;
          font-weight: 600;
        }

        .bestseller-btn {
          width: auto;
          background: #000;
          color: #fff;
          border: 1px solid #27272a;
          border-radius: 6px;
          padding: clamp(6px, 1vw, 8px) clamp(10px, 1.5vw, 14px);
          font-size: clamp(0.75rem, 1.4vw, 0.85rem);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .bestseller-btn:hover {
          background: #111;
          border-color: #3f3f46;
        }
      `}</style>

       <Navbar />

      {/* Hero */}
      <div className="bestsellers-hero">
        <div className="container">
          <h1>Best Sellers</h1>
          <p>Discover the most loved books chosen by thousands of readers worldwide.</p>
        </div>
      </div>

       {/* Books Grid */}
      <div className="container mb-4 mb-md-5 px-3 px-md-0">
        <div className="row g-3 g-md-4">
          {bestsellers.map((book) => (
            <div className="col-6 col-md-4 col-lg-3" key={book.id}>
              <div className="bestseller-card">
                <div className="bestseller-img-wrap">
                  <Link to={`/product/${book.id}`} className="d-block">
                    <img src={book.img} alt={book.title} className="bestseller-img" />
                  </Link>
                  <span className="bestseller-badge">Bestseller</span>
                </div>
                <div className="bestseller-body">
                  <Link
                    to={`/product/${book.id}`}
                    className="bestseller-title text-decoration-none"
                    title={book.title}
                    style={{ color: "inherit", cursor: "pointer" }}
                  >
                    {book.title}
                  </Link>
                  <div className="bestseller-author">{book.author}</div>
                  <div className="bestseller-meta">
                    <span className="bestseller-price">{formatPrice(book.price)}</span>
                    <span className="bestseller-rating">⭐ {book.rating}</span>
                  </div>
                  <div className="d-flex gap-2">
                    <button
                      className="bestseller-btn flex-grow-1"
                      onClick={() => addToCart(book)}
                    >
                      <FaShoppingCart className="me-1" size={14} />
                      Add to Cart
                    </button>
                    <button
                      className="bestseller-btn flex-grow-1"
                      style={{ background: "#ffc107", color: "#000", fontWeight: "700" }}
                      onClick={() => handleBuyNow(book)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BestSellers;
