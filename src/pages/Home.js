import Navbar from '../component/navbar';
import Carousel from '../component/carousel';
import Cards from '../component/cards';
import Footer from '../component/footer';

function Home() {
  return (
    <>
      <Navbar />

      <Carousel />

      <div className="container mt-5 mb-5">
        <div className="text-center mb-5">
          <h2 style={{ fontWeight: "700", color: "#0F172A", marginBottom: "10px" }}>
            Featured Books
          </h2>
          <p style={{ color: "#64748b", maxWidth: "500px", margin: "0 auto" }}>
            Discover our handpicked selection of must-read books.
          </p>
        </div>
        <Cards />
      </div>

      {/* Features Banner */}
      <div className="container mb-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div style={{ background: "#fff", borderRadius: "16px", padding: "30px", textAlign: "center", boxShadow: "0 15px 35px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.05)", height: "100%" }}>
              <div style={{ fontSize: "40px", marginBottom: "15px" }}>📚</div>
              <h5 style={{ fontWeight: "600", color: "#0F172A", marginBottom: "10px" }}>10,000+ Books</h5>
              <p style={{ color: "#64748b", margin: 0 }}>Explore every genre in one place.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div style={{ background: "#fff", borderRadius: "16px", padding: "30px", textAlign: "center", boxShadow: "0 15px 35px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.05)", height: "100%" }}>
              <div style={{ fontSize: "40px", marginBottom: "15px" }}>🚚</div>
              <h5 style={{ fontWeight: "600", color: "#0F172A", marginBottom: "10px" }}>Fast Delivery</h5>
              <p style={{ color: "#64748b", margin: 0 }}>Quick shipping across the country.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div style={{ background: "#fff", borderRadius: "16px", padding: "30px", textAlign: "center", boxShadow: "0 15px 35px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.05)", height: "100%" }}>
              <div style={{ fontSize: "40px", marginBottom: "15px" }}>⭐</div>
              <h5 style={{ fontWeight: "600", color: "#0F172A", marginBottom: "10px" }}>Top Rated</h5>
              <p style={{ color: "#64748b", margin: 0 }}>Thousands of satisfied customers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="container mb-5">
        <div style={{ background: "linear-gradient(135deg,#0F172A,#1E3A8A)", borderRadius: "16px", padding: "50px 40px", textAlign: "center", color: "#fff" }}>
          <h2 style={{ fontWeight: "700", marginBottom: "15px" }}>Join Our Newsletter</h2>
          <p style={{ opacity: 0.85, maxWidth: "500px", margin: "0 auto 25px" }}>
            Subscribe to get the latest book recommendations and exclusive offers.
          </p>
          <div className="row justify-content-center g-2">
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                style={{ borderRadius: "30px", padding: "12px 20px", border: "none", height: "50px" }}
              />
            </div>
            <div className="col-md-3">
              <button style={{ background: "#fff", color: "#0F172A", border: "none", borderRadius: "30px", padding: "12px 30px", fontWeight: "600", cursor: "pointer", height: "50px", width: "100%", transition: "0.35s" }}>
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
