import React from 'react'
import MainItemCard from '../MainItemCard/MainItemCard';
import Board from '../../assets/home__skate.png';
import Hat from '../../assets/home__hat.png'
import Boots from '../../assets/home__boot.png'
import './MainCardContainer.scss'
function MainCardContainer() {
    return (
        <div className="container">
            <div className="cards row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
                <div className="col-12">
                    <MainItemCard
                        title={'snowboard'}
                        image={Board}
                    />
                </div>
                <div className="col-12">
                    <MainItemCard
                        title={'ski'}
                        image={Boots}
                    />
                </div>
                <div className="col-12">
                    <MainItemCard
                        title={'accessories'}
                        image={Hat}
                    />
                </div>
            </div>
        </div>
    )
}

export default MainCardContainer
