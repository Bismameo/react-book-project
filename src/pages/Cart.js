import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { formatPrice, parsePrice } from "../utils/products";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import { FaTrash, FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";

export default function Cart() {
  const { cartItems, count, subtotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    const order = {
      id: Date.now(),
      items: cartItems,
      total: subtotal,
      date: new Date().toISOString(),
    };
    const orders = JSON.parse(localStorage.getItem("bookexpress_orders") || "[]");
    orders.push(order);
    localStorage.setItem("bookexpress_orders", JSON.stringify(orders));
    alert(`Order #${order.id} placed successfully! Total: ${formatPrice(subtotal)}`);
    clearCart();
    navigate("/");
  };

  return (
    <>
      <style>{`
        .cart-table th { font-weight: 600; color: #0F172A; }
        .qty-btn { width: 32px; height: 32px; border-radius: 6px; }
        .cart-link { color: #3B82F6; text-decoration: none; font-weight: 600; }
        .cart-link:hover { text-decoration: underline; }
        @media(max-width:768px){
          .cart-table td, .cart-table th { font-size: 0.8rem; }
        }
      `}</style>

      <Navbar />

      <div className="container py-4 py-md-5 px-3 px-md-0">
        <h1 style={{ fontWeight: "700", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", marginBottom: "24px", color: "#0F172A" }}>
          Your Shopping Cart
        </h1>

        {count === 0 ? (
          <div className="text-center py-5">
            <FaShoppingCart size={56} style={{ color: "#cbd5e1", marginBottom: "20px" }} />
            <h3 style={{ fontWeight: "600", marginBottom: "12px" }}>Your cart is empty</h3>
            <p style={{ color: "#64748b", marginBottom: "24px" }}>Add some books and they will appear here.</p>
            <Link to="/" className="btn" style={{ background: "#000000", color: "#fff", borderRadius: "30px", padding: "10px 28px" }}>
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="table-responsive">
              <table className="table align-middle cart-table mb-4">
                <thead style={{ background: "#F8FAFC", borderBottom: "1px solid #e2e8f0" }}>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col" className="text-center">Price</th>
                    <th scope="col" className="text-center">Quantity</th>
                    <th scope="col" className="text-end">Subtotal</th>
                    <th scope="col" className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => {
                    const itemTotal = parsePrice(item.price) * (item.quantity || 1);
                    return (
                      <tr key={item.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <img src={item.img} alt={item.title} style={{ width: "64px", height: "90px", objectFit: "cover", borderRadius: "8px" }} />
                            <div>
                              <div style={{ fontWeight: "600", color: "#0F172A" }}>{item.title}</div>
                              <div style={{ color: "#64748b", fontSize: "0.85rem" }}>{item.author}</div>
                            </div>
                          </div>
                        </td>
                        <td className="text-center">{formatPrice(item.price)}</td>
                        <td className="text-center">
                          <div className="d-flex align-items-center justify-content-center gap-2">
                            <button
                              className="qty-btn btn btn-outline-secondary"
                              onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                            >
                              <FaMinus size={12} />
                            </button>
                            <span>{item.quantity || 1}</span>
                            <button
                              className="qty-btn btn btn-outline-secondary"
                              onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                            >
                              <FaPlus size={12} />
                            </button>
                          </div>
                        </td>
                        <td className="text-end" style={{ fontWeight: "600" }}>{formatPrice(itemTotal)}</td>
                        <td className="text-center">
                          <button
                            className="btn btn-sm"
                            style={{ background: "transparent", color: "#EF4444", borderRadius: "6px", cursor: "pointer" }}
                            onClick={() => removeFromCart(item.id)}
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="row g-3">
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <button
                  className="btn w-100"
                  style={{ background: "#111111", color: "#fff", border: "1px solid #27272a", borderRadius: "30px", padding: "12px 20px", fontWeight: "600", cursor: "pointer" }}
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-md-end">
                <div style={{ width: "100%", maxWidth: "360px" }}>
                  <div className="d-flex justify-content-between py-2" style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <span style={{ color: "#64748b" }}>Subtotal ({count} items)</span>
                    <strong>{formatPrice(subtotal)}</strong>
                  </div>
                  <div className="d-flex justify-content-between py-2" style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <span style={{ color: "#64748b" }}>Shipping</span>
                    <strong>FREE (orders over $50)</strong>
                  </div>
                  <div className="d-flex justify-content-between py-2 mb-3">
                    <span style={{ fontWeight: "600" }}>Total</span>
                    <strong style={{ fontSize: "1.15rem" }}>{formatPrice(subtotal)}</strong>
                  </div>
                  <button
                    className="btn w-100"
                    style={{ background: "#000000", color: "#fff", border: "1px solid #27272a", borderRadius: "30px", padding: "12px 20px", fontWeight: "700", cursor: "pointer" }}
                    onClick={handleCheckout}
                  >
                    {user ? "Proceed to Checkout" : "Login to Checkout"}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}
