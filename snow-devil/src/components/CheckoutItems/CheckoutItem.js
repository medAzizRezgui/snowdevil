import React, { useState } from 'react'
import './CheckoutItem.scss'
import Jacket5 from '../../assets/jacket5.png';

function CheckoutItem() {
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
                    <div className="checkout__item">
                        <span className="circle__count">4</span>
                        <img src={Jacket5} alt="" className="checkout__item__image" />
                        <div className="checkout__item__info">
                            <div className="checkout__item__info__text">
                                <p className="checkout__item__info__text__title">Some jacket</p>
                                <p className="checkout__item__info__text__subtitle">Some jacket info</p>

                            </div>

                        </div>
                        <p className="checkout__item__price">$1449</p>
                    </div>

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
                        <span className="total__price">$1.581.98</span>
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
                    <div className="show__order__price">$1999</div>
                </div>
            </div>
            {checkoutItems}
        </>
    )
}

export default CheckoutItem
