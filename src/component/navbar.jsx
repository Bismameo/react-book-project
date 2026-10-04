import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { FaShoppingCart, FaSearch, FaSignInAlt, FaUserPlus, FaSignOutAlt } from "react-icons/fa";

const websiteSearchData = [
  { label: 'Home', route: '/' },
  { label: 'Books', route: '/books' },
  { label: 'Categories', route: '/categories' },
  { label: 'Best Sellers', route: '/bestsellers' },
  { label: 'About Us', route: '/aboutus' },
  { label: 'Services', route: '/service' },
  { label: 'Contact', route: '/contact' },
  { label: 'Cart', route: '/cart' },
  { label: 'Login', route: '/login' },
  { label: 'Sign Up', route: '/signup' }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { count } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);
  const handleLogout = () => {
    logout();
    closeMenu();
    navigate("/");
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const query = searchTerm.trim().toLowerCase();
    const matchedItem = websiteSearchData.find((item) =>
      item.label.toLowerCase().includes(query)
    );

    if (matchedItem) {
      navigate(matchedItem.route);
      setSearchTerm('');
      closeMenu();
    }
  };

  return (
    <>
      <style>{`
        .black-nav { background: #000; border-bottom: 1px solid #111; padding: 0 40px; height: 64px; position: sticky; top: 0; z-index: 1000; }
        .black-wrap { display: flex; align-items: center; justify-content: space-between; height: 100%; max-width: 1400px; margin: 0 auto; padding: 0 24px; }
        .black-section { display: flex; align-items: center; gap: 12px; }
        .black-logo { color: #fff !important; font-size: 20px; font-weight: 700; text-decoration: none; white-space: nowrap; }
        .black-links, .black-right { display: flex; align-items: center; gap: 8px; }
        .black-link, .black-auth-btn { color: #a1a1aa !important; font-size: 14px; font-weight: 500; padding: 8px 12px; border-radius: 6px; text-decoration: none; white-space: nowrap; }
        .black-link:hover, .black-auth-btn:hover { color: #fff !important; background: #18181b; }
        .black-search { display: flex; align-items: center; position: relative; }
        .black-search input { width: 220px; height: 38px; padding: 0 12px 0 36px; background: #111; border: 1px solid #27272a; border-radius: 8px 0 0 8px; color: #fff; }
        .black-search input:focus { outline: none; border-color: #71717a; }
        .black-search-icon { position: absolute; left: 12px; color: #71717a; pointer-events: none; }
        .black-search-btn, .black-cart { height: 38px; background: #111; color: #fff; border: 1px solid #27272a; }
        .black-search-btn { padding: 0 14px; border-radius: 0 8px 8px 0; cursor: pointer; }
        .black-cart { position: relative; width: 38px; display: flex; align-items: center; justify-content: center; border-radius: 8px; text-decoration: none; }
        .black-badge { position: absolute; top: -5px; right: -5px; min-width: 18px; height: 18px; padding: 0 4px; border-radius: 9px; display: grid; place-items: center; background: #fff; color: #000; font-size: 10px; font-weight: 700; }
        .black-auth-btn { display: flex; align-items: center; gap: 6px; border: 1px solid #27272a; background: #111; cursor: pointer; }
        .black-toggler { display: none; }
        @media (max-width: 991px) {
          .black-nav { height: auto; padding: 14px 24px; }
          .black-wrap { flex-wrap: wrap; gap: 12px; }
          .black-section { display: block; width: 100%; order: 3; }
          .black-links, .black-right { display: none; width: 100%; flex-direction: column; align-items: stretch; }
          .black-links.show, .black-right.show { display: flex; }
          .black-link { width: 100%; }
          .black-search { width: 100%; }
          .black-search input { width: 100%; }
          .black-toggler { display: block; margin-left: auto; order: 2; }
        }
        @media (max-width: 576px) {
          .black-nav { padding: 12px 16px; }
          .black-wrap { padding: 0 12px; }
          .black-logo { font-size: 18px; }
        }
      `}</style>
      <nav className="black-nav">
        <div className="black-wrap">
          <Link className="black-logo" to="/" onClick={closeMenu}>BookExpress</Link>
          <div className="black-section">
            <div className={`black-links${menuOpen ? ' show' : ''}`}>
              <Link className="black-link" to="/" onClick={closeMenu}>Home</Link>
              <Link className="black-link" to="/books" onClick={closeMenu}>Books</Link>
              <Link className="black-link" to="/categories" onClick={closeMenu}>Categories</Link>
              <Link className="black-link" to="/bestsellers" onClick={closeMenu}>Best Sellers</Link>
              <Link className="black-link" to="/contact" onClick={closeMenu}>Contact</Link>
            </div>
            <div className={`black-right${menuOpen ? ' show' : ''}`}>
              <form className="black-search" onSubmit={handleSearchSubmit}>
                <FaSearch className="black-search-icon" />
                <input type="search" list="website-search-suggestions" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search website..." />
                <datalist id="website-search-suggestions">
                  {websiteSearchData.map((item) => <option key={item.label} value={item.label} />)}
                </datalist>
                <button className="black-search-btn" type="submit">Search</button>
              </form>
              <Link className="black-cart" to="/cart" onClick={closeMenu}>
                <FaShoppingCart size={16} />
                <span className="black-badge">{Number.isNaN(count) ? 0 : count}</span>
              </Link>
              {user ? (
                <button className="black-auth-btn" type="button" onClick={handleLogout}><FaSignOutAlt size={14} />Sign Out</button>
              ) : (
                <>
                  <Link className="black-auth-btn" to="/login" onClick={closeMenu}><FaSignInAlt size={14} />Login</Link>
                  <Link className="black-auth-btn" to="/signup" onClick={closeMenu}><FaUserPlus size={14} />Sign Up</Link>
                </>
              )}
            </div>
          </div>
          <button className="navbar-toggler black-toggler" type="button" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
}
