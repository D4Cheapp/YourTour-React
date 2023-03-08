import React from 'react';
import Header from "./Header";
import ChooseYourTour from "./ChooseYourTour";
import BuildYourTour from "./BuildYourTour";
import '../../sass/home/home.sass'

function Home() {
    return (
        <>
            <Header/>
            <ChooseYourTour/>
            <BuildYourTour/>
        </>
    )
}

export default Home;