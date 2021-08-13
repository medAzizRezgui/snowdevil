import React from 'react'
import ItemHero from '../ItemHero/ItemHero';
import ItemCloth from '../ItemCloth/ItemCloth';
import Jacket1 from '../../assets/jacket1.png'
import './ItemContainer.scss';
function ItemContainer() {


    return (
        <div className="container items__container">
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-auto">
                <div className="col-6 stretch">
                    <ItemHero
                        title={'jackets'} />
                </div>
                <div className="col-6">
                    <ItemCloth
                        title={'Campus'}
                        sale={false}
                        price={132.90}
                        img={Jacket1}
                    />
                </div>
                <div className="col-6">
                    <ItemCloth
                        title={'Campus'}
                        sale={false}
                        price={132.90}
                        img={Jacket1}
                    />
                </div>
                <div className="col-6">
                    <ItemCloth
                        title={'Campus'}
                        sale={true}
                        price={132.90}
                        img={Jacket1}
                    />
                </div>

            </div>
        </div>
    )
}

export default ItemContainer
