import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import StarRating from "./StarRating";
import { featuredBooks, formatPrice } from "../utils/products";

export default function Cards({ addToCart, books }) {
  const navigate = useNavigate();
  const ctx = useCart();
  const items = books || featuredBooks;
  const handleAddToCart = addToCart || ctx.addToCart;

  const handleBuyNow = (book) => {
    ctx.addToCart(book);
    navigate("/cart", { state: { buyNow: true, productId: book.id } });
  };

  return (
    <>
      <style>{`
        @media (max-width: 380px) {
          .book-card-grid .col-6 {
            flex: 0 0 100%;
            max-width: 100%;
          }
          .book-card-img {
            height: 200px !important;
          }
          .book-card-title {
            font-size: 0.9rem !important;
          }
          .book-card-price {
            font-size: 0.9rem !important;
          }
          .book-card-btn {
            padding: 5px 10px !important;
            font-size: 0.75rem !important;
          }
          .book-card-rating {
            margin-top: 8px !important;
          }
        }
      `}</style>
      <div className="container">
        <div className="row g-3 g-md-4 justify-content-center book-card-grid">
          {items.map((book, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={book.id ?? index}>
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "0.3s",
                }}
              >
                <Link to={`/product/${book.id}`} className="d-block">
                  <div style={{ position: "relative" }}>
                    <img
                      src={book.img}
                      className="card-img-top book-card-img"
                      alt={book.title}
                      style={{ height: "clamp(150px, 40vw, 280px)", objectFit: "cover", width: "100%" }}
                    />
                    {book.bestseller && (
                      <span
                        style={{
                          position: "absolute",
                          top: "8px",
                          left: "8px",
                          background: "#ffc107",
                          color: "#000",
                          fontWeight: "700",
                          fontSize: "clamp(0.55rem, 1.1vw, 0.7rem)",
                          padding: "4px 8px",
                          borderRadius: "20px",
                        }}
                      >
                        Bestseller
                      </span>
                    )}
                  </div>
                </Link>
                <div className="card-body p-2 p-md-3 d-flex flex-column">
                  <Link
                    to={`/product/${book.id}`}
                    className="text-decoration-none"
                    style={{ color: "inherit" }}
                  >
                    <h5 className="card-title text-truncate mb-2 book-card-title" style={{ fontWeight: "600", fontSize: "clamp(0.85rem, 2.2vw, 1rem)", cursor: "pointer" }}>
                      {book.title}
                    </h5>
                  </Link>

                  {book.author && (
                    <p className="book-card-author text-truncate mb-2" style={{ color: "#64748b", fontSize: "clamp(0.72rem, 1.6vw, 0.8rem)" }}>
                      {book.author}
                    </p>
                  )}

                  <div className="d-flex align-items-center justify-content-between mt-auto">
                    <span className="book-card-price" style={{ color: "#000000", fontWeight: "700", fontSize: "clamp(0.85rem, 2.2vw, 1rem)" }}>
                      {formatPrice(book.price)}
                    </span>
                  </div>

                  <div className="d-flex gap-2 mt-2">
                    <button
                      className="btn book-card-btn flex-column flex-sm-row flex-grow-1"
                      style={{
                        backgroundColor: "#000000",
                        color: "white",
                        border: "1px solid #27272a",
                        borderRadius: "6px",
                        padding: "clamp(4px, 1vw, 6px) clamp(8px, 1.8vw, 14px)",
                        fontSize: "clamp(0.7rem, 1.6vw, 0.85rem)",
                        fontWeight: "500",
                      }}
                      onClick={() => handleAddToCart(book)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn book-card-btn flex-grow-1"
                      style={{
                        backgroundColor: "#ffc107",
                        color: "#000",
                        border: "1px solid #27272a",
                        borderRadius: "6px",
                        padding: "clamp(4px, 1vw, 6px) clamp(8px, 1.8vw, 14px)",
                        fontSize: "clamp(0.7rem, 1.6vw, 0.85rem)",
                        fontWeight: "700",
                      }}
                      onClick={() => handleBuyNow(book)}
                    >
                      Buy Now
                    </button>
                  </div>

                  <div className="book-card-rating" style={{ marginTop: "10px" }}>
                    <StarRating bookId={book.id} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
