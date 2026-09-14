import { useParams, Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import products, { formatPrice } from "../utils/products";
import StarRating from "../component/StarRating";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { user } = useAuth();

  const product = products.find((p) => String(p.id) === String(id));

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container py-5 text-center">
          <h3>Product not found</h3>
          <Link to="/" className="btn" style={{ background: "#000", color: "#fff", borderRadius: "8px" }}>
            <FaArrowLeft className="me-2" /> Back to Home
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/cart", {
      state: { buyNow: true, productId: product.id },
    });
  };

  return (
    <>
      <style>{`
        .product-detail-img {
          width: 100%;
          max-width: 360px;
          object-fit: cover;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .product-badge {
          background: #ffc107;
          color: #000;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.75rem;
        }
        .detail-btn {
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .detail-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        @media(max-width:768px){
          .product-detail-img { max-width: 100%; }
        }
      `}</style>

      <Navbar />

      <div className="container py-4 py-md-5 px-3 px-md-0">
        <Link to="/" className="d-inline-flex align-items-center text-decoration-none mb-4" style={{ color: "#3B82F6" }}>
          <FaArrowLeft className="me-2" /> Continue Shopping
        </Link>

        <div className="row g-4 g-md-5">
          <div className="col-12 col-md-6 d-flex flex-column align-items-start">
            <img
              src={product.img}
              alt={product.title}
              className="product-detail-img"
            />
            {product.bestseller && (
              <span className="product-badge mt-3">Bestseller</span>
            )}
          </div>

          <div className="col-12 col-md-6">
            <h1 style={{ fontWeight: "700", fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", color: "#0F172A", marginBottom: "8px" }}>
              {product.title}
            </h1>
            <p style={{ color: "#64748b", fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)", marginBottom: "8px" }}>
              by <span style={{ color: "#0F172A", fontWeight: "600" }}>{product.author}</span>
            </p>

            <div className="d-flex align-items-center gap-3 mb-3">
              <StarRating bookId={product.id} readOnly />
              <span style={{ color: "#64748b", fontSize: "clamp(0.8rem, 1.4vw, 0.9rem)" }}>
                ({product.rating})
              </span>
            </div>

            <div style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: "700", color: "#0F172A", margin: "16px 0" }}>
              {formatPrice(product.price)}
            </div>

            <p style={{ color: "#334155", lineHeight: "1.7", fontSize: "clamp(0.85rem, 1.5vw, 1rem)", marginBottom: "24px" }}>
              {product.desc}
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3">
              <button
                className="detail-btn"
                style={{
                  background: "#000000",
                  color: "#fff",
                  border: "1px solid #27272a",
                  padding: "clamp(10px, 2vw, 14px) clamp(20px, 3vw, 28px)",
                  flex: "1",
                  cursor: "pointer",
                }}
                onClick={handleAddToCart}
              >
                <FaShoppingCart className="me-2" /> Add to Cart
              </button>
              <button
                className="detail-btn"
                style={{
                  background: "#ffc107",
                  color: "#000",
                  border: "1px solid #27272a",
                  padding: "clamp(10px, 2vw, 14px) clamp(20px, 3vw, 28px)",
                  flex: "1",
                  cursor: "pointer",
                }}
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>

            {!user && (
              <div style={{ marginTop: "16px", color: "#64748b", fontSize: "clamp(0.8rem, 1.4vw, 0.9rem)" }}>
                <Link to="/login" style={{ color: "#3B82F6" }}>Login</Link> or <Link to="/signup" style={{ color: "#3B82F6" }}>Sign Up</Link> to speed up checkout.
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
