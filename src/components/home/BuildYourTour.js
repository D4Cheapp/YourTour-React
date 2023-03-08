import React from 'react';
import SectionTitle from './SectionTitle';
import InputBuilding from "./buildYourTourComponents/InputBuilding";
import AgeAndLicenceInput from "./buildYourTourComponents/AgeAndLicenceInput";
import FormBuildingButtons from "./buildYourTourComponents/FormBuildingButtons";

function BuildYourTour() {
    return (
        <section className='build-your-tour'>
            <SectionTitle title='Собери свой тур'/>

            <form className='tour-building-form'>
                <InputBuilding/>

                <AgeAndLicenceInput/>

                <FormBuildingButtons/>
            </form>
        </section>
    );
}

export default BuildYourTour;