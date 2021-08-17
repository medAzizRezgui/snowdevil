import React from 'react'
import './AccessoriesItem.scss'
import { Link } from 'react-router-dom'
function AccessoriesItem(props) {
    return (
        <div

            className="item__accessories">
            <img src={props.img} alt="" className="item__accessories__image" />
            <h4 className="item__accessories__title">{props.title}</h4>
            <span className="item__accessories__price">${props.price}</span>
            <span className={props.sale ? 'item__accessories__sale' : null}>{props.sale ? 'Sale' : ''}</span>
            <div
                onClick={props.active}
                className={"item__accessories__modal"}>
                <Link to='/accessoriesproduct'>
                    <p
                        className="view__more">View</p>
                </Link>

            </div>
        </div>
    )
}

export default AccessoriesItem
