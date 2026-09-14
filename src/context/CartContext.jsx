import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import Cart from "../utils/cart";
import { parsePrice } from "../utils/products";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(Cart.get());

  const refresh = useCallback(() => setCartItems(Cart.get()), []);

  const addToCart = useCallback(
    (book) => {
      Cart.add(book);
      refresh();
    },
    [refresh]
  );

  const removeFromCart = useCallback(
    (bookId) => {
      Cart.remove(bookId);
      refresh();
    },
    [refresh]
  );

  const updateQuantity = useCallback(
    (bookId, quantity) => {
      Cart.updateQuantity(bookId, quantity);
      refresh();
    },
    [refresh]
  );

  const clearCart = useCallback(() => {
    Cart.clear();
    refresh();
  }, [refresh]);

  const count = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const subtotal = cartItems.reduce(
    (total, item) => total + parsePrice(item.price) * (item.quantity || 1),
    0
  );

  useEffect(() => {
    const handler = () => refresh();
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, [refresh]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        count,
        subtotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
