import React from 'react'
import './MainItemCard.scss'
function MainItemCard(props) {
    return (
        <div className="container item__container">
            <h3 className="item__title">{props.title}</h3>
            <span className="item__subtitle">view all</span>
            <img src={props.image} alt="" className="item__image" />
        </div>
    )
}

export default MainItemCard
