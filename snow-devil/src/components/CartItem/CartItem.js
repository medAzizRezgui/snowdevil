import React, { useContext } from 'react'
import './CartItem.scss'
import CartContext from '../../context/Cart-context/cart-context'

function CartItem(props) {
    const { deleteItem } = useContext(CartContext);

    return (
        <div

            className="cart__item">
            <img src={props.img} alt="" className="cart__item__image" />
            <h4 className="cart__item__title">{props.title}</h4>
            <span className="cart__item__price">${props.price}</span>
            <span>{props.itemCount}</span>
            <span
                onClick={() => deleteItem(props.id)}
                className="remove__cart__item">Delete</span>

        </div>
    )
}

export default CartItem
