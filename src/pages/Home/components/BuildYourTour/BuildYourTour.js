import {AgeInput, FormButtons, FormInputFields, LicenceInput} from "./components";
import {SectionTitle} from "../SectionTitle";
import {useNavigate} from "react-router-dom";
import React, {useState} from 'react';
import style from './BuildYourTour.module.sass';

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
        <section className={style.tourBuild}>
            <SectionTitle title='Собери свой тур' isWrap={true} sectionStyle={style}/>

            <form className={style.form}
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