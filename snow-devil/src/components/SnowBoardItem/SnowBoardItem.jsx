import React from 'react'
import './SnowBoardItem.scss'
import { Link } from 'react-router-dom'
function SnowBoardItem(props) {
    return (
        <div

            className="item__snowboard">
            <img src={props.img} alt="" className="item__snowboard__image" />
            <h4 className="item__snowboard__title">{props.title}</h4>
            <span className="item__snowboard__price">${props.price}</span>
            <span className={props.sale ? 'item__snowboard__sale' : null}>{props.sale ? 'Sale' : ''}</span>

            <div
                onClick={props.active}
                className={"item__snowboard__modal"}>
                <Link to='/product'>
                    <p
                        className="view__more">View</p>
                </Link>

            </div>
        </div>
    )
}

export default SnowBoardItem
