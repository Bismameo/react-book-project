import { Link } from 'react-router-dom';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import {
  FaShippingFast,
  FaLock,
  FaHeadset,
  FaUndo,
  FaTags,
  FaBookReader,
} from 'react-icons/fa';

export default function Service() {
  const styles = {
    hero: {
      background: "linear-gradient(135deg, #000000 0%, #111111 100%)",
      minHeight: "clamp(280px, 50vw, 420px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      color: "#fff",
      textAlign: "center",
      marginBottom: "clamp(40px, 6vw, 60px)",
      boxShadow: "inset 0 -20px 30px -10px rgba(0,0,0,0.4)",
    },
    heroOverlay: {
      display: "none",
    },
    heroContent: {
      position: "relative",
      zIndex: 1,
    },
    serviceCard: {
      background: "#fff",
      borderRadius: "16px",
      padding: "clamp(20px, 3vw, 30px) clamp(15px, 2vw, 20px)",
      height: "100%",
      boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
      transition: "0.35s",
      border: "1px solid rgba(0,0,0,0.04)",
      textAlign: "center",
    },
    iconBox: {
      width: "clamp(45px, 6vw, 60px)",
      height: "clamp(45px, 6vw, 60px)",
      borderRadius: "16px",
      background: "linear-gradient(135deg,#000000,#111111)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "clamp(18px, 3.5vw, 24px)",
      marginBottom: "clamp(10px, 2vw, 16px)",
      transition: "0.35s",
    },
    processCard: {
      background: "#fff",
      borderRadius: "16px",
      padding: "clamp(18px, 2.5vw, 25px) clamp(12px, 1.5vw, 20px)",
      textAlign: "center",
      boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
      border: "1px solid rgba(0,0,0,0.04)",
      height: "100%",
    },
    processNumber: {
      width: "clamp(38px, 5vw, 45px)",
      height: "clamp(38px, 5vw, 45px)",
      borderRadius: "50%",
      background: "linear-gradient(135deg,#000000,#111111)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "clamp(16px, 2.5vw, 18px)",
      fontWeight: "700",
      marginBottom: "clamp(8px, 1.5vw, 12px)",
    },
    ctaSection: {
      background: "#000000",
      borderRadius: "16px",
      padding: "clamp(30px, 5vw, 50px) clamp(20px, 3vw, 30px)",
      textAlign: "center",
      color: "#fff",
      marginTop: "clamp(40px, 5vw, 60px)",
    },
    ctaBtn: {
      background: "#ffffff",
      color: "#0F172A",
      border: "1px solid #27272a",
      borderRadius: "30px",
      padding: "clamp(10px, 2vw, 14px) clamp(20px, 4vw, 40px)",
      fontWeight: "600",
      fontSize: "clamp(0.9rem, 2vw, 16px)",
      cursor: "pointer",
      transition: "0.35s",
      textDecoration: "none",
      display: "inline-block",
      marginTop: "20px",
    },
    processImg: {
      width: "100%",
      height: "clamp(200px, 25vw, 320px)",
      objectFit: "cover",
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
      border: "1px solid rgba(0,0,0,0.04)",
      display: "block",
    },
  };

  const services = [
    {
      icon: <FaShippingFast />,
      title: "Free Shipping",
      desc: "Enjoy free delivery on all orders above Rs. 2000 across Pakistan.",
    },
    {
      icon: <FaLock />,
      title: "Secure Payment",
      desc: "Multiple payment options with 100% secure checkout experience.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Our dedicated team is always ready to help you anytime.",
    },
    {
      icon: <FaUndo />,
      title: "Easy Returns",
      desc: "Hassle-free return and exchange policy within 30 days.",
    },
    {
      icon: <FaTags />,
      title: "Best Prices",
      desc: "Get amazing discounts and offers on bestselling books.",
    },
    {
      icon: <FaBookReader />,
      title: "Wide Collection",
      desc: "Explore thousands of books across every genre and category.",
    },
  ];

  const processSteps = [
    { title: "Browse Books", desc: "Explore our vast collection of books across categories." },
    { title: "Place Order", desc: "Add to cart and checkout with your preferred payment method." },
    { title: "Fast Delivery", desc: "Get your books delivered to your doorstep quickly." },
    { title: "Enjoy Reading", desc: "Dive into your new books and enjoy the journey." },
  ];

  return (
    <>
      <style>{`
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important;
        }
        .service-card:hover .service-icon-box {
          transform: scale(1.1) rotate(5deg);
        }
        .process-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
        }
        .cta-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        @media(max-width:1200px){
          .service-hero-content h1 {
            font-size: 2.6rem !important;
          }
          .service-hero-content p {
            font-size: 1.05rem !important;
          }
        }

        @media(max-width:992px){
          .service-hero {
            min-height: 320px !important;
          }
          .service-hero-content h1 {
            font-size: 2.2rem !important;
          }
          .service-hero-content p {
            font-size: 1rem !important;
          }
          .service-card {
            padding: 22px 16px !important;
          }
          .service-icon-box {
            width: 48px !important;
            height: 48px !important;
            font-size: 18px !important;
          }
          .process-card {
            padding: 20px 15px !important;
          }
          .service-process-img {
            margin-bottom: 20px;
          }
        }

        @media(max-width:768px){
          .service-hero {
            min-height: 280px !important;
          }
          .service-hero-content h1 {
            font-size: 1.9rem !important;
          }
          .service-hero-content p {
            font-size: 0.95rem !important;
          }
          .service-card {
            padding: 20px 15px !important;
          }
          .service-icon-box {
            width: 45px !important;
            height: 45px !important;
            font-size: 17px !important;
          }
          .process-card {
            padding: 18px 14px !important;
          }
          .service-process-img img {
            height: 240px !important;
          }
        }

        @media(max-width:576px){
          .service-hero {
            min-height: 240px !important;
            margin-bottom: 35px !important;
          }
          .service-hero-content h1 {
            font-size: 1.5rem !important;
          }
          .service-hero-content p {
            font-size: 0.85rem !important;
          }
          .service-card {
            padding: 18px 14px !important;
          }
          .service-icon-box {
            width: 42px !important;
            height: 42px !important;
            font-size: 16px !important;
            margin-bottom: 10px !important;
          }
          .service-card h5 {
            font-size: 0.95rem !important;
          }
          .service-card p {
            font-size: 0.8rem !important;
          }
          .process-card {
            padding: 16px 12px !important;
          }
          .process-number {
            width: 38px !important;
            height: 38px !important;
            font-size: 15px !important;
          }
          .service-process-img img {
            height: 200px !important;
          }
          .service-cta-section {
            padding: 30px 20px !important;
            margin-top: 40px !important;
          }
          .service-cta-section h2 {
            font-size: 1.3rem !important;
          }
          .service-cta-section p {
            font-size: 0.85rem !important;
          }
          .service-cta-section .cta-btn {
            padding: 10px 25px !important;
            font-size: 13px !important;
          }
          .container {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
        }

        @media(max-width:480px){
          .service-hero {
            min-height: 220px !important;
            margin-bottom: 30px !important;
          }
          .service-hero-content h1 {
            font-size: 1.3rem !important;
          }
          .service-hero-content p {
            font-size: 0.8rem !important;
          }
          .service-card {
            padding: 16px 12px !important;
          }
          .service-icon-box {
            width: 38px !important;
            height: 38px !important;
            font-size: 14px !important;
          }
          .service-card h5 {
            font-size: 0.9rem !important;
          }
          .service-card p {
            font-size: 0.75rem !important;
          }
          .process-card {
            padding: 14px 10px !important;
          }
          .process-number {
            width: 34px !important;
            height: 34px !important;
            font-size: 14px !important;
          }
          .service-process-img img {
            height: 180px !important;
          }
          .service-cta-section {
            padding: 25px 16px !important;
            margin-top: 35px !important;
          }
          .service-cta-section h2 {
            font-size: 1.1rem !important;
          }
        }
      `}</style>

      <Navbar />

      {/* Hero */}
      <div className="service-hero" style={styles.hero}>
        <div style={styles.heroContent}>
          <div className="service-hero-content">
            <h1 style={{ fontSize: "clamp(1.5rem, 4.5vw, 3.2rem)", fontWeight: "700", marginBottom: "15px" }}>
              Our Services
            </h1>
            <p style={{ fontSize: "clamp(0.85rem, 2vw, 1.2rem)", opacity: 0.9, maxWidth: "600px", margin: "0 auto" }}>
              We make book shopping easy, fast, and enjoyable for every reader.
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginBottom: "clamp(40px, 6vw, 80px)", paddingLeft: "clamp(12px, 2vw, 24px)", paddingRight: "clamp(12px, 2vw, 24px)" }}>
        {/* Service Cards */}
        <div className="row g-3 g-md-4 mb-4 mb-md-5">
          {services.map((item, index) => (
            <div className="col-12 col-sm-6 col-lg-4" key={index}>
              <div className="service-card" style={styles.serviceCard}>
                <div className="service-icon-box" style={styles.iconBox}>
                  {item.icon}
                </div>
                <h5 style={{ fontWeight: "600", marginBottom: "12px", color: "#0F172A", fontSize: "clamp(0.95rem, 2vw, 1.05rem)" }}>
                  {item.title}
                </h5>
                <p style={{ color: "#64748b", lineHeight: "1.7", marginBottom: 0, fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="text-center mb-4 mb-md-5 px-2">
          <h2 style={{ fontWeight: "700", marginBottom: "10px", color: "#0F172A", fontSize: "clamp(1.3rem, 3vw, 1.75rem)" }}>
            How It Works
          </h2>
          <p style={{ color: "#64748b", maxWidth: "600px", margin: "0 auto 40px", fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}>
            Getting your favorite books is just a few simple steps away.
          </p>
        </div>

        <div className="row g-3 g-md-4 mb-4 mb-md-5">
          {processSteps.map((step, index) => (
            <div className="col-6 col-md-6 col-lg-3" key={index}>
              <div className="process-card" style={styles.processCard}>
                <div style={styles.processNumber}>{index + 1}</div>
                <h5 style={{ fontWeight: "600", marginBottom: "10px", color: "#0F172A", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
                  {step.title}
                </h5>
                <p style={{ color: "#64748b", lineHeight: "1.7", marginBottom: 0, fontSize: "clamp(0.75rem, 1.2vw, 0.85rem)" }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image + Info Section */}
        <div className="row g-3 g-md-4 g-lg-5 align-items-center mb-4 mb-md-5">
          <div className="col-12 col-lg-6 service-process-img">
            <video
              src="https://assets.mixkit.co/videos/preview/mixkit-delivery-man-walking-on-the-sidewalk-4330-large.mp4"
              className="w-100"
              style={styles.processImg}
              controls
              muted
              loop
              playsInline
              poster="https://images.unsplash.com/photo-1553729459-afe92b1b29c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-12 col-lg-6">
            <h3 style={{ fontWeight: "700", marginBottom: "15px", color: "#0F172A", fontSize: "clamp(1.2rem, 3vw, 1.6rem)" }}>
              Fast & Reliable Delivery
            </h3>
            <p style={{ color: "#64748b", lineHeight: "1.8", marginBottom: "20px", fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}>
              We partner with trusted courier services to ensure your books reach you safely and on time.
              From Karachi to Lahore, Islamabad to Peshawar, we deliver everywhere in Pakistan.
            </p>
            <p style={{ color: "#64748b", lineHeight: "1.8", marginBottom: "20px", fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}>
              Track your order in real-time and get updates at every step of the delivery process.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Same-day dispatch", "Live order tracking", "Safe packaging", "Cash on delivery"].map(
                (item, i) => (
                  <li
                    key={i}
                    style={{
                      color: "#334155",
                      marginBottom: "10px",
                      paddingLeft: "25px",
                      position: "relative",
                      fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "#3B82F6",
                        fontWeight: "700",
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="service-cta-section" style={styles.ctaSection}>
          <h2 style={{ fontWeight: "700", marginBottom: "15px", fontSize: "clamp(1.2rem, 3vw, 1.6rem)" }}>
            Ready to Order Your Favorite Books?
          </h2>
          <p style={{ opacity: 0.85, maxWidth: "500px", margin: "0 auto", fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}>
            Join thousands of happy readers and experience the best online bookstore in Pakistan.
          </p>
          <Link to="/" style={styles.ctaBtn}>
            Start Shopping Now
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}