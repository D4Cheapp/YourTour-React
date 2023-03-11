import React from 'react';
import '../../sass/home/home.sass'
import Header from "./Header";
import ChooseYourTour from "./ChooseYourTour";
import BuildYourTour from "./BuildYourTour";
import Feedback from "./Feedback";
import TourPhotos from "./TourPhotos";

function Home() {
    return (
        <>
            <Header/>
            <ChooseYourTour/>
            <BuildYourTour/>
            <Feedback/>
            <TourPhotos/>
        </>
    )
}

export default Home;