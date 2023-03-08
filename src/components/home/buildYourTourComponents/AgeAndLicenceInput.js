import React from 'react';

function AgeAndLicenceInput() {
    return (
        <>
            <div className="build-tour-age-check">
                <h3 className="build-tour-age-check__title form-title">
                    Вам есть 18 лет?
                </h3>

                <div className="age-radio-buttons-container">
                    <label className="age-radio-button">
                        <input type="radio" name='age' className="age-radio-button__input"/>

                        <div className="age-radio-button__custom-checkbox"/>

                        <h4 className="age-radio-button__label">
                            Да
                        </h4>
                    </label>

                    <label className="age-radio-button">
                        <input type="radio" name='age' className="age-radio-button__input"/>

                        <div className="age-radio-button__custom-checkbox"/>

                        <h4 className="age-radio-button__label">
                            Нет
                        </h4>
                    </label>
                </div>
            </div>

            <label className="license-agreement">
                <input type="checkbox" className="license-agreement__checkbox"/>

                <div className="license-agreement__custom-checkbox"/>

                <p className="license-agreement__contract">
                    Нажимая кнопку, я принимаю условия 

                    <a href="" className="license-agreement__link">
                        Лицензионного договора
                    </a>
                </p>
            </label>
        </>

    );
}

export default AgeAndLicenceInput;