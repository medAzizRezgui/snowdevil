import React from 'react'
import './Drawer.scss';
import search from '../../assets/search.svg'
function Drawer(props) {
    return (
        <div className={props.show ? 'show__drawer' : 'hide__drawer'}>
            <div className="side__nav">
                <div className="search__bar">
                    <input type="text" placeholder='Search' className="drawer__search" />
                    <img src={search} alt="" className='search__icon' />
                </div>

                <ul className="drawer__list">
                    <li className="drawer__item">Home</li>
                    <li className="drawer__item">snowboard</li>
                    <li className="drawer__item">Ski</li>
                    <li className="drawer__item">men</li>
                    <li className="drawer__item">women</li>
                    <li className="drawer__item">brands</li>
                    <li className="drawer__item">accessories</li>
                    <li className="drawer__item">sales</li>
                    <li className="drawer__item">account</li>


                </ul>
            </div>
            <div
                onClick={props.close}
                className="modal"></div>

        </div>
    )
}

export default Drawer
