import Navbar from '../component/navbar';
import Footer from '../component/footer';
import Cards from '../component/cards';
import { useState } from 'react';
import { featuredBooks } from '../utils/products';

function Books() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categoryMap = {
    1: 'romance', 2: 'romance', 3: 'fiction', 4: 'science', 5: 'romance',
    6: 'non-fiction', 7: 'mystery', 8: 'science', 9: 'mystery', 10: 'non-fiction',
    11: 'fiction', 12: 'science', 13: 'fiction', 14: 'mystery', 15: 'romance',
    16: 'non-fiction',
  };

  const filteredBooks = selectedCategory === 'all'
    ? featuredBooks
    : featuredBooks.filter((b) => categoryMap[b.id] === selectedCategory);

  const categories = [
    { id: 'all', name: 'All Books' },
    { id: 'fiction', name: 'Fiction' },
    { id: 'non-fiction', name: 'Non-Fiction' },
    { id: 'mystery', name: 'Mystery' },
    { id: 'romance', name: 'Romance' },
    { id: 'science', name: 'Science' },
  ];

  return (
    <>
      <style>{`
        .books-hero {
          background: linear-gradient(135deg, #000000 0%, #111111 100%);
          padding: clamp(40px, 6vw, 80px) 0;
          text-align: center;
          color: #fff;
          margin-bottom: clamp(30px, 5vw, 60px);
          box-shadow: inset 0 -20px 30px -10px rgba(0,0,0,0.4);
        }

        .books-hero h1 {
          font-weight: 700;
          margin-bottom: 15px;
          font-size: clamp(1.8rem, 4.5vw, 3rem);
        }

        .books-hero p {
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
          font-size: clamp(0.9rem, 2vw, 1.1rem);
        }

        .books-category-btn {
          background: #000000;
          border: 1px solid #27272a;
          color: #fff;
          padding: clamp(8px, 1.5vw, 10px) clamp(16px, 2.5vw, 24px);
          border-radius: 30px;
          font-size: clamp(0.8rem, 1.5vw, 0.95rem);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 5px;
        }

        .books-category-btn:hover,
        .books-category-btn.active {
          background: #111111;
          color: #ffffff;
          border-color: #3f3f46;
        }

        @media(max-width:768px){
          .books-category-btn {
            padding: 8px 16px !important;
            font-size: 0.85rem !important;
          }
        }

        @media(max-width:576px){
          .books-category-btn {
            padding: 6px 12px !important;
            font-size: 0.8rem !important;
            margin: 3px !important;
          }
        }
      `}</style>

      <Navbar />

      {/* Hero Section */}
      <div className="books-hero">
        <div className="container">
          <h1>Discover Our Collection</h1>
          <p>Explore thousands of books across every genre. Find your next great read today.</p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="container mb-4 mb-md-5">
        <div className="text-center">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`books-category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

       {/* Books Grid */}
      <div className="container mb-4 mb-md-5 px-3 px-md-0">
        {filteredBooks.length === 0 ? (
          <p style={{ color: "#64748b", textAlign: "center" }}>No books found in this category.</p>
        ) : (
          <Cards books={filteredBooks} />
        )}
      </div>

      {/* Newsletter CTA */}
      <div className="container mb-4 mb-md-5 px-3 px-md-0">
        <div style={{ background: "#000000", borderRadius: "16px", padding: "clamp(30px, 6vw, 50px) clamp(20px, 4vw, 40px)", textAlign: "center", color: "#fff" }}>
          <h2 style={{ fontWeight: "700", marginBottom: "15px", fontSize: "clamp(1.3rem, 4vw, 2rem)" }}>Can&apos;t Find What You&apos;re Looking For?</h2>
          <p style={{ opacity: 0.85, maxWidth: "600px", margin: "0 auto 25px", fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>
            Subscribe to our newsletter and get notified when new books arrive.
          </p>
          <div className="row justify-content-center g-3">
            <div className="col-12 col-sm-8 col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                style={{ borderRadius: "30px", padding: "clamp(10px, 2vw, 12px) clamp(14px, 3vw, 20px)", border: "1px solid #27272a", height: "clamp(42px, 6vw, 50px)", background: "#111111", color: "#ffffff" }}
              />
            </div>
            <div className="col-12 col-sm-4 col-md-3">
              <button style={{ background: "#ffffff", color: "#000000", border: "1px solid #27272a", borderRadius: "30px", padding: "clamp(10px, 2vw, 12px) clamp(14px, 3vw, 30px)", fontWeight: "600", cursor: "pointer", height: "clamp(42px, 6vw, 50px)", width: "100%", transition: "0.35s", fontSize: "clamp(0.85rem, 2vw, 0.95rem)" }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Books;
