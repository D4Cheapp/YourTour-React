import {AgeInput, FormButtons, FormInputFields, LicenceInput} from "./components";
import {SectionTitle} from "../SectionTitle";
import {useNavigate} from "react-router-dom";
import React, {useState} from 'react';
import './BuildYourTour.sass';

function BuildYourTour() {
    const navigator = useNavigate()

    const [confirmAgeButton, setConfirmAgeButton] = useState()

    function redirectAfterSubmit(event) {
        event.preventDefault()

        if (confirmAgeButton?.current.checked) {
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

                <FormInputFields/>

                <AgeInput setAgeValidation={setConfirmAgeButton}/>

                <LicenceInput/>

                <FormButtons/>
            </form>
        </section>
    );
}

export default BuildYourTour;