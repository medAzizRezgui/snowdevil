import React, { useState } from 'react'
import './Shipping.scss'
function Shipping() {
    const [show, setshow] = useState(false)

    let succ = ''
    if (show) {
        succ = <div className="payment__modal">
            <div className="modal checkout__modal"></div>
            <div className="payment__success">
                <p className="success__message">
                    Payment Successful !

                </p>
                <div className="check__icon">
                    <div class="success-checkmark">
                        <div class="check-icon">
                            <span class="icon-line line-tip"></span>
                            <span class="icon-line line-long"></span>
                            <div class="icon-circle"></div>
                            <div class="icon-fix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
    else {
        succ = ''
    }


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
            <button
                onClick={() => setshow(true)}
                className="pay">Pay now</button>
            {succ}
        </div>
    )
}

export default Shipping
