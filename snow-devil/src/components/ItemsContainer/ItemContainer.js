import React, { useContext } from 'react'
import ItemHero from '../ItemHero/ItemHero';
import ItemCloth from '../ItemCloth/ItemCloth';
import Jacket1 from '../../assets/jacket1.png';
import Jacket2 from '../../assets/jacket2.png';
import Jacket3 from '../../assets/jacket3.png';
import CartContext from '../../context/Cart-context/cart-context';
import './ItemContainer.scss';
function ItemContainer() {

    const { addToCart, cart, setActiveItem, items } = useContext(CartContext);
    const addToCartHandler = (item) => {

        addToCart(item);

    }






    return (
        <div className="container items__container">
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-auto">
                <div className="col-6 stretch">
                    <ItemHero
                        title={'jackets'} />
                </div>


                {items.map((item, i) => (

                    <div
                        key={i + 342}
                        className="col-6">
                        <ItemCloth
                            title={item.title}
                            sale={item.sale}
                            price={item.price}
                            img={item.img}
                            id={item.id + 1}
                            key={i}
                            active={() => setActiveItem(item.id)}


                        >
                        </ItemCloth>
                    </div>))}


            </div>
        </div>
    )
}

export default ItemContainer
