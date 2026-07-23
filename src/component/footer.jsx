import { Link } from 'react-router-dom';
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
        background: "#000000",
        color: "#fff",
        marginTop: "80px",
        padding: "70px 0 20px",
      },
  
      title: {
        color: "#ffffff",
        fontWeight: "700",
        marginBottom: "20px",
        fontSize: "1.25rem",
      },
  
      link: {
        display: "block",
        color: "#a1a1aa",
        textDecoration: "none",
        marginBottom: "12px",
        transition: ".3s",
        fontSize: "0.95rem",
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
        borderRadius: "8px",
        border: "1px solid #27272a",
        padding: "12px 18px",
        width: "100%",
        marginBottom: "12px",
        background: "#111111",
        color: "#ffffff",
        fontSize: "0.95rem",
      },
  
      button: {
        width: "100%",
        border: "1px solid #27272a",
        borderRadius: "8px",
        padding: "12px",
        background: "#ffffff",
        fontWeight: "600",
        transition: ".3s",
        color: "#000000",
        cursor: "pointer",
        fontSize: "0.95rem",
      },
  
      bottom: {}
    };
  
    return (
      <>
        <style>{`
          .footer-link:hover{
            color:#ffffff !important;
            transform:translateX(6px);
          }
  
          .social-icon:hover{
            background:#111111 !important;
            color:#fff !important;
            transform:translateY(-5px) rotate(360deg);
          }
  
          .subscribe-btn:hover{
            transform:scale(1.05);
            background:#ffffff !important;
            box-shadow:0 8px 20px rgba(255,255,255,0.15);
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
            background:#ffffff;
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
  
          @media(max-width:1200px){
            .footer-container{
              padding: 0 20px;
            }
          }
  
          @media(max-width:992px){
            .footer-column{
              margin-bottom:40px;
              text-align:center;
            }
  
            .social-group{
              justify-content:center !important;
            }
  
            .footer-title::after{
              left:50%;
              transform:translateX(-50%);
            }
  
            .footer-links{
              display: flex;
              flex-direction: column;
              align-items: center;
            }
  
            .footer-link{
              text-align: center;
            }
          }
  
          @media(max-width:768px){
            .footer{
              padding: 50px 0 20px !important;
            }
  
            .footer-title{
              font-size: 1.15rem !important;
            }
  
            .social-icon{
              width: 42px !important;
              height: 42px !important;
              font-size: 16px !important;
            }
          }
  
          @media(max-width:576px){
            .footer{
              padding: 40px 0 16px !important;
            }
  
            .footer-container{
              padding: 0 12px;
            }
  
            .footer-title{
              font-size: 1.05rem !important;
            }
  
            .footer-link{
              font-size: 0.9rem !important;
              margin-bottom: 10px !important;
            }
  
            .social-icon{
              width: 38px !important;
              height: 38px !important;
              font-size: 14px !important;
            }
          }
  
          @media(max-width:480px){
            .footer{
              padding: 35px 0 12px !important;
            }
  
            .footer-title{
              font-size: 1rem !important;
            }
  
            .footer-bottom{
              font-size: 0.8rem !important;
            }
          }
        `}</style>
  
        <footer className="footer" style={styles.footer}>
          <div className="container footer-container">
  
            <div className="row">
  
              {/* Brand */}
  
              <div className="col-lg-4 footer-column">
  
                <h2 className="footer-title" style={styles.title}>
                  <FaBookOpen /> BookExpress
                </h2>
  
                <p style={{ color: "#a1a1aa", lineHeight: "1.8", fontSize: "0.95rem" }}>
                  Discover thousands of books, novels, educational
                  resources and best sellers. Reading opens the door
                  to endless possibilities.
                </p>
  
                <div
                  className="d-flex gap-3 social-group mt-4"
                >
                   <a href="https://facebook.com" className="social-icon" style={styles.social}>
                     <FaFacebookF />
                   </a>
      
                   <a href="https://instagram.com" className="social-icon" style={styles.social}>
                     <FaInstagram />
                   </a>
      
                   <a href="https://twitter.com" className="social-icon" style={styles.social}>
                     <FaTwitter />
                   </a>
      
                   <a href="https://linkedin.com" className="social-icon" style={styles.social}>
                     <FaLinkedinIn />
                   </a>
                </div>
  
              </div>
  
              {/* Quick Links */}
  
              <div className="col-lg-2 footer-column footer-links">
  
                <h4 className="footer-title" style={styles.title}>
                  Quick Links
                </h4>
  
                 <Link to="/" className="footer-link" style={styles.link}>
                   Home
                 </Link>
            
                 <Link to="/books" className="footer-link" style={styles.link}>
                   Books
                 </Link>
            
                 <Link to="/categories" className="footer-link" style={styles.link}>
                   Categories
                 </Link>
            
                 <Link to="/bestsellers" className="footer-link" style={styles.link}>
                   Best Sellers
                 </Link>
            
                 <Link to="/contact" className="footer-link" style={styles.link}>
                   Contact
                 </Link>
  
              </div>
  
              {/* Contact */}
  
              <div className="col-lg-3 footer-column">
  
                <h4 className="footer-title" style={styles.title}>
                  Contact
                </h4>
  
                <p style={{ fontSize: "0.95rem", color: "#a1a1aa", marginBottom: "8px" }}>
                  <FaMapMarkerAlt color="#fffef9" /> Karachi,
                  Pakistan
                </p>
  
                <p style={{ fontSize: "0.95rem", color: "#a1a1aa", marginBottom: "8px" }}>
                  <FaPhoneAlt color="#f1f0e8" /> +92 300 1234567
                </p>
  
                <p style={{ fontSize: "0.95rem", color: "#a1a1aa", marginBottom: "0" }}>
                  <FaEnvelope color="#f5f3f3" /> info@bookexpress.com
                </p>
  
              </div>
  
              {/* Newsletter */}
  
              <div className="col-lg-3 footer-column">
  
                <h4 className="footer-title" style={styles.title}>
                  Newsletter
                </h4>
  
                <p style={{ color: "#a1a1aa", fontSize: "0.95rem", marginBottom: "15px" }}>
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
  
          </div>
        </footer>
      </>
    );
  }