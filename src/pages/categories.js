import Navbar from '../component/navbar';
import Footer from '../component/footer';
import { useState } from 'react';

function Categories() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems((prev) => [...prev, book]);
  };

  const categories = [
    {
      id: 'fiction',
      name: 'Fiction',
      count: 2450,
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'Explore worlds of imagination with our vast fiction collection.',
    },
    {
      id: 'non-fiction',
      name: 'Non-Fiction',
      count: 1890,
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'Learn, grow, and discover real stories and knowledge.',
    },
    {
      id: 'mystery',
      name: 'Mystery',
      count: 980,
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'Unravel thrilling mysteries and suspenseful tales.',
    },
    {
      id: 'romance',
      name: 'Romance',
      count: 1560,
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'Fall in love with heartwarming romantic stories.',
    },
    {
      id: 'science',
      name: 'Science & Tech',
      count: 1120,
      image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'Stay updated with the latest in science and technology.',
    },
    {
      id: 'children',
      name: 'Children',
      count: 780,
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'Delightful books for young readers and dreamers.',
    },
  ];

  return (
    <>
      <style>{`
        .categories-hero {
          background: linear-gradient(135deg, #000000 0%, #111111 100%);
          padding: clamp(40px, 6vw, 80px) 0;
          text-align: center;
          color: #fff;
          margin-bottom: clamp(30px, 5vw, 60px);
          box-shadow: inset 0 -20px 30px -10px rgba(0,0,0,0.4);
        }

        .categories-hero h1 {
          font-weight: 700;
          margin-bottom: 15px;
          font-size: clamp(1.8rem, 4.5vw, 3rem);
        }

        .categories-hero p {
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
          font-size: clamp(0.9rem, 2vw, 1.1rem);
        }

        .category-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.04);
          transition: all 0.35s ease;
          height: 100%;
        }

        .category-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.12) !important;
        }

        .category-card:hover img {
          transform: scale(1.08);
        }

        .category-card-img {
          width: 100%;
          height: clamp(160px, 22vw, 240px);
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .category-card-body {
          padding: clamp(16px, 2.5vw, 24px);
        }

        .category-card-title {
          font-size: clamp(1.1rem, 2vw, 1.35rem);
          font-weight: 600;
          color: #0F172A;
          margin-bottom: 8px;
        }

        .category-card-desc {
          font-size: clamp(0.85rem, 1.5vw, 0.95rem);
          color: #64748b;
          margin-bottom: 12px;
          line-height: 1.6;
        }

        .category-card-count {
          font-size: clamp(0.8rem, 1.3vw, 0.9rem);
          color: #3B82F6;
          font-weight: 600;
        }
      `}</style>

      <Navbar cartItems={cartItems} />

      {/* Hero Section */}
      <div className="categories-hero">
        <div className="container">
          <h1>Browse by Category</h1>
          <p>Find your next great read from our carefully curated book categories.</p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mb-4 mb-md-5 px-3 px-md-0">
        <div className="row g-3 g-md-4">
          {categories.map((category, index) => (
            <div className="col-12 col-sm-6 col-lg-4" key={index}>
              <div className="category-card">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-card-img"
                />
                <div className="category-card-body">
                  <h5 className="category-card-title">{category.name}</h5>
                  <p className="category-card-desc">{category.desc}</p>
                  <span className="category-card-count">{category.count} Books</span>
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

export default Categories;
