import React from 'react'
import ItemHero2 from '../ItemHero/ItemHero2';
import ItemCloth from '../ItemCloth/ItemCloth';
import Cartel from '../../assets/cartel.png';
import './ItemContainer.scss';
function ItemContainer() {

    return (
        <div className="container items__container">
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-auto">
                <div className="col-6 stretch">
                    <ItemHero2
                        title={'snowboard bindings'} />
                </div>
                <div className="col-6">
                    <ItemCloth
                        title={'Cartel'}
                        sale={false}
                        price={142.90}
                        img={Cartel}
                    />
                </div>
                <div className="col-6">
                    <ItemCloth
                        title={'Cartel'}
                        sale={false}
                        price={152.90}
                        img={Cartel}
                    />
                </div>
                <div className="col-6">
                    <ItemCloth
                        title={'Cartel'}
                        sale={true}
                        price={182.90}
                        img={Cartel}
                    />
                </div>

            </div>
        </div>
    )
}

export default ItemContainer
