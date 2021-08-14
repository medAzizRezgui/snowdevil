import React, { useState } from 'react';
import Menu from '../../assets/menu.svg';
import ShoppingCart from '../../assets/shopping-cart.svg'
import './NavigationBar.scss';
import Drawer from '../../components/Drawer/Drawer';
function NavigationBar() {


    const [show, setShow] = useState(false);
    return (
        <nav className="navigation__bar">
            <div className="container">
                <img
                    onClick={() => setShow(true)}
                    src={Menu} alt="Menu" className="navigation__menu" />
                <img src='https://cdn.shopify.com/s/files/1/0938/8938/files/logo_3_165x@2x.png?v=1516999166' alt="logo" className="navigation__logo" />
                <img src={ShoppingCart} alt="shopping cart" className="navigation__shoppingCart" />
            </div>
            <Drawer show={show}
                close={() => setShow(false)}
            />
        </nav>
    )
}

export default NavigationBar
