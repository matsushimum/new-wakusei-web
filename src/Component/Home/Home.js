import React from 'react';
import Header from '../Header/Header.js';
import Hero from './Hero.js';
import HomeMain from './HomeMain.js';

function Home(){
    return(
        <>
        <Header />
        <Hero />
        <div class="whiteback" />
        <HomeMain />
        </>
    )
}

export default Home;