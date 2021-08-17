import React, { useContext, useEffect } from 'react'
import AccessoriesItem from '../AccessoriesItem/AccessoriesItem';
import CartContext from '../../context/Cart-context/cart-context';
import './Accessories.scss';
function AccessoriesPage() {

    const { setActiveItem, accessories } = useContext(CartContext);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container items__container">
            <h2 className='accessories__title'>Accessories</h2>
            <div className="row row-cols-2 row-cols-sm-4  row-cols-md-6 ">

                {accessories.map((item, i) => (
                    <div
                        key={i + 342}
                        className="col-6">
                        <AccessoriesItem
                            title={item.title}
                            sale={item.sale}
                            price={item.price}
                            img={item.img}
                            id={item.id + 1}
                            key={i}
                            active={() => setActiveItem(item.id)}
                        >
                        </AccessoriesItem>
                    </div>))}
            </div>
        </div>
    )
}

export default AccessoriesPage
