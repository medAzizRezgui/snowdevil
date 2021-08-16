import React, { useContext } from 'react'
import CartContext from '../../context/Cart-context/cart-context';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom'
import './Cart.scss'
function Cart() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const { cart } = useContext(CartContext);

    let cartState = '';
    let cartPrice = ''
    if (cart.length === 0) {
        cartState =
            <>
                <p className="cart__state">your cart is currently empty</p>
                <Link to='/'>
                    <p className="cart__empty__btn">continue browsing</p>
                </Link>
            </>
        cartPrice = null
    }
    else {
        cartState = null
        cartPrice = <div className="total__price">

            <p className="price">
                $ {
                    cart.map((item) => (
                        item.price * item.count
                    )).reduce(reducer, 0).toFixed(2)
                }
            </p>

            <p className='total__price__sub'>Taxes and shipping calculated at checkout </p>

            <div className="cart__btns">
                <button className="update">update cart</button>
                <button className="checkout">check out</button>
            </div>
        </div>
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
                            itemCount={item.count}
                        >
                        </CartItem>
                    </div>
                )

                )}
            </div>
            {cartPrice}
        </div>
    )
}

export default Cart
