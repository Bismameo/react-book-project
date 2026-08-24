import Navbar from '../component/navbar';
import Footer from '../component/footer';
import { useState } from 'react';

function BestSellers() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems((prev) => [...prev, book]);
  };

  const bestsellers = [
    { id: 1, img: "/assets/pic1.jpg", title: "The Alchemist", author: "Paulo Coelho", price: "$14.99", rating: 4.8 },
    { id: 2, img: "/assets/pic2.jpg", title: "Atomic Habits", author: "James Clear", price: "$16.99", rating: 4.9 },
    { id: 3, img: "/assets/pic3.jpg", title: "The Psychology of Money", author: "Morgan Housel", price: "$15.49", rating: 4.7 },
    { id: 4, img: "/assets/pic4.webp", title: "Deep Work", author: "Cal Newport", price: "$13.99", rating: 4.6 },
    { id: 5, img: "/assets/pic5.jpg", title: "Think and Grow Rich", author: "Napoleon Hill", price: "$12.99", rating: 4.5 },
    { id: 6, img: "/assets/pic6.webp", title: "The 5 AM Club", author: "Robin Sharma", price: "$14.49", rating: 4.4 },
    { id: 7, img: "/assets/pic7.webp", title: "Zero to One", author: "Peter Thiel", price: "$17.99", rating: 4.7 },
    { id: 8, img: "/assets/pic8.webp", title: "The Subtle Art", author: "Mark Manson", price: "$13.49", rating: 4.6 },
  ];

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
          width: 100%;
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

      <Navbar cartItems={cartItems} />

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
          {bestsellers.map((book, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <div className="bestseller-card">
                <div className="bestseller-img-wrap">
                  <img src={book.img} alt={book.title} className="bestseller-img" />
                  <span className="bestseller-badge">Bestseller</span>
                </div>
                <div className="bestseller-body">
                  <div className="bestseller-title" title={book.title}>{book.title}</div>
                  <div className="bestseller-author">{book.author}</div>
                  <div className="bestseller-meta">
                    <span className="bestseller-price">{book.price}</span>
                    <span className="bestseller-rating">⭐ {book.rating}</span>
                  </div>
                  <button
                    className="bestseller-btn"
                    onClick={() => {
                      addToCart(book);
                      alert(`${book.title} has been added to the cart!`);
                    }}
                  >
                    Add to Cart
                  </button>
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
