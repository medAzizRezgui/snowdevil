import React, { useState } from 'react'
import './Checkout.scss'
import Jacket5 from '../../assets/jacket5.png';
import CheckoutItem from '../CheckoutItems/CheckoutItem';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import Shipping from '../Shipping/Shipping';

function Checkout() {
    return (
        <>
            <CheckoutItem />
            <CheckoutForm />
            {/* <Shipping /> */}
        </>
    )
}

export default Checkout
