import React, {useState} from 'react';
import SectionTitle from '../SectionTitle';
import InputBuilding from "./buildYourTourComponents/InputBuilding";
import AgeAndLicenceInput from "./buildYourTourComponents/AgeAndLicenceInput";
import FormBuildingButtons from "./buildYourTourComponents/FormBuildingButtons";
import {useNavigate} from "react-router-dom";

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