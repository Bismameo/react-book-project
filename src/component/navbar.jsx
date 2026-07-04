export default function Navbar() {
  return (
    <>
      <style>{`
        /* ===== NAVBAR ===== */

        .custom-navbar{
          background:linear-gradient(90deg,#green,#0F172A,#1E3A8A);
          padding:15px 30px;
          position:sticky;
          top:0;
          z-index:999;
          box-shadow:0 8px 25px rgba(0,0,0,.35);
          animation:slideDown .8s ease;
        }

        /* Logo */

        .navbar-brand{
          color:white !important;
          font-size:30px;
          font-weight:700;
          letter-spacing:1px;
          transition:.4s;
        }

        .navbar-brand:hover{
          color:#green !important;
          transform:scale(1.08);
          text-shadow:0 0 15px #113d25;
        }

        /* Nav Links */

        .nav-link{
          color:white !important;
          font-size:17px;
          font-weight:500;
          margin:0 12px;
          position:relative;
          transition:.35s;
        }

        .nav-link::after{
          content:"";
          position:absolute;
          left:50%;
          bottom:-6px;
          transform:translateX(-50%);
          width:0;
          height:3px;
          background:#green;
          border-radius:20px;
          transition:.35s;
        }

        .nav-link:hover::after{
          width:100%;
        }

        .nav-link:hover{
          color:#60A5FA !important;
          transform:translateY(-3px);
        }

        /* Search */

        .search-input{
          width:240px;
          border-radius:30px;
          border:none;
          padding:10px 18px;
          transition:.35s;
        }

        .search-input:focus{
          box-shadow:0 0 20px rgba(8, 41, 24, 0.6);
          transform:scale(1.04);
          outline:none;
        }

        /* Search Button */

        .search-btn{
          border:none;
          background:#darkgreen;
          color:white;
          border-radius:30px;
          padding:10px 22px;
          transition:.35s;
          font-weight:600;
        }

        .search-btn:hover{
          background:#3B82F6;
          transform:translateY(-3px);
          box-shadow:0 10px 20px rgba(15, 78, 32, 0.45);
        }

        /* Toggler */

        .navbar-toggler{
          background:white;
          border:none;
          transition:.35s;
        }

        .navbar-toggler:hover{
          transform:rotate(90deg);
        }

        /* Mobile */

        @media(max-width:992px){

          .navbar-collapse{
            margin-top:20px;
            background:rgba(255,255,255,.08);
            backdrop-filter:blur(12px);
            padding:20px;
            border-radius:15px;
            animation:fadeIn .5s;
          }
           

          .nav-item{
            margin:12px 0;
            text-align:center;
          }

          .search-input{
            width:100%;
            margin-bottom:12px;
          }

          form{
            display:flex;
            flex-direction:column;
          }

          .search-btn{
            width:100%;
          }

        }

        /* Animations */

        @keyframes slideDown{

          from{
            opacity:0;
            transform:translateY(-80px);
          }

          to{
            opacity:1;
            transform:translateY(0);
          }

        }

        @keyframes fadeIn{

          from{
            opacity:0;
            transform:translateY(-20px);
          }

          to{
            opacity:1;
            transform:translateY(0);
          }

        }

        @media(max-width:320px){
          .navbar-brand{
            font-size:16px;
          }
          .search-input{
            width:100%;

          }
        }

      `}</style>

      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">

          <a className="navbar-brand" href="#">
          BookExpress
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarTogglerDemo01"
          >

            <ul className="navbar-nav mx-auto">

              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Books
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Categories
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Best Sellers
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>

            </ul>

            <form className="d-flex">

              <input
                className="form-control me-2 search-input"
                type="search"
                placeholder="Search Books..."
              />

              <button
                className="btn search-btn"
                type="submit"
              >
                Search
              </button>

            </form>

          </div>

        </div>
      </nav>
    </>
  );
}