import { Link } from 'react-router-dom';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import {
  FaBookOpen,
  FaShippingFast,
  FaHeadset,
  FaLock,
} from 'react-icons/fa';

function AboutUs() {
  const styles = {
    hero: {
      background: "linear-gradient(135deg, #000000 0%, #111111 100%)",
      minHeight: "clamp(280px, 50vw, 380px)",
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
    featureCard: {
      background: "#fff",
      borderRadius: "16px",
      padding: "clamp(20px, 3vw, 35px) clamp(15px, 2vw, 25px)",
      textAlign: "center",
      boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
      border: "1px solid rgba(0,0,0,0.04)",
      height: "100%",
      transition: "0.35s",
    },
    iconBox: {
      width: "clamp(50px, 7vw, 70px)",
      height: "clamp(50px, 7vw, 70px)",
      borderRadius: "20px",
      background: "linear-gradient(135deg,#000000,#111111)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "clamp(20px, 4vw, 28px)",
      marginBottom: "clamp(12px, 2vw, 20px)",
    },
    counterCard: {
      background: "linear-gradient(135deg,#000000,#111111)",
      color: "#fff",
      padding: "clamp(25px, 3vw, 40px) 20px",
      borderRadius: "16px",
      textAlign: "center",
      height: "100%",
    },
    teamCard: {
      background: "#fff",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
      border: "1px solid rgba(0,0,0,0.04)",
      transition: "0.35s",
    },
    ctaSection: {
      background: "#000000",
      borderRadius: "16px",
      padding: "clamp(35px, 5vw, 60px) clamp(20px, 3vw, 40px)",
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
    teamImg: {
      width: "100%",
      height: "clamp(200px, 25vw, 280px)",
      objectFit: "cover",
      transition: "0.5s",
    },
    sectionImg: {
      width: "100%",
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
      border: "1px solid rgba(0,0,0,0.04)",
    },
  };

  const features = [
    {
      icon: <FaBookOpen />,
      title: "10,000+ Books",
      desc: "Explore every genre in one place, from fiction to educational resources.",
    },
    {
      icon: <FaShippingFast />,
      title: "Fast Delivery",
      desc: "Quick shipping across Pakistan with real-time order tracking.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Our dedicated team is always ready to help you with any query.",
    },
    {
      icon: <FaLock />,
      title: "Secure Shopping",
      desc: "Your data and payments are protected with industry-leading security.",
    },
  ];

  const team = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Sarah Lee",
      role: "Marketing Head",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "David Brown",
      role: "Support Manager",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Emily Davis",
      role: "Product Curator",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop=w=600&q=80",
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Readers" },
    { number: "15K+", label: "Books Available" },
    { number: "500+", label: "Authors" },
    { number: "99%", label: "Satisfaction Rate" },
  ];

  return (
    <>
      <style>{`
        .about-feature-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.12) !important;
        }
        .about-feature-card:hover .about-icon-box {
          transform: scale(1.1) rotate(5deg);
        }
        .about-team-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.15) !important;
        }
        .about-team-card:hover img {
          transform: scale(1.1);
        }
        .about-cta-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        @media(max-width:1200px){
          .about-hero-content h1 {
            font-size: 2.8rem !important;
          }
        }

        @media(max-width:992px){
          .about-hero-content h1 {
            font-size: 2.4rem !important;
          }
          .about-hero-content p {
            font-size: 1.05rem !important;
          }
          .about-img {
            margin-bottom: 25px;
          }
          .about-section-reverse {
            display: flex;
            flex-direction: column-reverse;
          }
        }

        @media(max-width:768px){
          .about-hero-content h1 {
            font-size: 2rem !important;
          }
          .about-hero-content p {
            font-size: 0.95rem !important;
          }
          .about-img {
            margin-bottom: 30px;
          }
        }

        @media(max-width:576px){
          .about-hero-content h1 {
            font-size: 1.6rem !important;
          }
          .about-hero-content p {
            font-size: 0.85rem !important;
          }
          .about-counter h2 {
            font-size: 1.6rem !important;
          }
          .about-counter p {
            font-size: 0.8rem !important;
          }
          .about-team-img {
            height: 200px !important;
          }
        }

        @media(max-width:480px){
          .about-hero-content h1 {
            font-size: 1.4rem !important;
          }
          .about-hero-content p {
            font-size: 0.8rem !important;
          }
          .about-counter h2 {
            font-size: 1.4rem !important;
          }
          .about-team-img {
            height: 180px !important;
          }
          .container {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
        }
      `}</style>

      <Navbar />

      {/* Hero */}
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <div className="about-hero-content">
            <h1 style={{ fontSize: "clamp(1.6rem, 4.5vw, 3.2rem)", fontWeight: "700", marginBottom: "15px" }}>
              About ExpressBook
            </h1>
            <p style={{ fontSize: "clamp(0.85rem, 2vw, 1.2rem)", opacity: 0.9, maxWidth: "600px", margin: "0 auto" }}>
              Your Gateway to Unlimited Knowledge
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginBottom: "clamp(40px, 6vw, 80px)", paddingLeft: "clamp(12px, 2vw, 24px)", paddingRight: "clamp(12px, 2vw, 24px)" }}>
        {/* About Section */}
        <div className="row g-3 g-md-4 g-lg-5 align-items-center mb-4 mb-md-5">
          <div className="col-12 col-lg-6 about-img">
            <div
              style={{
                ...styles.sectionImg,
                borderRadius: "16px",
                backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "clamp(220px, 30vw, 340px)",
              }}
            ></div>
          </div>
          <div className="col-12 col-lg-6">
            <h2 style={{ fontWeight: "700", marginBottom: "20px", color: "#0F172A", fontSize: "clamp(1.3rem, 3vw, 1.75rem)" }}>
              Who We Are
            </h2>
            <p style={{ color: "#334155", lineHeight: "1.8", marginBottom: "15px", fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}>
              ExpressBook is an online bookstore created for readers who love learning, exploring,
              and discovering new ideas. We offer a wide range of books from bestselling novels to
              educational resources.
            </p>
            <p style={{ color: "#334155", lineHeight: "1.8", marginBottom: "20px", fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}>
              Our mission is to make books accessible to everyone through affordable prices, secure
              shopping, and fast delivery across Pakistan. We believe that reading opens the door
              to endless possibilities.
            </p>
            <div className="row g-2 g-md-3">
              <div className="col-6">
                <div style={{ background: "#F8FAFC", padding: "clamp(15px, 2vw, 20px)", borderRadius: "12px", textAlign: "center", border: "1px solid rgba(0,0,0,0.04)" }}>
                  <h4 style={{ fontWeight: "700", color: "#0F172A", marginBottom: "5px", fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)" }}>10K+</h4>
                  <p style={{ color: "#64748b", margin: 0, fontSize: "clamp(0.75rem, 1.5vw, 0.85rem)" }}>Books Collection</p>
                </div>
              </div>
              <div className="col-6">
                <div style={{ background: "#F8FAFC", padding: "clamp(15px, 2vw, 20px)", borderRadius: "12px", textAlign: "center", border: "1px solid rgba(0,0,0,0.04)" }}>
                  <h4 style={{ fontWeight: "700", color: "#0F172A", marginBottom: "5px", fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)" }}>50K+</h4>
                  <p style={{ color: "#64748b", margin: 0, fontSize: "clamp(0.75rem, 1.5vw, 0.85rem)" }}>Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-4 mb-md-5 px-2">
          <h2 style={{ fontWeight: "700", marginBottom: "10px", color: "#0F172A", fontSize: "clamp(1.3rem, 3vw, 1.75rem)" }}>
            Why Choose Us
          </h2>
          <p style={{ color: "#64748b", maxWidth: "600px", margin: "0 auto", fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}>
            We are committed to providing the best book shopping experience.
          </p>
        </div>

        <div className="row g-3 g-md-4 mb-4 mb-md-5">
          {features.map((feature, index) => (
            <div className="col-12 col-sm-6 col-lg-3" key={index}>
              <div className="about-feature-card" style={styles.featureCard}>
                <div className="about-icon-box" style={styles.iconBox}>
                  {feature.icon}
                </div>
                <h5 style={{ fontWeight: "600", marginBottom: "12px", color: "#0F172A", fontSize: "clamp(0.95rem, 2vw, 1.05rem)" }}>
                  {feature.title}
                </h5>
                <p style={{ color: "#64748b", lineHeight: "1.7", marginBottom: 0, fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)" }}>
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Our Story Section */}
        <div className="row g-3 g-md-4 g-lg-5 align-items-center mb-4 mb-md-5 about-section-reverse">
          <div className="col-12 col-lg-6 order-lg-2">
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop=w=800&q=80"
              alt="Our Story"
              className="w-100"
              style={styles.sectionImg}
            />
          </div>
          <div className="col-12 col-lg-6 order-lg-1">
            <h2 style={{ fontWeight: "700", marginBottom: "20px", color: "#0F172A", fontSize: "clamp(1.3rem, 3vw, 1.75rem)" }}>
              Our Story
            </h2>
            <p style={{ color: "#334155", lineHeight: "1.8", marginBottom: "15px", fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}>
              Founded in 2020, ExpressBook started with a simple idea: make quality books available
              to everyone in Pakistan at affordable prices. What began as a small online store has
              grown into one of the most trusted book retailers in the country.
            </p>
            <p style={{ color: "#334155", lineHeight: "1.8", marginBottom: "20px", fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}>
              Today, we serve over 50,000 happy readers and continue to expand our collection with
              the latest releases, timeless classics, and educational materials for students and
              professionals alike.
            </p>
            <div className="d-flex gap-2 gap-md-3 flex-wrap">
              <span style={{ background: "#0F172A", color: "#fff", padding: "8px clamp(12px, 2vw, 18px)", borderRadius: "30px", fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)" }}>
                Trusted by 50K+ Readers
              </span>
              <span style={{ background: "#EFF6FF", color: "#1E3A8A", padding: "8px clamp(12px, 2vw, 18px)", borderRadius: "30px", fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)" }}>
                Nationwide Delivery
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="row g-3 g-md-4 mb-4 mb-md-5">
          {stats.map((stat, index) => (
            <div className="col-6 col-md-3" key={index}>
              <div className="about-counter" style={styles.counterCard}>
                <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: "700", marginBottom: "5px" }}>{stat.number}</h2>
                <p style={{ opacity: 0.85, margin: 0, fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)" }}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="text-center mb-4 mb-md-5 px-2">
          <h2 style={{ fontWeight: "700", marginBottom: "10px", color: "#0F172A", fontSize: "clamp(1.3rem, 3vw, 1.75rem)" }}>
            Meet Our Team
          </h2>
          <p style={{ color: "#64748b", maxWidth: "600px", margin: "0 auto", fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}>
            The passionate people behind ExpressBook.
          </p>
        </div>

        <div className="row g-3 g-md-4 mb-4 mb-md-5">
          {team.map((member, index) => (
            <div className="col-12 col-sm-6 col-lg-3" key={index}>
              <div className="about-team-card" style={styles.teamCard}>
                <img
                  src={member.img}
                  alt={member.name}
                  className="about-team-img"
                  style={styles.teamImg}
                />
                <div style={{ padding: "clamp(15px, 2vw, 20px)", textAlign: "center" }}>
                  <h5 style={{ fontWeight: "600", marginBottom: "5px", color: "#0F172A", fontSize: "clamp(0.95rem, 2vw, 1.05rem)" }}>
                    {member.name}
                  </h5>
                  <p style={{ color: "#64748b", margin: 0, fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)" }}>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-4 mb-md-5 px-2">
          <h2 style={{ fontWeight: "700", marginBottom: "10px", color: "#0F172A", fontSize: "clamp(1.3rem, 3vw, 1.75rem)" }}>
            What Our Customers Say
          </h2>
        </div>

        <div className="row g-3 g-md-4 mb-4 mb-md-5">
          <div className="col-12 col-md-4">
            <div style={{ background: "#fff", borderRadius: "16px", padding: "clamp(20px, 3vw, 30px)", boxShadow: "0 10px 30px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.04)", height: "100%" }}>
              <p style={{ color: "#334155", lineHeight: "1.8", marginBottom: "20px", fontStyle: "italic", fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}>
                "ExpressBook has the best collection of books in Pakistan. Fast delivery and great prices!"
              </p>
              <div className="d-flex align-items-center gap-2 gap-md-3">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop=w=100&q=80" alt="Customer" style={{ width: "clamp(40px, 6vw, 50px)", height: "clamp(40px, 6vw, 50px)", borderRadius: "50%", objectFit: "cover" }} />
                <div>
                  <h6 style={{ fontWeight: "600", margin: 0, color: "#0F172A", fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}>Amina Khan</h6>
                  <p style={{ color: "#64748b", margin: 0, fontSize: "clamp(0.75rem, 1.2vw, 0.85rem)" }}>Lahore</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div style={{ background: "#fff", borderRadius: "16px", padding: "clamp(20px, 3vw, 30px)", boxShadow: "0 10px 30px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.04)", height: "100%" }}>
              <p style={{ color: "#334155", lineHeight: "1.8", marginBottom: "20px", fontStyle: "italic", fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}>
                "I love how easy it is to find and order books. The customer service is excellent too!"
              </p>
              <div className="d-flex align-items-center gap-2 gap-md-3">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop=w=100&q=80" alt="Customer" style={{ width: "clamp(40px, 6vw, 50px)", height: "clamp(40px, 6vw, 50px)", borderRadius: "50%", objectFit: "cover" }} />
                <div>
                  <h6 style={{ fontWeight: "600", margin: 0, color: "#0F172A", fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}>Ali Hassan</h6>
                  <p style={{ color: "#64748b", margin: 0, fontSize: "clamp(0.75rem, 1.2vw, 0.85rem)" }}>Karachi</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div style={{ background: "#fff", borderRadius: "16px", padding: "clamp(20px, 3vw, 30px)", boxShadow: "0 10px 30px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.04)", height: "100%" }}>
              <p style={{ color: "#334155", lineHeight: "1.8", marginBottom: "20px", fontStyle: "italic", fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}>
                "Best online bookstore! Great discounts and the books always arrive in perfect condition."
              </p>
              <div className="d-flex align-items-center gap-2 gap-md-3">
                <img src="https://images.unsplash.com/photo-1438761681493-9a945f8ed8f9?ixlib=rb-4.0.3&auto=format&fit=crop=w=100&q=80" alt="Customer" style={{ width: "clamp(40px, 6vw, 50px)", height: "clamp(40px, 6vw, 50px)", borderRadius: "50%", objectFit: "cover" }} />
                <div>
                  <h6 style={{ fontWeight: "600", margin: 0, color: "#0F172A", fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}>Sara Ahmed</h6>
                  <p style={{ color: "#64748b", margin: 0, fontSize: "clamp(0.75rem, 1.2vw, 0.85rem)" }}>Islamabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={styles.ctaSection}>
          <h2 style={{ fontWeight: "700", marginBottom: "15px", fontSize: "clamp(1.2rem, 3vw, 1.75rem)" }}>
            Ready to Discover Your Next Book?
          </h2>
          <p style={{ opacity: 0.85, maxWidth: "500px", margin: "0 auto", fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}>
            Browse thousands of amazing books today and enjoy fast delivery across Pakistan.
          </p>
          <Link to="/" className="about-cta-btn" style={styles.ctaBtn}>
            Explore Now
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AboutUs;