import React from 'react'
import './Drawer.scss';
import search from '../../assets/search.svg';
import { Link } from 'react-router-dom'
function Drawer(props) {
    return (
        <div className={props.show ? 'show__drawer' : 'hide__drawer'}>
            <div className="side__nav">
                <div className="search__bar">
                    <input type="text" placeholder='Search' className="drawer__search" />
                    <img src={search} alt="" className='search__icon' />
                </div>

                <ul className="drawer__list">
                    <Link to='/'>
                        <li
                            onClick={props.close}
                            className="drawer__item">Home</li>
                    </Link>
                    <Link to='/snowboard'>
                        <li
                            onClick={props.close}
                            className="drawer__item">snowboard</li>
                    </Link>

                    <Link to='/accessories'>
                        <li
                            onClick={props.close}
                            className="drawer__item">Accessories</li>
                    </Link>
                    <li className="drawer__item">men</li>
                    <li className="drawer__item">women</li>
                    <li className="drawer__item">brands</li>
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
