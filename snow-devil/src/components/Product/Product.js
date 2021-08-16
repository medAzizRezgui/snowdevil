import React, { useState, useContext, useEffect } from 'react';
import CartContext from '../../context/Cart-context/cart-context';

import { Link } from 'react-router-dom'
import './Product.scss'
function Product() {


    // Reset the scroll to the top 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { addToCart, items, activeItem, setItemCount, itemCount } = useContext(CartContext);


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
            {items.filter(item => item.id === activeItem).map((item, i) => (
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
                                        <option value="" className='product__cta__option'>Small</option>
                                        <option value="" className='product__cta__option'>Large</option>
                                    </select>
                                </div>
                                <div className="col-6 col-sm-5 my__col">
                                    <p className="product__cta__label">Color</p>
                                    <select className="product__cta__select">
                                        <option value="" className='product__cta__option'>Red</option>
                                        <option value="" className='product__cta__option'>Blue</option>
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
                                    Mapped with 3M™ Thinsulate™ Insulation [40G Body / Sleeves / Hood]
                                </li>
                                <li className='desc__list__item'>Embossed Taffeta Lining</li>
                                <li className='desc__list__item'>DRYRIDE Durashell™ 2-Layer Oxford Fabric [10,000MM, 5,000G]</li>
                            </ul>
                        </div>
                    </div>

                </div>

            ))}



        </>
    )
}

export default Product
