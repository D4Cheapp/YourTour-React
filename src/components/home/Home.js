import React from 'react';

import Header from "./sections/Header";
import ChooseYourTour from "./sections/ChooseYourTour";
import BuildYourTour from "./sections/BuildYourTour";
import Feedback from "./sections/Feedback";
import TourPhotos from "./sections/TourPhotos";
import TourHistory from "./sections/TourHistory";
import CTASection from "./sections/CTASection";

import '../../sass/home/home.sass'


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