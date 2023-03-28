import React, {useState} from 'react';
import SectionTitle from '../../SectionTitle';
import InputBuilding from "./components/InputBuilding";
import AgeAndLicenceInput from "./components/AgeAndLicenceInput";
import FormBuildingButtons from "./components/FormBuildingButtons";
import {useNavigate} from "react-router-dom";
import './BuildYourTour.sass';

function BuildYourTour() {
    const navigator = useNavigate()

    const [ageButtons, setAgeButtons] = useState()

    function redirectAfterSubmit(event) {
        event.preventDefault()

        if (ageButtons?.current.checked) {
            navigator('/build-tour')
        }
        else {
            alert("Для заполнения формы вам должно быть больше 18 лет");
        }
    }

    return (
        <section className='build-your-tour'>
            <SectionTitle title='Собери свой тур' isWrap={true} sectionName='build-your-tour'/>

            <form className='tour-building-form'
                  onSubmit={(event) => redirectAfterSubmit(event)}>

                <InputBuilding/>

                <AgeAndLicenceInput setButtons={setAgeButtons}/>

                <FormBuildingButtons/>
            </form>
        </section>
    );
}

export default BuildYourTour;