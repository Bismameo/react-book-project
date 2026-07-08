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
      backgroundImage:
        "url('https://images.unsplash.com/photo-1481627834876-b7833e8f557f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "420px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      color: "#fff",
      textAlign: "center",
      marginBottom: "60px",
    },
    heroOverlay: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(135deg, rgba(0,0,0,0.75), rgba(15,23,42,0.75))",
    },
    heroContent: {
      position: "relative",
      zIndex: 1,
    },
    serviceCard: {
      background: "#fff",
      borderRadius: "16px",
      padding: "30px 20px",
      height: "100%",
      boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
      transition: "0.35s",
      border: "1px solid rgba(0,0,0,0.05)",
      textAlign: "center",
    },
    iconBox: {
      width: "60px",
      height: "60px",
      borderRadius: "16px",
      background: "linear-gradient(135deg,#0F172A,#1E3A8A)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "24px",
      marginBottom: "16px",
      transition: "0.35s",
    },
    processCard: {
      background: "#fff",
      borderRadius: "16px",
      padding: "25px 20px",
      textAlign: "center",
      boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
      border: "1px solid rgba(0,0,0,0.05)",
      height: "100%",
    },
    processNumber: {
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      background: "linear-gradient(135deg,#0F172A,#1E3A8A)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "18px",
      fontWeight: "700",
      marginBottom: "12px",
    },
    ctaSection: {
      background: "linear-gradient(135deg,#0F172A,#1E3A8A)",
      borderRadius: "16px",
      padding: "50px 30px",
      textAlign: "center",
      color: "#fff",
      marginTop: "60px",
    },
    ctaBtn: {
      background: "#fff",
      color: "#0F172A",
      border: "none",
      borderRadius: "30px",
      padding: "14px 40px",
      fontWeight: "600",
      fontSize: "16px",
      cursor: "pointer",
      transition: "0.35s",
      textDecoration: "none",
      display: "inline-block",
      marginTop: "20px",
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

        @media(max-width:992px){
          .service-hero {
            min-height: 320px !important;
          }
          .service-hero-content h1 {
            font-size: 2.4rem !important;
          }
          .service-hero-content p {
            font-size: 1.1rem !important;
          }
        }

        @media(max-width:768px){
          .service-hero {
            min-height: 280px !important;
          }
          .service-hero-content h1 {
            font-size: 2rem !important;
          }
          .service-hero-content p {
            font-size: 1rem !important;
          }
          .service-card {
            padding: 25px 18px !important;
          }
          .service-icon-box {
            width: 50px !important;
            height: 50px !important;
            font-size: 20px !important;
          }
          .process-card {
            padding: 20px 15px !important;
          }
          .service-process-img img {
            height: 250px !important;
          }
        }

        @media(max-width:480px){
          .service-hero {
            min-height: 240px !important;
            margin-bottom: 40px !important;
          }
          .service-hero-content h1 {
            font-size: 1.6rem !important;
          }
          .service-hero-content p {
            font-size: 0.9rem !important;
          }
          .service-card {
            padding: 20px 15px !important;
          }
          .service-icon-box {
            width: 45px !important;
            height: 45px !important;
            font-size: 18px !important;
            margin-bottom: 12px !important;
          }
          .service-card h5 {
            font-size: 1rem !important;
          }
          .service-card p {
            font-size: 0.85rem !important;
          }
          .process-card {
            padding: 18px 12px !important;
          }
          .process-number {
            width: 40px !important;
            height: 40px !important;
            font-size: 16px !important;
          }
          .service-process-img img {
            height: 200px !important;
          }
          .service-cta-section {
            padding: 35px 20px !important;
            margin-top: 40px !important;
          }
          .service-cta-section h2 {
            font-size: 1.4rem !important;
          }
          .service-cta-section p {
            font-size: 0.9rem !important;
          }
          .service-cta-section .cta-btn {
            padding: 12px 30px !important;
            font-size: 14px !important;
          }
          .container {
            margin-bottom: 50px !important;
          }
        }
      `}</style>

      <Navbar />

      {/* Hero */}
      <div className="service-hero" style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <div className="service-hero-content">
            <h1 style={{ fontSize: "3.2rem", fontWeight: "700", marginBottom: "15px" }}>
              Our Services
            </h1>
            <p style={{ fontSize: "1.2rem", opacity: 0.9, maxWidth: "600px", margin: "0 auto" }}>
              We make book shopping easy, fast, and enjoyable for every reader.
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginBottom: "80px" }}>
        {/* Service Cards */}
        <div className="row g-4 mb-5">
          {services.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="service-card" style={styles.serviceCard}>
                <div className="service-icon-box" style={styles.iconBox}>
                  {item.icon}
                </div>
                <h5 style={{ fontWeight: "600", marginBottom: "12px", color: "#0F172A" }}>
                  {item.title}
                </h5>
                <p style={{ color: "#64748b", lineHeight: "1.7", marginBottom: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="text-center mb-5">
          <h2 style={{ fontWeight: "700", marginBottom: "10px", color: "#0F172A" }}>
            How It Works
          </h2>
          <p style={{ color: "#64748b", maxWidth: "600px", margin: "0 auto 40px" }}>
            Getting your favorite books is just a few simple steps away.
          </p>
        </div>

        <div className="row g-4 mb-5">
          {processSteps.map((step, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <div className="process-card" style={styles.processCard}>
                <div style={styles.processNumber}>{index + 1}</div>
                <h5 style={{ fontWeight: "600", marginBottom: "10px", color: "#0F172A" }}>
                  {step.title}
                </h5>
                <p style={{ color: "#64748b", lineHeight: "1.7", marginBottom: 0 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image + Info Section */}
        <div className="row g-4 g-lg-5 align-items-center mb-5">
          <div className="col-12 col-lg-6 service-process-img">
            <img
              src="https://images.unsplash.com/photo-1553729459-afe92b1b29c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Delivery"
              className="w-100"
              style={{ borderRadius: "16px", boxShadow: "0 15px 35px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.05)", height: "320px", objectFit: "cover" }}
            />
          </div>
          <div className="col-12 col-lg-6">
            <h3 style={{ fontWeight: "700", marginBottom: "15px", color: "#0F172A" }}>
              Fast & Reliable Delivery
            </h3>
            <p style={{ color: "#64748b", lineHeight: "1.8", marginBottom: "20px" }}>
              We partner with trusted courier services to ensure your books reach you safely and on time.
              From Karachi to Lahore, Islamabad to Peshawar, we deliver everywhere in Pakistan.
            </p>
            <p style={{ color: "#64748b", lineHeight: "1.8", marginBottom: "20px" }}>
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
          <h2 style={{ fontWeight: "700", marginBottom: "15px" }}>
            Ready to Order Your Favorite Books?
          </h2>
          <p style={{ opacity: 0.85, maxWidth: "500px", margin: "0 auto" }}>
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
