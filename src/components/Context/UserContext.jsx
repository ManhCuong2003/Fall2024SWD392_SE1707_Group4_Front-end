import React, { Component, createContext, useState } from "react";

//create cart context
export const CartContext = createContext();

//CartProvider component to provide global cart state
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  //function to add item to the cart
  const addToCart = (product, quantity) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  //function to update an item's quantity in the cart
  const updateQuantity = (id, change) => {
    setCartItems((prevItems) => {
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      );
    });
  };

  //Function to remove item from the cart (optional)
  const removeFromcart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  //provide the cart state and functions to the context consumers
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromcart }}>
      {children}
    </CartContext.Provider>
  );
};
