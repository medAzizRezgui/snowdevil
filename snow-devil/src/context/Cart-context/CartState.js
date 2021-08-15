import CartContext from "./cart-context";
import CartReducer from "./CartReducer";
import React, { useState, useReducer } from 'react';
import { initialState } from "./CartReducer";

const CartState = (props) => {


    const [activeItem, setActiveItem] = useState(null)
    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addToCart = (item) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: item,
        })
    }
    // Delete a todo
    const deleteItem = (itemID) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: itemID,
        });
    };

    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                addToCart,
                deleteItem,
                activeItem,
                setActiveItem
            }}
        >
            {props.children}
        </CartContext.Provider>




    )

}
export default CartState;