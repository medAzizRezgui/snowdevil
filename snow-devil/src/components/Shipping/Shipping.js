import React from 'react'
import './Shipping.scss'
function Shipping() {
    return (
        <div className="container payment__container">
            <h1 className="payment__title"> Payment </h1>
            <span className="payment__subtitle"> All transactions are secure and encrypted. </span>
            <div className="payment__box">
                <div className="box__heading">
                    <p className="box__title">Credit Card</p>
                    <img src="https://www.kindpng.com/picc/m/35-351793_credit-or-debit-card-mastercard-logo-visa-card.png" alt="" className="ccv" />
                </div>
                <div className="payment__inputs">
                    <input type="text" className="payment__form" placeholder='Card Number' maxLength='12' />
                    <input type="text" className="payment__form" placeholder='Name on card' />
                    <input type="text" className="payment__form" placeholder='Expiration date (MM/YY)' />
                    <input type="password" className="payment__form" placeholder='Security code' maxLength="4" />

                </div>
            </div>
            <button className="pay">Pay now</button>
        </div>
    )
}

export default Shipping
