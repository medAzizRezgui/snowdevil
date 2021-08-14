import React from 'react'
import './ItemCloth.scss'
import { Link } from 'react-router-dom'
function ItemCloth(props) {
    return (
        <div

            className="item__cloth">
            <img src={props.img} alt="" className="item__cloth__image" />
            <h4 className="item__cloth__title">{props.title}</h4>
            <span className="item__cloth__price">${props.price}</span>
            <span className={props.sale ? 'item__cloth__sale' : null}>{props.sale ? 'Sale' : ''}</span>
            <div className={"item__cloth__modal"}>
                <Link to='/product'>
                    <p className="view__more">View</p>
                </Link>

            </div>
        </div>
    )
}

export default ItemCloth
