import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaBookOpen,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaPaperPlane,
  } from "react-icons/fa";
  
  export default function Footer() {
    const styles = {
      footer: {
        background:
          "linear-gradient(135deg,#000000,#1E293B,#000000)",
        color: "#fff",
        marginTop: "80px",
        padding: "70px 0 20px",
      },
  
      title: {
        color: "#ffffff",
        fontWeight: "700",
        marginBottom: "20px",
      },
  
      link: {
        display: "block",
        color: "#ddd",
        textDecoration: "none",
        marginBottom: "12px",
        transition: ".3s",
      },
  
      social: {
        width: "45px",
        height: "45px",
        borderRadius: "50%",
        background: "rgba(255,255,255,.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textDecoration: "none",
        transition: ".4s",
      },
  
      input: {
        borderRadius: "30px",
        border: "none",
        padding: "12px 18px",
        width: "100%",
        marginBottom: "15px",
      },
  
      button: {
        width: "100%",
        border: "none",
        borderRadius: "30px",
        padding: "12px",
        background: "#ffffff",
        fontWeight: "600",
        transition: ".3s",
        color: "#111010",
        cursor: "pointer",
      },
  
      bottom: {
        borderTop: "1px solid rgba(0, 0, 0, 0.2)",
        marginTop: "40px",
        paddingTop: "20px",
        textAlign: "center",
        color: "#ccc",
      },
    };
  
    return (
      <>
        <style>{`
          .footer-link:hover{
            color:#white !important;
            transform:translateX(8px);
          }
  
          .social-icon:hover{
            background:#black !important;
            color:#111 !important;
            transform:translateY(-8px) rotate(360deg);
          }
  
          .subscribe-btn:hover{
            transform:scale(1.05);
            background:#white !important;
            box-shadow:0 10px 25px hsl(0, 0%, 100%);
          }
  
          .footer-title{
            position:relative;
            display:inline-block;
          }
  
          .footer-title::after{
            content:"";
            position:absolute;
            left:0;
            bottom:-8px;
            width:60%;
            height:3px;
            background:#white;
            border-radius:10px;
          }
  
          .footer{
            animation:fadeUp 1s ease;
          }
  
          @keyframes fadeUp{
            from{
              opacity:0;
              transform:translateY(50px);
            }
            to{
              opacity:1;
              transform:translateY(0);
            }
          }
  
          @media(max-width:768px){
  
            .footer-column{
              margin-bottom:40px;
              text-align:center;
            }
  
            .social-group{
              justify-content:center !important;
            }
  
          }
        `}</style>
  
        <footer className="footer" style={styles.footer}>
          <div className="container">
  
            <div className="row">
  
              {/* Brand */}
  
              <div className="col-lg-4 footer-column">
  
                <h2 className="footer-title" style={styles.title}>
                  <FaBookOpen /> BookExpress
                </h2>
  
                <p style={{ color: "#ddd", lineHeight: "1.8" }}>
                  Discover thousands of books, novels, educational
                  resources and best sellers. Reading opens the door
                  to endless possibilities.
                </p>
  
                <div
                  className="d-flex gap-3 social-group mt-4"
                >
                  <a href="#" className="social-icon" style={styles.social}>
                    <FaFacebookF />
                  </a>
  
                  <a href="#" className="social-icon" style={styles.social}>
                    <FaInstagram />
                  </a>
  
                  <a href="#" className="social-icon" style={styles.social}>
                    <FaTwitter />
                  </a>
  
                  <a href="#" className="social-icon" style={styles.social}>
                    <FaLinkedinIn />
                  </a>
                </div>
  
              </div>
  
              {/* Quick Links */}
  
              <div className="col-lg-2 footer-column">
  
                <h4 className="footer-title" style={styles.title}>
                  Quick Links
                </h4>
  
                <a href="#" className="footer-link" style={styles.link}>
                  Home
                </a>
  
                <a href="#" className="footer-link" style={styles.link}>
                  Books
                </a>
  
                <a href="#" className="footer-link" style={styles.link}>
                  Categories
                </a>
  
                <a href="#" className="footer-link" style={styles.link}>
                  Best Sellers
                </a>
  
                <a href="#" className="footer-link" style={styles.link}>
                  Contact
                </a>
  
              </div>
  
              {/* Contact */}
  
              <div className="col-lg-3 footer-column">
  
                <h4 className="footer-title" style={styles.title}>
                  Contact
                </h4>
  
                <p>
                  <FaMapMarkerAlt color="#fffef9" /> Karachi,
                  Pakistan
                </p>
  
                <p>
                  <FaPhoneAlt color="#f1f0e8" /> +92 300 1234567
                </p>
  
                <p>
                  <FaEnvelope color="#f5f3f3" /> info@bookexpress.com
                </p>
  
              </div>
  
              {/* Newsletter */}
  
              <div className="col-lg-3 footer-column">
  
                <h4 className="footer-title" style={styles.title}>
                  Newsletter
                </h4>
  
                <p style={{ color: "#ddd" }}>
                  Subscribe to receive the latest book offers.
                </p>
  
                <input
                  type="email"
                  placeholder="Your Email"
                  style={styles.input}
                />
  
                <button
                  className="subscribe-btn"
                  style={styles.button}
                >
                  <FaPaperPlane /> Subscribe
                </button>
  
              </div>
  
            </div>
  
            <div style={styles.bottom}>
            </div>
  
          </div>
        </footer>
      </>
    );
  }