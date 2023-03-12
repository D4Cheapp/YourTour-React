import React from 'react';
import '../../sass/home/home.sass'
import Header from "./sections/Header";
import ChooseYourTour from "./sections/ChooseYourTour";
import BuildYourTour from "./sections/BuildYourTour";
import Feedback from "./sections/Feedback";
import TourPhotos from "./sections/TourPhotos";
import TourHistory from "./sections/TourHistory";

function Home() {
    return (
        <>
            <Header/>
            <ChooseYourTour/>
            <BuildYourTour/>
            <Feedback/>
            <TourPhotos/>
            <TourHistory/>
        </>
    )
}

export default Home;