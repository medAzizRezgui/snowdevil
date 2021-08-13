import './Carousel.scss';
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, Image, ImageWithZoom, ButtonNext, Dot, ButtonPlay, } from 'pure-react-carousel';
import CustomSpinner from './CustomSpinner';
import 'pure-react-carousel/dist/react-carousel.es.css';
function Carousel() {

    return (
        <CarouselProvider
            isPlaying={false}
            interval={5000}
            infinite={true}
            visibleSlides={1}
            naturalSlideHeight={100}
            naturalSlideWidth={100}
            className={'carousel__body'}
            totalSlides={3}
            currentSlide={0}
            hasMasterSpinner={true}
        >
            <Slider
                spinner={() => <CustomSpinner />}
                className='slider__body'
                classNameAnimation='newSlide'
            >
                <Slide

                    classNameVisible='slide'
                    index={0}
                    className='slide__item' >
                    <div className="card">

                        <ButtonNext
                            className='btn next'>
                            👉
                        </ButtonNext>
                        <ImageWithZoom
                            hasMasterSpinner={true}
                            src='https://images.unsplash.com/45/QDSMoAMTYaZoXpcwBjsL__DSC0104-1.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1355&q=80'>

                        </ImageWithZoom>
                        <ButtonBack
                            className='btn back'>
                            👈
                        </ButtonBack>
                    </div>
                </Slide>
                <Slide

                    classNameVisible='slide'
                    index={1}
                    className='slide__item' >
                    <div className="card"
                    >

                        <ButtonNext
                            className='btn next'>
                            👉
                        </ButtonNext>
                        <h1
                            onClick={() => console.log('supp')}
                        >This is the main slide</h1>
                        <ButtonBack
                            className='btn back'>
                            👈
                        </ButtonBack>
                    </div>
                </Slide>
                <Slide
                    classNameVisible='slide'
                    index={2}
                    className='slide__item' >
                    <div className="card">

                        <ButtonNext
                            className='btn next'>
                            👉
                        </ButtonNext>

                        <ButtonBack
                            className='btn back'>
                            👈
                        </ButtonBack>
                    </div>
                </Slide>
            </Slider>
            <div className="dots">
                <Dot
                    className={'dot'}
                    slide={0}>
                </Dot>
                <Dot
                    className={'dot'}
                    slide={1}>
                </Dot>
                <Dot
                    className={'dot'}
                    slide={2}>
                </Dot>
            </div>
            <ButtonPlay>Play!</ButtonPlay>
        </CarouselProvider >
    )
}

export default Carousel
