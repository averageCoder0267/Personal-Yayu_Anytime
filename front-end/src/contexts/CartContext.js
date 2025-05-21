"use client"

import { createContext, useReducer } from "react"

export const CartContext = createContext()

let initialState = {
    products: [],
    deliveryCharges: 20,
    handlingCharges: 10,
    tips: null
}

function cartReducer(state, action) {
    switch (action.type) {
        case "CART_PRODUCTS":
            return { ...state, products: action.payload };
        case "Cart_Tip":
            return { ...state, tips: action.payload };
        default:
            return state;
    }
}

export default function CartProvider({ children }) {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ cart: state, cartDispatch: dispatch }}>
            {children}
        </CartContext.Provider>
    )
}