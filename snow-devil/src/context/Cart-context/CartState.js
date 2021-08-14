import CartContext from "./cart-context";
import CartReducer from "./CartReducer";
import React, { useState, useReducer } from 'react';
import { initialState } from "./CartReducer";

const CartState = (props) => {



    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addToCart = (item) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: item,
        })
    }
    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                addToCart,
            }}
        >
            {props.children}
        </CartContext.Provider>




    )

}
export default CartState;