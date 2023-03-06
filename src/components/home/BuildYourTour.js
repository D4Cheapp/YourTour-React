import React from 'react';
import SectionTitle from './SectionTitle';
import InputBuilding from "./buildYourTourComponents/InputBuilding";
import AgeButtonsBuilding from "./buildYourTourComponents/AgeButtonsBuilding";
import FormBuildingButtons from "./buildYourTourComponents/FormBuildingButtons";

function BuildYourTour() {
    return (
        <section className='build-your-tour'>
            <SectionTitle title='Собери свой тур'/>

            <form className='tour-building-form'>
                <InputBuilding/>

                <div className="building-comment-input">
                    <h3 className="building-comment-input__title">
                        Комментарий
                    </h3>

                    <textarea rows="8" cols="135" className="building-comment-input__comment"/>
                </div>

                <AgeButtonsBuilding/>

                <div className="license-agreement">
                    <input type="checkbox" className="license-agreement__checkbox"/>
                    <p className="license-agreement__contract">Нажимая кнопку, я принимаю условия
                        <a href="" className="license-agreement__link"> Лицензионного договора</a>
                    </p>
                </div>

                <FormBuildingButtons/>
            </form>
        </section>
    );
}

export default BuildYourTour;