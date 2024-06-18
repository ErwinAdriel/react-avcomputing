import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }){
    const [cart, setCart] = useState([]);

    const addToCart = product => {}
    const clearCart = () => {
        setCart([]);
    }

    return(
        <CartContext.Provider value={{cart, addToCart, clearCart}}>
            { children }
        </CartContext.Provider>
    )
}