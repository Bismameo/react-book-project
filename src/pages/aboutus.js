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
      backgroundImage:
        "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "380px",
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
    featureCard: {
      background: "#fff",
      borderRadius: "16px",
      padding: "35px 25px",
      textAlign: "center",
      boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
      border: "1px solid rgba(0,0,0,0.05)",
      height: "100%",
      transition: "0.35s",
    },
    iconBox: {
      width: "70px",
      height: "70px",
      borderRadius: "20px",
      background: "linear-gradient(135deg,#0F172A,#1E3A8A)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "28px",
      marginBottom: "20px",
    },
    counterCard: {
      background: "linear-gradient(135deg,#0F172A,#1E3A8A)",
      color: "#fff",
      padding: "40px 20px",
      borderRadius: "16px",
      textAlign: "center",
      height: "100%",
    },
    teamCard: {
      background: "#fff",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
      border: "1px solid rgba(0,0,0,0.05)",
      transition: "0.35s",
    },
    ctaSection: {
      background: "linear-gradient(135deg,#0F172A,#1E3A8A)",
      borderRadius: "16px",
      padding: "60px 40px",
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
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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

        @media(max-width:768px){
          .about-hero-content h1 {
            font-size: 2.2rem !important;
          }
          .about-hero-content p {
            font-size: 1rem !important;
          }
          .about-img {
            margin-bottom: 30px;
          }
          .about-section-reverse {
            display: flex;
            flex-direction: column-reverse;
          }
        }

        @media(max-width:480px){
          .about-hero-content h1 {
            font-size: 1.8rem !important;
          }
          .about-hero-content p {
            font-size: 0.9rem !important;
          }
          .about-counter h2 {
            font-size: 2rem !important;
          }
          .about-team-img {
            height: 220px !important;
          }
        }
      `}</style>

      <Navbar />

      {/* Hero */}
      <div style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <div className="about-hero-content">
            <h1 style={{ fontSize: "3.2rem", fontWeight: "700", marginBottom: "15px" }}>
              About ExpressBook
            </h1>
            <p style={{ fontSize: "1.2rem", opacity: 0.9, maxWidth: "600px", margin: "0 auto" }}>
              Your Gateway to Unlimited Knowledge
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginBottom: "80px" }}>
        {/* About Section */}
        <div className="row g-5 align-items-center mb-5">
          <div className="col-lg-6 about-img">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a2f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="About ExpressBook"
              className="w-100"
              style={{ borderRadius: "16px", boxShadow: "0 15px 35px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.05)" }}
            />
          </div>
          <div className="col-lg-6">
            <h2 style={{ fontWeight: "700", marginBottom: "20px", color: "#0F172A" }}>
              Who We Are
            </h2>
            <p style={{ color: "#334155", lineHeight: "1.8", marginBottom: "15px" }}>
              ExpressBook is an online bookstore created for readers who love learning, exploring,
              and discovering new ideas. We offer a wide range of books from bestselling novels to
              educational resources.
            </p>
            <p style={{ color: "#334155", lineHeight: "1.8", marginBottom: "20px" }}>
              Our mission is to make books accessible to everyone through affordable prices, secure
              shopping, and fast delivery across Pakistan. We believe that reading opens the door
              to endless possibilities.
            </p>
            <div className="row g-3">
              <div className="col-6">
                <div style={{ background: "#F8FAFC", padding: "20px", borderRadius: "12px", textAlign: "center" }}>
                  <h4 style={{ fontWeight: "700", color: "#0F172A", marginBottom: "5px" }}>10K+</h4>
                  <p style={{ color: "#64748b", margin: 0, fontSize: "14px" }}>Books Collection</p>
                </div>
              </div>
              <div className="col-6">
                <div style={{ background: "#F8FAFC", padding: "20px", borderRadius: "12px", textAlign: "center" }}>
                  <h4 style={{ fontWeight: "700", color: "#0F172A", marginBottom: "5px" }}>50K+</h4>
                  <p style={{ color: "#64748b", margin: 0, fontSize: "14px" }}>Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-5">
          <h2 style={{ fontWeight: "700", marginBottom: "10px", color: "#0F172A" }}>
            Why Choose Us
          </h2>
          <p style={{ color: "#64748b", maxWidth: "600px", margin: "0 auto" }}>
            We are committed to providing the best book shopping experience.
          </p>
        </div>

        <div className="row g-4 mb-5">
          {features.map((feature, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="about-feature-card" style={styles.featureCard}>
                <div className="about-icon-box" style={styles.iconBox}>
                  {feature.icon}
                </div>
                <h5 style={{ fontWeight: "600", marginBottom: "12px", color: "#0F172A" }}>
                  {feature.title}
                </h5>
                <p style={{ color: "#64748b", lineHeight: "1.7", marginBottom: 0 }}>
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Our Story Section */}
        <div className="row g-5 align-items-center mb-5 about-section-reverse">
          <div className="col-lg-6 order-lg-2">
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Our Story"
              className="w-100"
              style={{ borderRadius: "16px", boxShadow: "0 15px 35px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.05)" }}
            />
          </div>
          <div className="col-lg-6 order-lg-1">
            <h2 style={{ fontWeight: "700", marginBottom: "20px", color: "#0F172A" }}>
              Our Story
            </h2>
            <p style={{ color: "#334155", lineHeight: "1.8", marginBottom: "15px" }}>
              Founded in 2020, ExpressBook started with a simple idea: make quality books available
              to everyone in Pakistan at affordable prices. What began as a small online store has
              grown into one of the most trusted book retailers in the country.
            </p>
            <p style={{ color: "#334155", lineHeight: "1.8", marginBottom: "20px" }}>
              Today, we serve over 50,000 happy readers and continue to expand our collection with
              the latest releases, timeless classics, and educational materials for students and
              professionals alike.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <span style={{ background: "#0F172A", color: "#fff", padding: "8px 18px", borderRadius: "30px", fontSize: "14px" }}>
                Trusted by 50K+ Readers
              </span>
              <span style={{ background: "#EFF6FF", color: "#1E3A8A", padding: "8px 18px", borderRadius: "30px", fontSize: "14px" }}>
                Nationwide Delivery
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="row g-4 mb-5">
          {stats.map((stat, index) => (
            <div className="col-6 col-md-3" key={index}>
              <div className="about-counter" style={styles.counterCard}>
                <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "5px" }}>{stat.number}</h2>
                <p style={{ opacity: 0.85, margin: 0 }}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="text-center mb-5">
          <h2 style={{ fontWeight: "700", marginBottom: "10px", color: "#0F172A" }}>
            Meet Our Team
          </h2>
          <p style={{ color: "#64748b", maxWidth: "600px", margin: "0 auto" }}>
            The passionate people behind ExpressBook.
          </p>
        </div>

        <div className="row g-4 mb-5">
          {team.map((member, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="about-team-card" style={styles.teamCard}>
                <img
                  src={member.img}
                  alt={member.name}
                  className="about-team-img"
                  style={{ width: "100%", height: "280px", objectFit: "cover", transition: "0.5s" }}
                />
                <div style={{ padding: "20px", textAlign: "center" }}>
                  <h5 style={{ fontWeight: "600", marginBottom: "5px", color: "#0F172A" }}>
                    {member.name}
                  </h5>
                  <p style={{ color: "#64748b", margin: 0, fontSize: "14px" }}>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-5">
          <h2 style={{ fontWeight: "700", marginBottom: "10px", color: "#0F172A" }}>
            What Our Customers Say
          </h2>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div style={{ background: "#fff", borderRadius: "16px", padding: "30px", boxShadow: "0 15px 35px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.05)", height: "100%" }}>
              <p style={{ color: "#334155", lineHeight: "1.8", marginBottom: "20px", fontStyle: "italic" }}>
                "ExpressBook has the best collection of books in Pakistan. Fast delivery and great prices!"
              </p>
              <div className="d-flex align-items-center gap-3">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Customer" style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" }} />
                <div>
                  <h6 style={{ fontWeight: "600", margin: 0, color: "#0F172A" }}>Amina Khan</h6>
                  <p style={{ color: "#64748b", margin: 0, fontSize: "13px" }}>Lahore</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div style={{ background: "#fff", borderRadius: "16px", padding: "30px", boxShadow: "0 15px 35px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.05)", height: "100%" }}>
              <p style={{ color: "#334155", lineHeight: "1.8", marginBottom: "20px", fontStyle: "italic" }}>
                "I love how easy it is to find and order books. The customer service is excellent too!"
              </p>
              <div className="d-flex align-items-center gap-3">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Customer" style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" }} />
                <div>
                  <h6 style={{ fontWeight: "600", margin: 0, color: "#0F172A" }}>Ali Hassan</h6>
                  <p style={{ color: "#64748b", margin: 0, fontSize: "13px" }}>Karachi</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div style={{ background: "#fff", borderRadius: "16px", padding: "30px", boxShadow: "0 15px 35px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.05)", height: "100%" }}>
              <p style={{ color: "#334155", lineHeight: "1.8", marginBottom: "20px", fontStyle: "italic" }}>
                "Best online bookstore! Great discounts and the books always arrive in perfect condition."
              </p>
              <div className="d-flex align-items-center gap-3">
                <img src="https://images.unsplash.com/photo-1438761681493-9a945f8ed8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Customer" style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" }} />
                <div>
                  <h6 style={{ fontWeight: "600", margin: 0, color: "#0F172A" }}>Sara Ahmed</h6>
                  <p style={{ color: "#64748b", margin: 0, fontSize: "13px" }}>Islamabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={styles.ctaSection}>
          <h2 style={{ fontWeight: "700", marginBottom: "15px" }}>
            Ready to Discover Your Next Book?
          </h2>
          <p style={{ opacity: 0.85, maxWidth: "500px", margin: "0 auto" }}>
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
