import React from 'react'
import './Home.scss';
import MainCardContainer from '../MainCardContainer/MainCardContainer';
import ItemContainer from '../ItemsContainer/ItemContainer';
import ItemContainer2 from '../ItemsContainer/ItemContainer2';
function Home() {
    return (
        <section className="home__section">
            <MainCardContainer />
            <ItemContainer />
            <ItemContainer2 />
        </section>
    )
}

export default Home
