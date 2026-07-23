import Cart from "../utils/cart";
import StarRating from "./StarRating";

export default function Cards({ addToCart, books })  {
    const allBooks = books || [
              { id: 1, img: "/assets/pic1.jpg", title: "milk and honey", price: "$12.99" },
              { id: 2, img: "/assets/pic2.jpg", title: "Will You Stay", price: "$14.99" },
              {id: 3,  img: "/assets/pic3.jpg", title: "Sculpture", price: "$11.49" },
              {id:4 , img: "/assets/pic4.webp", title: "Sign Of Grow Up", price: "$13.99" },
              {id:5, img: "/assets/pic5.jpg", title: "The Two Of Us", price: "$15.99" },
              {id:6, img: "/assets/pic6.webp", title: "This could be Home", price: "$10.99" },
              {id:7, img: "/assets/pic7.webp", title: "The girl on the Train", price: "$16.99" },
              {id:8, img: "/assets/pic8.webp", title: "The Art Of Being Alone", price: "$12.49" },
              { id: 9, img: "/assets/pic1.jpg", title: "Where the Crawdads Sing", price: "$13.99" },
              { id: 10, img: "/assets/pic2.jpg", title: "Becoming", price: "$18.99" },
              { id: 11, img: "/assets/pic3.jpg", title: "The Midnight Library", price: "$14.49" },
              { id: 12, img: "/assets/pic4.webp", title: "Atomic Habits", price: "$15.99" },
              { id: 13, img: "/assets/pic5.jpg", title: "Project Hail Mary", price: "$16.49" },
              { id: 14, img: "/assets/pic6.webp", title: "The Silent Patient", price: "$12.99" },
              { id: 15, img: "/assets/pic7.webp", title: "It Ends with Us", price: "$14.99" },
              { id: 16, img: "/assets/pic8.webp", title: "The 48 Laws of Power", price: "$17.49" },
            ];
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
            {allBooks.map((book, index) => (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <div
                  className="card h-100 border-0 shadow-sm"
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    transition: "0.3s",
                  }}
                >
                  <img
                    src={book.img}
                    className="card-img-top book-card-img"
                    alt={book.title}
                    style={{ height: "clamp(150px, 40vw, 280px)", objectFit: "cover" }}
                  />
                  <div className="card-body p-2 p-md-3">
                    <h5 className="card-title text-truncate mb-2 book-card-title" style={{ fontWeight: "600", fontSize: "clamp(0.85rem, 2.2vw, 1rem)" }}>
                      {book.title}
                    </h5>
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="book-card-price" style={{ color: "#000000", fontWeight: "700", fontSize: "clamp(0.85rem, 2.2vw, 1rem)" }}>
                        {book.price}
                      </span>
                      <button
                        className="btn book-card-btn"
                        style={{
                          backgroundColor: "#000000",
                          color: "white",
                          border: "1px solid #27272a",
                          borderRadius: "6px",
                          padding: "clamp(4px, 1vw, 6px) clamp(8px, 1.8vw, 14px)",
                          fontSize: "clamp(0.7rem, 1.6vw, 0.85rem)",
                          fontWeight: "500",
                        }}
                        onClick={() => {
                          Cart.add(book);
                          addToCart(book);
                        }}
                      >
                        Add to Cart
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