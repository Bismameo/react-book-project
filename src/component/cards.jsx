export default function Cards() {
    return (
      <div className="container">
        <div className="row g-4 justify-content-center">
          {[
            { img: "/assets/pic1.jpg", title: "milk and honey" },
            { img: "/assets/pic2.jpg", title: "Will You Stay" },
            { img: "/assets/pic3.jpg", title: "Sculpture" },
            { img: "/assets/pic4.webp", title: "Sign Of Grow Up" },
            { img: "/assets/pic5.jpg", title: "The Two Of Us" },
            { img: "/assets/pic6.webp", title: "This could be Home" },
            { img: "/assets/pic7.webp", title: "The girl on the Train" },
            { img: "/assets/pic8.webp", title: "The Art Of Being Alone" },
          ].map((book, index) => (
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
                  className="card-img-top"
                  alt={book.title}
                  style={{ height: "280px", objectFit: "cover" }}
                />
                <div className="card-body text-center p-3">
                  <h5 className="card-title text-truncate" style={{ fontWeight: "600", fontSize: "16px", marginBottom: "12px" }}>
                    {book.title}
                  </h5>
                  <button
                    className="btn w-100"
                    style={{
                      backgroundColor: "#0F172A",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      padding: "10px",
                      fontSize: "14px",
                      fontWeight: "500",
                      transition: "0.3s",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
