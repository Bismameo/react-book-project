import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        /* ===== NAVBAR ===== */

        .custom-navbar{
          background:linear-gradient(90deg,#0F172A,#1E3A8A,#3B82F6);
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
          color:#3B82F6 !important;
          transform:scale(1.08);
          text-shadow:0 0 15px rgba(34, 35, 37, 0.5);
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
          background:#3B82F6;
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

        .nav-link.active{
          color:#3B82F6 !important;
        }

        .nav-link.active::after{
          width:100%;
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
          box-shadow:0 0 20px rgba(59,130,246,0.5);
          transform:scale(1.04);
          outline:none;
        }

        /* Search Button */

        .search-btn{
          border:none;
          background:#1E3A8A;
          color:white;
          border-radius:30px;
          padding:10px 22px;
          transition:.35s;
          font-weight:600;
        }

        .search-btn:hover{
          background:#3B82F6;
          transform:translateY(-3px);
          box-shadow:0 10px 20px rgba(59,130,246,0.4);
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

        .navbar-toggler-icon{
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280F%2C 17%2C 42%2C 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
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

        @media(max-width:480px){
          .navbar-brand{
            font-size:22px;
          }
          .search-input{
            width:100%;
          }
          .nav-link{
            font-size:16px;
            margin:8px 0;
          }
        }

      `}</style>

      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">

          <Link className="navbar-brand" to="/" onClick={closeMenu}>
          BookExpress
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarTogglerDemo01"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`}
            id="navbarTogglerDemo01"
          >

            <ul className="navbar-nav mx-auto">

              <li className="nav-item">
                <Link className="nav-link active" to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/books" onClick={closeMenu}>
                  Books
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/categories" onClick={closeMenu}>
                  Categories
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/bestsellers" onClick={closeMenu}>
                  Best Sellers
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
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
