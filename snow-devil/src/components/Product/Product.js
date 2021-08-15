import React, { useState, useContext } from 'react';
import Jacket from '../../assets/jacket1.png'
import CartContext from '../../context/Cart-context/cart-context';
import Jacket1 from '../../assets/jacket1.png';
import Jacket2 from '../../assets/jacket2.png';
import Jacket3 from '../../assets/jacket3.png';
import { Link } from 'react-router-dom'
import './Product.scss'
function Product() {
    const items = [
        {
            title: 'Campus',
            sale: false,
            price: 132.90,
            img: Jacket1,
            id: 1
        },
        {
            title: 'Campus',
            sale: false,
            price: 132.90,
            img: Jacket2,
            id: 2
        },
        {
            title: 'Campus',
            sale: true,
            price: 132.90,
            img: Jacket3,
            id: 3
        }
    ]
    const { addToCart, cart } = useContext(CartContext);
    const [show, setShow] = useState(false)
    const [count, setcount] = useState(1)
    let val = show;
    if (count < 1) {
        setcount(1)
    }
    let popup = null

    if (show) {
        popup = <p className='popup'>new item added to your cart !</p>
    }
    else {
        popup = null;
    }
    return (
        <>
            <Link to='/cart'>
                {popup}
            </Link>

            <div className='container product__container'> {/* Green Box */}

                <div className="product__image" > {/* Red Box */}
                    <img src={Jacket} alt="" />
                </div>
                <div className="product">   {/* Red Box */}
                    <div className="product__info">  {/* Gray Box */}
                        <p className="product__title">haze varsity</p>
                        <p className="product__price">$132,23</p>
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
                                    <p onClick={() => setcount(count - 1)}
                                        className='count__minus' >-</p>
                                    <p className={'count'}>{count}</p>
                                    <p onClick={() => setcount(count + 1)}
                                        className='count__plus' >+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Gray Box */}
                    <div className="product__buy__btns">
                        <button

                            className="add__to__cart">add to cart</button>
                        <button className="buy__it__now">buy it now</button>
                    </div>
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
        </>
    )
}

export default Product
