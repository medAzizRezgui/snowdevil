import './Carousel.scss';
import React from 'react';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import CustomSpinner from './CustomSpinner';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Hero__Image__1 from '../../assets/hero__slide-1.png'
import Hero__Image__2 from '../../assets/hero__slide-2.png';
import CarouselInfo from '../CarouselInfo/CarouselInfo';
function Carousel() {

    return (
        <>
            <CarouselProvider
                isPlaying={true}
                interval={7000}
                infinite={true}
                visibleSlides={1}
                naturalSlideHeight={100}
                naturalSlideWidth={100}
                className={'carousel__body'}
                totalSlides={2}
                currentSlide={0}
                hasMasterSpinner={true}
                dragEnabled={true}
            >
                <Slider

                    spinner={() => <CustomSpinner />}
                    className='slider__body'
                >
                    <Slide
                        index={0}
                        classNameVisible="animation__slide"
                        innerClassName={'slide__item__inner'}
                        className='slide__item'>
                        <Image
                            hasMasterSpinner={true}
                            isBgImage={true}
                            className={'hero__image-1'}
                            src={Hero__Image__1} />
                        <div className="container">
                            <CarouselInfo
                                title={'life without boundaries'}
                                shopping={'Shop snowboards'}

                            />
                        </div>
                    </Slide>
                    <Slide
                        classNameVisible="animation__slide"
                        index={1}
                        innerClassName={'slide__item__inner'}
                        className='slide__item'>
                        <Image
                            hasMasterSpinner={true}
                            isBgImage={true}
                            className={'hero__image-1'}
                            src={Hero__Image__2} />
                        <div className="container">
                            <CarouselInfo
                                title={'Adventure this way'}
                                shopping={'Shop winter jackets'}
                            />
                        </div>
                    </Slide>
                </Slider>
            </CarouselProvider >

        </>
    )
}

export default Carousel
