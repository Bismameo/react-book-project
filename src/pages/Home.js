import Navbar from '../component/navbar';
import Carousel from '../component/carousel';
import Cards from '../component/cards';
import Footer from '../component/footer';
import { useState } from "react";


function Home() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems((prev) => [...prev, book]);
  };
  return (
    <>
      <Navbar cartItems={cartItems} />

      <Carousel />

      <div className="container mt-4 mt-md-5 mb-4 mb-md-5">
        <div className="text-center mb-4 mb-md-5 px-3">
          <h2 style={{ fontWeight: "700", color: "#0F172A", marginBottom: "10px", fontSize: "clamp(1.5rem, 4vw, 2rem)" }}>
            Featured Books
          </h2>
          <p style={{ color: "#64748b", maxWidth: "600px", margin: "0 auto", fontSize: "clamp(0.9rem, 2vw, 1rem)" }}>
            Discover our handpicked selection of must-read books.
          </p>
        </div>
        <Cards addToCart={addToCart} />
      </div>

      {/* Newsletter CTA */}
      <div className="container mb-4 mb-md-5 px-3 px-md-0">
        <div style={{ background: "#000000", borderRadius: "16px", padding: "clamp(30px, 6vw, 50px) clamp(20px, 4vw, 40px)", textAlign: "center", color: "#fff" }}>
          <h2 style={{ fontWeight: "700", marginBottom: "15px", fontSize: "clamp(1.3rem, 4vw, 2rem)" }}>Join Our Newsletter</h2>
          <p style={{ opacity: 0.85, maxWidth: "600px", margin: "0 auto 25px", fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>
            Subscribe to get the latest book recommendations and exclusive offers.
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

export default Home;