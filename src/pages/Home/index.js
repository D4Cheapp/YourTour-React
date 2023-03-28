import {BuildYourTour, ChooseYourTour, CTASection, Feedback, Header, TourHistory, TourPhotos} from "./components";
import React from 'react';

function Index() {
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

export default Index;