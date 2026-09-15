export default function Carousel() {
    const styles = {
      carouselImg: {
        height: "90vh",
        objectFit: "cover",
        maxHeight: "900px",
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
        lineHeight: "1.1",
      },
   
      paragraph: {
        fontSize: "18px",
        color: "#eee",
        lineHeight: "1.8",
        marginBottom: "30px",
      },
   
      darkBtn: {
        background: "#000000",
        color: "#fff",
        border: "1px solid #27272a",
        borderRadius: "30px",
        padding: "12px 30px",
        marginRight: "15px",
        transition: "0.3s",
        cursor: "pointer",
        fontWeight: "500",
      },
   
      lightBtn: {
        background: "transparent",
        color: "#fff",
        border: "1px solid #fff",
        borderRadius: "30px",
        padding: "12px 30px",
        transition: "0.3s",
        cursor: "pointer",
        fontWeight: "500",
      },
   
      yellowBtn: {
        background: "#ffc107",
        color: "#000",
        border: "none",
        borderRadius: "30px",
        padding: "12px 30px",
        cursor: "pointer",
        fontWeight: "600",
      },
   
      blueBtn: {
        background: "#3B82F6",
        color: "#fff",
        border: "none",
        borderRadius: "30px",
        padding: "12px 30px",
        cursor: "pointer",
        fontWeight: "600",
      },
   
      icon: {
        backgroundColor: "rgba(0,0,0,0.4)",
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
              box-shadow: inset 0 -20px 30px -10px rgba(0,0,0,0.4);
            }
   
            .btn-hover:hover{
              transform:translateY(-4px);
              transition:.3s;
              box-shadow: 0 10px 25px rgba(0,0,0,0.3);
            }
   
            @media(max-width:1400px){
              .custom-caption{
                width:50% !important;
              }
            }
   
            @media(max-width:1200px){
              .custom-caption{
                width:55% !important;
              }
   
              .custom-caption h1{
                font-size:3rem !important;
              }
            }
   
            @media(max-width:992px){
              .custom-caption{
                width:80% !important;
                left:10% !important;
                bottom:15% !important;
                text-align:center !important;
              }

              .custom-caption h1{
                font-size:2.4rem !important;
              }

              .custom-caption p{
                font-size:16px !important;
              }

              .carousel-img{
                height:70vh !important;
                max-height: 700px !important;
              }

              .btn-hover{
                display: block !important;
                width: 100% !important;
                margin: 6px 0 !important;
                padding: 10px !important;
                font-size: 13px !important;
                text-align: center !important;
              }
            }

            @media(max-width:768px){
              .custom-caption{
                width:90% !important;
                left:5% !important;
                bottom:12% !important;
                padding-top: 10px !important;
              }

              .custom-caption h1{
                font-size:2rem !important;
              }

              .custom-caption p{
                font-size:14px !important;
              }

              .carousel-img{
                height:60vh !important;
                max-height: 600px !important;
              }

              .btn-hover{
                margin: 5px 0 !important;
                padding: 9px !important;
                font-size: 12px !important;
              }
            }

            @media(max-width:576px){
              .custom-caption{
                width:95% !important;
                left:2.5% !important;
                bottom:10% !important;
                padding-top: 15px !important;
              }

              .custom-caption h1{
                font-size:1.6rem !important;
              }

              .custom-caption p{
                font-size:12px !important;
                margin-bottom:18px !important;
              }

              .carousel-img{
                height:55vh !important;
                max-height: 450px !important;
              }

              .btn-hover{
                margin: 4px 0 !important;
                padding: 10px !important;
                font-size: 11px !important;
              }

              .carousel-control-prev,
              .carousel-control-next{
                display:none !important;
              }
            }

            @media(max-width:380px){
              .custom-caption{
                width:96% !important;
                left:2% !important;
                bottom:6% !important;
                padding-top: 20px !important;
              }

              .custom-caption h1{
                font-size:1.3rem !important;
              }

              .custom-caption p{
                font-size:11px !important;
                margin-bottom:12px !important;
              }

              .carousel-img{
                height:50vh !important;
                max-height: 350px !important;
              }

              .btn-hover{
                margin: 3px 0 !important;
                padding: 9px !important;
                font-size: 10px !important;
              }
            }

            @media(max-width:768px){
              .carousel-badge{
                display:none !important;
              }
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
                src="/Assets/image2.jpg"
                className="d-block w-100 carousel-img"
                style={styles.carouselImg}
                alt="Books"
              />
   
              <div style={styles.overlay}></div>
   
              <div
                className="carousel-caption custom-caption"
                style={styles.caption}
              >
                <span className="carousel-badge" style={styles.badge}>New Collection</span>
   
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
                src="/Assets/image1.jpg"
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
                src="/Assets/image3.jpg"
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