import React from 'react'
import './ItemHero.scss'
function ItemHero(props) {
    return (
        <div className="item__hero">
            <h4 className="item__hero__title">{props.title}</h4>
            <span className="item__hero__subtitle">view all</span>
            <div className="item__modal">

            </div>
        </div>
    )
}

export default ItemHero
