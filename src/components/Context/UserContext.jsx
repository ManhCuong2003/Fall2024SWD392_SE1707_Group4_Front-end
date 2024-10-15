import React, { Component, createContext, useEffect, useState } from "react";

export const userContext = createContext();

//CartProvider component to provide global cart state
export const UserProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // lấy giỏ hàng từ localStorage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  //function to add item to the cart
  const addToCart = (product, quantity) => {
    const existingItem = cartItems.find(
      (item) => item.koi_id === product.koi_id
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...product, quantity }]);
    }
  };

  //function to update an item's quantity in the cart
  const updateQuantity = (id, change) => {
    console.log("thay doi so luong");
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.koi_id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      );
    });
  };

  //Function to remove item from the cart (optional)
  const removeFromcart = (productId) => {
    setCartItems(cartItems.filter((item) => item.koi_id !== productId));
  };

  //provide the cart state and functions to the context consumers
  return (
    <userContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromcart,
        user,
        setUser,
        updateQuantity,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
