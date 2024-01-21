import React, { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext();

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevCartItems) => [...prevCartItems, item]);
    };

    const removeFromCart = (productId) => {
        setCartItems((prevCartItems) => 
        prevCartItems.filter((item) => item.productId !== productId ));
    };

    const clearCart = () => {
        setCartItems([]);
    }

    return (
        <ShoppingCartContext.Provider value={{cartItems, addToCart, removeFromCart, clearCart}}>
            {children}
        </ShoppingCartContext.Provider>
    )
};