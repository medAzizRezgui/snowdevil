import React from 'react'
import './Home.scss';
import MainCardContainer from '../MainCardContainer/MainCardContainer';
import ItemHero from '../ItemHero/ItemHero';

function Home() {
    return (
        <section className="home__section">
            <MainCardContainer />
            <ItemHero
                title={'jackets'} />
        </section>
    )
}

export default Home
