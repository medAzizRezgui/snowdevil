import React, { useState, useContext } from 'react'
import './CheckoutItem.scss'
import CartContext from '../../context/Cart-context/cart-context';
import CheckoutSingleItem from '../CheckoutSingleItem/CheckoutSingleItem';

function CheckoutItem() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const { cart } = useContext(CartContext);
    const [active, setactive] = useState(false)
    const [show, setshow] = useState(false)
    const [pop, setPop] = useState(false)
    const activeBtnHandler = (e) => {
        if (e.target.value !== '') {
            setactive(true)
        }
        else {
            setactive(false)
        }
    }
    let gift = ''
    if (pop) {
        gift = <p className='gift__text'>A gift will be added, enjoy!</p>
    }
    else {
        gift = ''
    }




    let checkoutItems = '';
    let val = show;
    if (val) {
        checkoutItems = <div className="outer__container">
            <div className="container checkout__container">
                <div className="checkout__items">

                    {cart.map((item, i) => (



                        <CheckoutSingleItem
                            title={item.title}
                            price={item.price}
                            image={item.img}
                            id={item.id}
                            key={i}
                            count={item.count}
                        >
                        </CheckoutSingleItem>

                    )

                    )}

                    <div className="checkout__gift">
                        <div className="checkout__gift__cta">
                            <input
                                onChange={(e) => activeBtnHandler(e)}
                                type="text" className="checkout__gift__input" placeholder='Gift card' />
                            <button
                                onClick={() => setPop(true)}
                                style={{ backgroundColor: active ? 'rgb(0, 110, 255)' : 'rgba(128, 128, 128, 0.388)' }}
                                className="checkout__gift__button">Go</button>
                        </div>
                        {gift}
                    </div>

                    <div className="checkout__total">
                        <span className="title">Total</span>
                        <span className="total__price">$ {
                            cart.map((item) => (
                                item.price * item.count
                            )).reduce(reducer, 0).toFixed(2)
                        }</span>
                    </div>
                </div>
            </div>
        </div>
    }
    else {
        checkoutItems = ''
    }
    return (
        <>
            <div className="checkout__header">
                <div className="container checkout__container">

                    <div className="show__order">
                        <img src="" alt="" className="show__order__cart" />
                        <p
                            onClick={() => setshow(!val)}
                            className="show__order__subtitle">Show order summary</p>
                        <img src="" alt="" className="show__order__arrow" />
                    </div>
                    <div className="show__order__price">$ {
                        cart.map((item) => (
                            item.price * item.count
                        )).reduce(reducer, 0).toFixed(2)
                    }</div>
                </div>
            </div>
            {checkoutItems}
        </>
    )
}

export default CheckoutItem
