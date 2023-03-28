import React from 'react';

import Header from "./components/Header";
import ChooseYourTour from "./components/ChooseYourTour/ChooseYourTour";
import BuildYourTour from "./components/BuildYourTour/BuildYourTour";
import Feedback from "./components/Feedback";
import TourPhotos from "./components/TourPhotos";
import TourHistory from "./components/TourHistory";
import CTASection from "./components/CTASection";

import './Home.sass'


function Home() {
    return (
        <>
            <Header/>
            <ChooseYourTour/>
            <BuildYourTour/>
            <Feedback/>
            <TourPhotos/>
            <TourHistory/>
            <CTASection/>
        </>
    )
}

export default Home;