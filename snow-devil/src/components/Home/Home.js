import React from 'react'
import './Home.scss';
import MainCardContainer from '../MainCardContainer/MainCardContainer';
import ItemContainer from '../ItemsContainer/ItemContainer';
function Home() {
    return (
        <section className="home__section">
            <MainCardContainer />
            <ItemContainer />
        </section>
    )
}
export default Home
