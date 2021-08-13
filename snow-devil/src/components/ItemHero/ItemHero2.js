import React from 'react'
import classes from './ItemHero2.module.scss'
function ItemHero(props) {
    return (
        <div className={classes.item__hero}>
            <h4 className={classes.item__hero__title}>{props.title}</h4>
            <span className={classes.item__hero__subtitle}>view all</span>
            <div className={classes.item__modal}>
            </div>
        </div>
    )
}

export default ItemHero
