import CartContext from "./cart-context";
import CartReducer from "./CartReducer";
import React, { useState, useReducer } from 'react';
import { initialState } from "./CartReducer";
import Jacket1 from '../../assets/jacket1.png';
import Jacket2 from '../../assets/jacket2.png';
import Jacket3 from '../../assets/jacket3.png';
import Jacket4 from '../../assets/jacket4.png';
import Jacket5 from '../../assets/jacket5.png';
import skate1 from '../../assets/skate1.png';
import skate2 from '../../assets/skate2.png';
import skate3 from '../../assets/skate3.png';
import skate4 from '../../assets/skate4.png';
import skate5 from '../../assets/skate5.png';
import skate6 from '../../assets/skate6.png';
const CartState = (props) => {

    const [itemCount, setItemCount] = useState(0);
    if (itemCount < 0) {
        setItemCount(0)
    }
    const [activeItem, setActiveItem] = useState(null)
    const [state, dispatch] = useReducer(CartReducer, initialState)
    const jackets = [
        {
            title: 'Haze Varsity ',
            sale: true,
            price: 132.90,
            img: Jacket1,
            id: 1,
            count: itemCount
        },
        {
            title: 'Greed Jacket ',
            sale: false,
            price: 152.90,
            img: Jacket2,
            id: 2,
            count: itemCount
        },
        {
            title: 'Gala',
            sale: false,
            price: 122.90,
            img: Jacket3,
            id: 3,
            count: itemCount
        }
        , {
            title: 'Restricted Pole Cat',
            sale: true,
            price: 139.96,
            img: Jacket4,
            id: 4,
            count: itemCount
        }
        , {
            title: 'Juana',
            sale: false,
            price: 899.96,
            img: Jacket5,
            id: 5,
            count: itemCount
        }
    ]
    const boards = [
        {
            title: 'Trickstick Amptek ',
            sale: true,
            price: 262.46,
            img: skate1,
            id: 1,
            count: itemCount
        },
        {
            title: 'Tone Snowboard ',
            sale: false,
            price: 322.46,
            img: skate2,
            id: 2,
            count: itemCount
        },
        {
            title: 'Templar Magtek ',
            sale: true,
            price: 399.99,
            img: skate3,
            id: 3,
            count: itemCount
        },
        {
            title: 'Jibsaw Magtek ',
            sale: false,
            price: 152.90,
            img: skate4,
            id: 4,
            count: itemCount
        },
        {
            title: 'Jibsaw Magtek ',
            sale: false,
            price: 499.95,
            img: skate5,
            id: 5,
            count: itemCount
        },
        {
            title: ' Circuit Amptek ',
            sale: false,
            price: 299.95,
            img: skate6,
            id: 6,
            count: itemCount
        },


    ]
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
                setActiveItem,
                jackets,
                itemCount,
                boards,
                setItemCount

            }}
        >
            {props.children}
        </CartContext.Provider>




    )

}
export default CartState;