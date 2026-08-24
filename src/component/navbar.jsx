import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaShoppingCart, FaSearch } from "react-icons/fa";
export default function Navbar({ cartItems = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
   <style>{`
.black-nav {
  background: #000000;
  border-bottom: 1px solid #111111;
  padding: 0 40px;
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 6px 30px rgba(255, 255, 255, 0.15), 0 2px 8px rgba(255, 255, 255, 0.08);
}

.black-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}

.black-section {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.black-logo {
  color: #ffffff !important;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.2px;
  text-decoration: none;
  transition: opacity 0.2s ease;
  white-space: nowrap;
}

.black-logo:hover {
  opacity: 0.75;
}

.black-links {
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  flex-shrink: 0;
}

.black-link {
  color: #a1a1aa !important;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 14px;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.15s ease;
  white-space: nowrap;
}

.black-link:hover {
  color: #ffffff !important;
  background: rgba(255, 255, 255, 0.06);
}

.black-link.active {
  color: #ffffff !important;
  font-weight: 600;
}

.black-right {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.black-search {
  position: relative;
  display: flex;
  align-items: center;
}

.black-search input {
  width: 260px;
  height: 38px;
  padding: 0 14px 0 38px;
  background: #111111;
  border: 1px solid #27272a;
  border-radius: 8px 0 0 8px;
  color: #ffffff;
  font-size: 14px;
  transition: all 0.2s ease;
}

.black-search input::placeholder {
  color: #71717a;
}

.black-search input:focus {
  outline: none;
  background: #0a0a0a;
  border-color: #3f3f46;
  width: 280px;
}

.black-search-icon {
  position: absolute;
  left: 13px;
  color: #71717a;
  font-size: 13px;
  pointer-events: none;
}

.black-cart {
  position: relative;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #111111;
  border: 1px solid #27272a;
  color: #a1a1aa;
  cursor: pointer;
  transition: all 0.15s ease;
  text-decoration: none;
  flex-shrink: 0;
}

.black-cart:hover {
  background: #1a1a1a;
  border-color: #3f3f46;
  color: #ffffff;
}

.black-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #ffffff;
  color: #000000;
  font-size: 10px;
  font-weight: 700;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #000000;
}

.black-toggler {
  border: 1px solid #27272a;
  background: #111111;
  padding: 8px 12px;
  border-radius: 8px;
  color: #a1a1aa;
  transition: all 0.15s ease;
  display: none;
  align-items: center;
  justify-content: center;
}

.black-toggler:hover {
  background: #1a1a1a;
  color: #ffffff;
}

.black-toggler:focus {
  box-shadow: none;
  outline: none;
}

.black-toggler-icon {
  display: block;
  width: 22px;
  height: 2px;
  background: #a1a1aa;
  border-radius: 1px;
  position: relative;
  transition: all 0.3s ease;
}

.black-toggler-icon::before,
.black-toggler-icon::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: #a1a1aa;
  border-radius: 1px;
  transition: all 0.3s ease;
}

.black-toggler-icon::before {
  top: -7px;
}

.black-toggler-icon::after {
  top: 7px;
}

.black-search-btn {
  height: 38px;
  padding: 0 18px;
  background: #000000;
  color: #ffffff;
  border: 1px solid #27272a;
  border-radius: 0 8px 8px 0;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
}

.black-search-btn:hover {
  background: #111111;
  border-color: #3f3f46;
}

@media (max-width: 1024px) {
  .black-nav {
    padding: 0 24px;
  }

  .black-wrap {
    gap: 20px;
  }

  .black-search input {
    width: 200px;
  }

  .black-search input:focus {
    width: 220px;
  }

  .black-link {
    font-size: 13px;
    padding: 6px 10px;
  }
}

@media (max-width: 991px) {
  .black-nav {
    height: auto;
    padding: 14px 24px;
  }

  .black-wrap {
    flex-wrap: wrap;
    gap: 12px;
  }

  .black-logo {
    order: 1;
  }

  .black-links {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 2px;
    order: 3;
  }

  .black-links.show {
    display: flex;
  }

  .black-link {
    width: 100%;
    text-align: left;
    padding: 10px 14px;
  }

  .black-section {
    display: block;
    width: 100%;
    order: 3;
  }

  .black-right {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    order: 2;
  }

  .black-right.show {
    display: flex;
  }

  .black-cart {
    align-self: flex-end;
  }

  .black-search {
    flex-direction: column;
    gap: 8px;
  }

  .black-search input {
    border-radius: 8px;
    width: 100%;
    height: 40px;
  }

  .black-search input:focus {
    width: 100%;
  }

  .black-search-btn {
    width: 100%;
    border-radius: 8px;
    height: 40px;
  }

  .black-toggler {
    display: flex;
    order: 2;
    width: fit-content;
    margin-left: auto;
  }
}

@media (max-width: 576px) {
  .black-nav {
    padding: 12px 16px;
  }

  .black-wrap {
    gap: 10px;
    padding: 0 12px;
  }

  .black-logo {
    font-size: 18px;
  }

  .black-search input {
    font-size: 13px;
    height: 36px;
  }

  .black-cart {
    width: 36px;
    height: 36px;
  }

  .black-badge {
    min-width: 16px;
    height: 16px;
    font-size: 9px;
  }
}
`}</style>

      <nav className="black-nav">
        <div className="black-wrap">

          <Link className="black-logo" to="/" onClick={closeMenu}>
            BookExpress
          </Link>

          <div className="black-section">
            <div className={`black-links${menuOpen ? ' show' : ''}`}>

              <Link className="black-link active" to="/" onClick={closeMenu}>
                Home
              </Link>

              <Link className="black-link" to="/books" onClick={closeMenu}>
                Books
              </Link>

              <Link className="black-link" to="/categories" onClick={closeMenu}>
                Categories
              </Link>

              <Link className="black-link" to="/bestsellers" onClick={closeMenu}>
                Best Sellers
              </Link>

              <Link className="black-link" to="/contact" onClick={closeMenu}>
                Contact
              </Link>

            </div>

            <div className={`black-right${menuOpen ? ' show' : ''}`}>

              <form className="black-search" onSubmit={(e) => e.preventDefault()}>
                <FaSearch className="black-search-icon" />
                <input
                  type="search"
                  placeholder="Search books..."
                />
                <button className="black-search-btn" type="submit">Search</button>
              </form>

              <Link className="black-cart" to="/cart">
                <FaShoppingCart size={16} />
                <span className="black-badge">
                  {cartItems.length}
                </span>
              </Link>

            </div>
          </div>

          <button
            className="navbar-toggler black-toggler"
            type="button"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon black-toggler-icon"></span>
          </button>

        </div>
      </nav>
    </>
  );
}
