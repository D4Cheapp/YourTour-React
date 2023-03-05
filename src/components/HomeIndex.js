import React from 'react';
import Header from "./home/Header";
import ChooseYourTour from "./home/ChooseYourTour";
import BuildYourTour from "./home/BuildYourTour";
import '../sass/home/homeIndex.sass';

function HomeIndex() {
    return (
        <>
            <Header/>
            <ChooseYourTour/>
            <BuildYourTour/>
        </>
    )
}

export default HomeIndex;