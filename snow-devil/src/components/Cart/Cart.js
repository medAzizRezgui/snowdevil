import React, { useContext } from 'react'
import CartContext from '../../context/Cart-context/cart-context';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom'
import './Cart.scss'
function Cart() {

    const { cart } = useContext(CartContext);
    console.log(cart)
    let cartState = ''
    if (cart.length === 0) {
        cartState =
            <>
                <p className="cart__state">your cart is currently empty</p>
                <Link to='/'>
                    <p className="cart__empty__btn">continue browsing</p>
                </Link>
            </>
    }
    else {
        cartState = null
    }
    return (
        <div className="container cart__container">
            <h1 className="cart__title">Shopping cart</h1>
            {cartState}
            <div className="row cart__item__row">
                {cart.map((item, i) => (
                    <div
                        key={i + 342}
                        className="col-12">
                        <CartItem
                            title={item.title}
                            price={item.price}
                            img={item.img}
                            id={item.id}
                            key={i}
                        >
                        </CartItem>
                    </div>
                )

                )}
            </div>

        </div>
    )
}

export default Cart
