import { createContext, useEffect, useState } from "react";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [favoriteProducts, setFavoriteProducts] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteProducts));
  }, [favoriteProducts]);

  const addToCart = (product, quantity) => {
    const existingItem = cartItems.find(item => item.koi_id === product.koi_id);

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.koi_id === product.koi_id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCartItems(prev => [...prev, { ...product, quantity }]);
    }
  };

  const addToFavorites = (product) => {
    if (!favoriteProducts.some(item => item.koi_id === product.koi_id)) {
      setFavoriteProducts(prev => [...prev, product]);
    }
  };

  const removeFromFavorites = (productId) => {
    setFavoriteProducts(favoriteProducts.filter(product => product.koi_id !== productId));
  };

  const updateQuantity = (id, change) => {
    setCartItems(prevItems => {
      return prevItems.map(item =>
        item.koi_id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      );
    });
  };

  const removeFromcart = (productId) => {
    setCartItems(cartItems.filter(item => item.koi_id !== productId));
  };

  return (
    <userContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromcart,
        user,
        setUser,
        updateQuantity,
        favoriteProducts,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
