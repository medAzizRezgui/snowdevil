import React from 'react'

function CheckoutSingleItem(props) {
    return (
        <div className="checkout__item">
            <span className="circle__count">{props.count}</span>
            <img src={props.image} alt="" className="checkout__item__image" />
            <div className="checkout__item__info">
                <div className="checkout__item__info__text">
                    <p className="checkout__item__info__text__title">{props.title}</p>
                    <p className="checkout__item__info__text__subtitle">Some  info</p>

                </div>

            </div>
            <p className="checkout__item__price">${props.price}</p>
        </div>
    )
}

export default CheckoutSingleItem
