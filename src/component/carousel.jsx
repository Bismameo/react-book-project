export default function Carousel() {
    const styles = {
      carouselImg: {
        height: "90vh",
        objectFit: "cover",
      },
  
      overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.55)",
      },
  
      caption: {
        position: "absolute",
        left: "8%",
        bottom: "18%",
        width: "45%",
        textAlign: "left",
        color: "#fff",
        animation: "fadeUp 1s ease",
        zIndex: 2,
      },
  
      badge: {
        background: "#ffc107",
        color: "#000",
        padding: "8px 18px",
        borderRadius: "30px",
        fontWeight: "600",
        fontSize: "15px",
        display: "inline-block",
        marginBottom: "20px",
      },
  
      heading: {
        fontSize: "4rem",
        fontWeight: "700",
        marginBottom: "20px",
      },
  
      paragraph: {
        fontSize: "18px",
        color: "#eee",
        lineHeight: "1.8",
        marginBottom: "30px",
      },
  
      darkBtn: {
        background: "#222325",
        color: "#fff",
        border: "none",
        borderRadius: "30px",
        padding: "12px 30px",
        marginRight: "15px",
        transition: "0.3s",
        cursor: "pointer",
      },
  
      lightBtn: {
        background: "transparent",
        color: "#fff",
        border: "2px solid #fff",
        borderRadius: "30px",
        padding: "12px 30px",
        transition: "0.3s",
        cursor: "pointer",
      },
  
      yellowBtn: {
        background: "#ffc107",
        color: "#000",
        border: "none",
        borderRadius: "30px",
        padding: "12px 30px",
        cursor: "pointer",
      },
  
      blueBtn: {
        background: "#0d6efd",
        color: "#fff",
        border: "none",
        borderRadius: "30px",
        padding: "12px 30px",
        cursor: "pointer",
      },
  
      icon: {
        backgroundColor: "rgba(255,255,255,.35)",
        borderRadius: "50%",
        padding: "22px",
      },
    };
  
    return (
      <>
        {/* Animation */}
        <style>
          {`
            @keyframes fadeUp{
              from{
                opacity:0;
                transform:translateY(40px);
              }
              to{
                opacity:1;
                transform:translateY(0);
              }
            }
  
            .carousel-item{
              position:relative;
            }
  
            .btn-hover:hover{
              transform:translateY(-4px);
              transition:.3s;
            }
  
            @media(max-width:768px){
  
              .custom-caption{
                width:90% !important;
                left:5% !important;
                bottom:15% !important;
              }
  
              .custom-caption h1{
                font-size:2.2rem !important;
              }
  
              .custom-caption p{
                font-size:15px !important;
              }
  
              .carousel-img{
                height:70vh !important;
              }
  
            }
            @media(max-width:320px){
              .custom-caption{
                width:90% !important;
                .custom-caption{
                  width:90% !important;
                  left:5% !important;
                  bottom:15% !important;
                }
    
                .custom-caption h1{
                  font-size:2.2rem !important;
                }
    
                .custom-caption p{
                  font-size:15px !important;
                }
    
                .carousel-img{
                  height:70vh !important;
                }
        
               h1{
                font-size:1rem !important;
               }
              text-align: center;
            }
          
    
            
        
              
            
          `}
          


        </style>
  
        <div
          id="carouselExample"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
  
            {/* Slide 1 */}
            <div className="carousel-item active">
              <img
                src="/assets/image2.jpg"
                className="d-block w-100 carousel-img"
                style={styles.carouselImg}
                alt="Books"
              />
  
              <div style={styles.overlay}></div>
  
              <div
                className="carousel-caption custom-caption"
                style={styles.caption}
              >
                <span style={styles.badge}>New Collection</span>
  
                <h1 style={styles.heading}>
                  Discover Your Next Favorite Book
                </h1>
  
                <p style={styles.paragraph}>
                  Thousands of bestselling novels, self-help books and classics
                  available at amazing prices.
                </p>
  
                <button
                  className="btn-hover"
                  style={styles.darkBtn}
                >
                  Shop Now
                </button>
  
                <button
                  className="btn-hover"
                  style={styles.lightBtn}
                >
                  Explore
                </button>
              </div>
            </div>
  
            {/* Slide 2 */}
            <div className="carousel-item">
              <img
                src="/assets/image1.jpg"
                className="d-block w-100 carousel-img"
                style={styles.carouselImg}
                alt="Library"
              />
  
              <div style={styles.overlay}></div>
  
              <div
                className="carousel-caption custom-caption"
                style={styles.caption}
              >
                <h1 style={styles.heading}>Best Selling Books</h1>
  
                <p style={styles.paragraph}>
                  Get up to 50% OFF on selected books this week.
                </p>
  
                <button
                  className="btn-hover"
                  style={styles.yellowBtn}
                >
                  Buy Now
                </button>
              </div>
            </div>
  
            {/* Slide 3 */}
            <div className="carousel-item">
              <img
                src="/assets/image3.jpg"
                className="d-block w-100 carousel-img"
                style={styles.carouselImg}
                alt="Reading"
              />
  
              <div style={styles.overlay}></div>
  
              <div
                className="carousel-caption custom-caption"
                style={styles.caption}
              >
                <h1 style={styles.heading}>Read Anywhere</h1>
  
                <p style={styles.paragraph}>
                  Build your dream bookshelf with our premium collection.
                </p>
  
                <button
                  className="btn-hover"
                  style={styles.blueBtn}
                >
                  Start Reading
                </button>
              </div>
            </div>
  
          </div>
  
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              style={styles.icon}
            ></span>
          </button>
  
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              style={styles.icon}
            ></span>
          </button>
        </div>
      </>
    );
  }