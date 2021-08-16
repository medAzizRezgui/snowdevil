import React, { useState, useContext, useEffect } from 'react';
import CartContext from '../../context/Cart-context/cart-context';

import { Link } from 'react-router-dom'
import './SkateProduct.scss'
function SkateProduct() {


    // Reset the scroll to the top 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { addToCart, boards, activeItem, setItemCount, itemCount } = useContext(CartContext);


    const [show, setShow] = useState(false)
    let val = show;
    let popup = null
    if (show) {
        popup = <p className='popup'>new item added to your cart !</p>
    }
    else {
        popup = null;
    }

    const addToCartHandler = (item) => {
        addToCart(item);
        setShow(!val)
    }
    const itemCountHandlerminus = (itemcount) => {

        setItemCount(itemcount - 1)

    }
    const itemCountHandlerplus = (itemcount) => {
        setItemCount(itemcount + 1)

    }
    useEffect(() => {
        setItemCount(0)

    }, [])
    return (
        <>

            <Link to='/cart'>
                {popup}
            </Link>

            {/* Green Box */}
            {boards.filter(item => item.id === activeItem).map((item, i) => (
                <div className='container product__container' key={i}>
                    <div className="product__image" key={i} > {/* Red Box */}
                        <img src={item.img} alt="" />
                    </div>
                    <div className="product">   {/* Red Box */}
                        <div className="product__info">  {/* Gray Box */}
                            <p className="product__title">{item.title}</p>
                            <p className="product__price">${item.price}</p>
                        </div>


                        <div className="product__cta">  {/* Gray Box */}
                            <div className="row row-cols-2 row-cols-sm-3 my__row">
                                <div className="col-6 col-sm-5 my__col">
                                    <p className="product__cta__label">size</p>
                                    <select className="product__cta__select">
                                        <option value="" className='product__cta__option'>150cm</option>
                                        <option value="" className='product__cta__option'>200cm</option>
                                    </select>
                                </div>

                                <div className="col-6 col-sm-2 my__col">
                                    <p className="product__cta__label">Quantity</p>
                                    <div className="product__cta__count">
                                        <p onClick={() => itemCountHandlerminus(itemCount)}
                                            className='count__minus' >-</p>
                                        <p className={'count'}>{itemCount}</p>
                                        <p onClick={() => itemCountHandlerplus(itemCount)}
                                            className='count__plus' >+</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Gray Box */}
                        <div className="product__buy__btns">
                            <button
                                onClick={() => addToCartHandler(item)}
                                className="add__to__cart">add to cart</button>
                            <button className="buy__it__now">buy it now</button>
                        </div>
                        <div className="product__description">
                            <ul className="desc__list">
                                <li className='desc__list__item'>

                                    DIRECTIONAL ALL-MOUNTAIN
                                </li>
                                <li className='desc__list__item'> DEEP PROGRESSIVE</li>
                                <li className='desc__list__item'> Flex rate 4/10</li>

                                <li className='desc__list__item'> WOOD 562</li>
                                <li className='desc__list__item'>  AMPTEK AUTO-TURN</li>
                            </ul>
                        </div>
                    </div>

                </div>

            ))}



        </>
    )
}

export default SkateProduct
