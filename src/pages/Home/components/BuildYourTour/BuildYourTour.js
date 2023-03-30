import {AgeInput, FormButtons, FormInputFields, LicenceInput} from "./components";
import {SectionTitle} from "../SectionTitle";
import {useNavigate} from "react-router-dom";
import React, {useRef} from 'react';
import style from './BuildYourTour.module.sass';

function BuildYourTour() {
    const navigator = useNavigate()

    const confirmAgeRef = useRef()
    const licenseCheckboxRef = useRef()

    function handleSubmit(event) {
        event.preventDefault()

        if (confirmAgeRef?.current?.checked && licenseCheckboxRef?.current?.checked) {
            navigator('/build-tour')
        }
        else if (!confirmAgeRef?.current?.checked) {
            alert("Для заполнения формы вам должно быть больше 18 лет");
        }
        else {
            alert("Для заполнения формы вы должны принять лицензионное соглашение");
        }
    }

    return (
        <section className={style.tourBuild}>
            <SectionTitle title='Собери свой тур' isWrap={true} sectionStyle={style}/>

            <form className={style.form}
                  onSubmit={handleSubmit}>

                <FormInputFields/>

                <AgeInput confirmAgeRef={confirmAgeRef}/>

                <LicenceInput licenseCheckboxRef={licenseCheckboxRef}/>

                <FormButtons/>
            </form>
        </section>
    );
}

export default BuildYourTour;