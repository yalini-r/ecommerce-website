import React, { createContext, useState } from 'react';
import all_product from '../components/assets/all_product';

// Ensure that every product has an 'id' and 'image'
const validatedProducts = all_product.filter(product => {
  return product.id && product.image; // Only include products with both 'id' and 'image'
});

// Optionally, if products are missing an image, you can add a placeholder image
const correctedProducts = validatedProducts.map(product => {
  if (!product.image) {
    return {
      ...product,
      image: 'path/to/placeholder/image.png', // Fallback image if missing
    };
  }
  return product;
});

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  correctedProducts.forEach((product) => {
    cart[product.id] = 0; // Initialize quantity for each product
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItem((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
      console.log(updatedCart); // Log the updated cart
      return updatedCart;
    });
  };

  const removeCart = (itemId) => {
    setCartItem((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmt = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        const itemInfo = correctedProducts.find((product) => product.id === Number(item));
        totalAmt += itemInfo.new_price * cartItem[item];
      }
    }
    return totalAmt;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItem += cartItem[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartAmount,
    getTotalCartItems,
    all_product: correctedProducts,  // Pass validated list here
    cartItem,
    addToCart,
    removeCart,
  };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
