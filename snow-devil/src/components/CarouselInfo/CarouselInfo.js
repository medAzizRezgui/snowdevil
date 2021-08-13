import './CarouselInfo.scss';
import React from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Right from '../../assets/chevron-right.svg';
import Left from '../../assets/chevron-left.svg';

function CarouselInfo(props) {
    return (
        <div className="hero__slide__1 ">
            <div className="row hero__slide__1__text">
                <div className="col col-12">
                    <h1 className="hero__slide__1__title">{props.title}</h1>
                </div>

            </div>
            <div className="hero__slide__1__cta">
                <ButtonBack
                    className='carousel__btn '>
                    <img src={Left} alt="" className="carousel__icon" />
                </ButtonBack>
                <ButtonNext
                    className='carousel__btn '>
                    <img src={Right} alt="" className="carousel__icon" />
                </ButtonNext>
                <a href="/" className='hero__slide__1__shopping'>{props.shopping} →</a>
            </div>
        </div>
    )
}

export default CarouselInfo
