import Navbar from "../component/navbar";
import Footer from "../component/footer";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPaperPlane,
  FaBookOpen,
} from "react-icons/fa";

function ContactUs() {
  const styles = {
    hero: {
      backgroundImage:
        "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "400px",
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
      background:
        "linear-gradient(135deg, rgba(0,0,0,0.78), rgba(15,23,42,0.78))",
    },
    heroContent: {
      position: "relative",
      zIndex: 1,
    },
    contactCard: {
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
      width: "55px",
      height: "55px",
      borderRadius: "16px",
      background: "linear-gradient(135deg,#0F172A,#1E3A8A)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "20px",
      marginBottom: "15px",
    },
    infoText: {
      color: "#334155",
      lineHeight: "1.7",
      marginBottom: "8px",
      fontSize: "0.95rem",
    },
    formCard: {
      background: "#fff",
      borderRadius: "16px",
      padding: "35px",
      boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
      border: "1px solid rgba(0,0,0,0.05)",
    },
    input: {
      borderRadius: "10px",
      border: "1px solid #e2e8f0",
      padding: "12px 16px",
      width: "100%",
      marginBottom: "18px",
      fontSize: "15px",
      transition: "0.3s",
      outline: "none",
    },
    textarea: {
      borderRadius: "10px",
      border: "1px solid #e2e8f0",
      padding: "12px 16px",
      width: "100%",
      minHeight: "140px",
      marginBottom: "18px",
      fontSize: "15px",
      transition: "0.3s",
      outline: "none",
      resize: "vertical",
    },
    submitBtn: {
      background: "linear-gradient(135deg,#0F172A,#1E3A8A)",
      color: "#fff",
      border: "none",
      borderRadius: "30px",
      padding: "14px 40px",
      fontWeight: "600",
      fontSize: "16px",
      cursor: "pointer",
      transition: "0.35s",
      width: "100%",
    },
    mapSection: {
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
      marginTop: "50px",
      border: "1px solid rgba(0,0,0,0.05)",
    },
    socialBtn: {
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.1)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      transition: "0.35s",
      marginRight: "10px",
      fontSize: "18px",
    },
  };

  return (
    <>
      <style>{`
        @media(max-width:992px){
          .contact-hero {
            min-height: 320px;
          }
          .contact-hero h1 {
            font-size: 2.4rem !important;
          }
          .contact-hero p {
            font-size: 1.1rem !important;
          }
        }

        @media(max-width:768px){
          .contact-hero {
            min-height: 280px;
          }
          .contact-hero h1 {
            font-size: 2rem !important;
          }
          .contact-hero p {
            font-size: 1rem !important;
          }
          .contact-card {
            padding: 25px 15px !important;
          }
          .contact-icon-box {
            width: 50px !important;
            height: 50px !important;
            font-size: 18px !important;
          }
          .contact-card h5 {
            font-size: 1.05rem !important;
          }
          .contact-form-card {
            padding: 25px !important;
          }
          .contact-side-img {
            height: 220px !important;
          }
        }

        @media(max-width:480px){
          .contact-hero {
            min-height: 240px !important;
            margin-bottom: 40px !important;
          }
          .contact-hero h1 {
            font-size: 1.6rem !important;
          }
          .contact-hero p {
            font-size: 0.9rem !important;
          }
          .contact-card {
            padding: 20px 12px !important;
          }
          .contact-icon-box {
            width: 45px !important;
            height: 45px !important;
            font-size: 16px !important;
            margin-bottom: 10px !important;
          }
          .contact-card h5 {
            font-size: 0.95rem !important;
          }
          .contact-info-text {
            font-size: 0.85rem !important;
          }
          .contact-form-card {
            padding: 20px !important;
          }
          .contact-form-card h2 {
            font-size: 1.3rem !important;
          }
          .contact-form-card p {
            font-size: 0.9rem !important;
          }
          .contact-form-card input,
          .contact-form-card textarea {
            padding: 10px 14px !important;
            font-size: 14px !important;
          }
          .contact-side-img {
            height: 180px !important;
          }
          .contact-social-btn {
            width: 40px !important;
            height: 40px !important;
            font-size: 16px !important;
          }
          .contact-community h4 {
            font-size: 1.1rem !important;
          }
          .contact-community p {
            font-size: 0.85rem !important;
          }
          .map-section iframe {
            height: 250px !important;
          }
          .container {
            margin-bottom: 50px !important;
          }
        }
      `}</style>

      <Navbar />

      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <div className="contact-hero">
            <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "15px" }}>
              Contact Us
            </h1>
            <p style={{ fontSize: "1.15rem", opacity: 0.9, maxWidth: "600px", margin: "0 auto" }}>
              We'd love to hear from you. Reach out and let's start a conversation.
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginBottom: "80px" }}>
        {/* Contact Info Cards */}
        <div className="row g-4 mb-5">
          <div className="col-12 col-md-6 col-lg-3">
            <div style={styles.contactCard}>
              <div className="contact-icon-box" style={styles.iconBox}>
                <FaMapMarkerAlt />
              </div>
              <h5 style={{ fontWeight: "600", marginBottom: "10px", color: "#0F172A" }}>
                Our Address
              </h5>
              <p className="contact-info-text" style={styles.infoText}>
                123 Book Street, Saddar, Karachi, Pakistan
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div style={styles.contactCard}>
              <div className="contact-icon-box" style={styles.iconBox}>
                <FaPhoneAlt />
              </div>
              <h5 style={{ fontWeight: "600", marginBottom: "10px", color: "#0F172A" }}>
                Phone Number
              </h5>
              <p className="contact-info-text" style={styles.infoText}>+92 300 1234567</p>
              <p className="contact-info-text" style={styles.infoText}>+92 21 1234567</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div style={styles.contactCard}>
              <div className="contact-icon-box" style={styles.iconBox}>
                <FaEnvelope />
              </div>
              <h5 style={{ fontWeight: "600", marginBottom: "10px", color: "#0F172A" }}>
                Email Address
              </h5>
              <p className="contact-info-text" style={styles.infoText}>info@bookexpress.com</p>
              <p className="contact-info-text" style={styles.infoText}>support@bookexpress.com</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div style={styles.contactCard}>
              <div className="contact-icon-box" style={styles.iconBox}>
                <FaClock />
              </div>
              <h5 style={{ fontWeight: "600", marginBottom: "10px", color: "#0F172A" }}>
                Business Hours
              </h5>
              <p className="contact-info-text" style={styles.infoText}>Mon - Fri: 9:00 AM - 8:00 PM</p>
              <p className="contact-info-text" style={styles.infoText}>Sat - Sun: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Form + Image Section */}
        <div className="row g-4 g-lg-5 align-items-start">
          <div className="col-12 col-lg-7">
            <div className="contact-form-card" style={styles.formCard}>
              <h2 style={{ fontWeight: "700", marginBottom: "8px", color: "#0F172A" }}>
                Send Us a Message
              </h2>
              <p style={{ color: "#64748b", marginBottom: "25px" }}>
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      style={styles.input}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      style={styles.input}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      style={styles.input}
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Write your message..."
                      style={styles.textarea}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn" style={styles.submitBtn}>
                      <FaPaperPlane style={{ marginRight: "8px" }} />
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
                marginBottom: "20px",
                border: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1507842217121-9e963db99c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Library"
                className="contact-side-img"
                style={{ width: "100%", height: "280px", objectFit: "cover", display: "block" }}
              />
            </div>

            <div
              className="contact-community"
              style={{
                background: "linear-gradient(135deg,#0F172A,#1E3A8A)",
                borderRadius: "16px",
                padding: "30px",
                color: "#fff",
                textAlign: "center",
              }}
            >
              <FaBookOpen style={{ fontSize: "40px", marginBottom: "15px" }} />
              <h4 style={{ fontWeight: "600", marginBottom: "10px" }}>
                Join Our Community
              </h4>
              <p style={{ opacity: 0.85, marginBottom: "20px" }}>
                Follow us on social media for book recommendations and exclusive offers.
              </p>
              <div>
                <a href="https://facebook.com" className="contact-social-btn" style={styles.socialBtn}>
                  <FaFacebookF />
                </a>
                <a href="https://instagram.com" className="contact-social-btn" style={styles.socialBtn}>
                  <FaInstagram />
                </a>
                <a href="https://twitter.com" className="contact-social-btn" style={styles.socialBtn}>
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com" className="contact-social-btn" style={styles.socialBtn}>
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section" style={styles.mapSection}>
          <iframe
            title="BookExpress Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14471.18853530897!2d67.0011!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dde7a8f3b8b%3A0x6b3e4b4c8c3b3b3b!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1690000000000"
            width="100%"
            height="400"
            style={{ border: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactUs;
