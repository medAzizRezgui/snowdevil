import React, { useContext, useEffect } from 'react'
import SnowBoardItem from '../SnowBoardItem/SnowBoardItem';
import CartContext from '../../context/Cart-context/cart-context';
import './SnowBoardPage.scss';
function SnowBoardPage() {

    const { setActiveItem, boards } = useContext(CartContext);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container items__container">
            <h2 className='snowboard__title'>Snowboards</h2>
            <div className="row row-cols-2 row-cols-sm-4  row-cols-md-6 ">

                {boards.map((item, i) => (
                    <div
                        key={i + 342}
                        className="col-6">
                        <SnowBoardItem
                            title={item.title}
                            sale={item.sale}
                            price={item.price}
                            img={item.img}
                            id={item.id + 1}
                            key={i}
                            active={() => setActiveItem(item.id)}
                        >
                        </SnowBoardItem>
                    </div>))}
            </div>
        </div>
    )
}

export default SnowBoardPage
