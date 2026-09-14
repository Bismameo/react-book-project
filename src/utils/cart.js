const Cart = {
  get() {
    if (typeof window === "undefined") {
      return [];
    }

    try {
      const cart = localStorage.getItem("cart");
      return cart ? JSON.parse(cart) : [];
    } catch (error) {
      console.error("Error reading cart:", error);
      return [];
    }
  },

  add(book) {
    if (typeof window === "undefined") {
      return [];
    }

    const cart = this.get();

    const existingBookIndex = cart.findIndex(
      (item) => item.id === book.id
    );

    if (existingBookIndex !== -1) {
      cart[existingBookIndex] = {
        ...cart[existingBookIndex],
        quantity: (cart[existingBookIndex].quantity || 1) + 1,
      };
    } else {
      cart.push({
        ...book,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    return cart;
  },

  remove(bookId) {
    if (typeof window === "undefined") {
      return [];
    }

    const cart = this.get();

    const updatedCart = cart.filter(
      (item) => item.id !== bookId
    );

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    return updatedCart;
  },

  updateQuantity(bookId, quantity) {
    if (typeof window === "undefined") {
      return [];
    }

    const cart = this.get();

    const updatedCart = cart
      .map((item) => {
        if (item.id === bookId) {
          return {
            ...item,
            quantity: Math.max(1, quantity),
          };
        }

        return item;
      })
      .filter((item) => item.quantity > 0);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    return updatedCart;
  },

  clear() {
    if (typeof window === "undefined") {
      return;
    }

    localStorage.removeItem("cart");
  },

  count() {
    const cart = this.get();

    return cart.reduce(
      (total, item) => total + (item.quantity || 1),
      0
    );
  },
};

export default Cart;