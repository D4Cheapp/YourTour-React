import React, {useEffect, useRef} from 'react';
import './AgeInput.sass'

function AgeInput({setAgeValidation}) {
    const confirmAgeButton = useRef()

    useEffect(() => {
        setAgeValidation(confirmAgeButton)
    },[])

    return (
        <>
            <div className="build-tour-age-check">
                <h5 className="build-tour-age-check__title form-title">
                    Вам есть 18 лет?
                </h5>

                <div className="age-radio-buttons-container">
                    <label className="age-radio-button">
                        <input type="radio" name='age' value='adult' className="age-radio-button__input"
                               ref={confirmAgeButton} required/>

                        <div className="age-radio-button__custom-checkbox"/>

                        <h4 className="age-radio-button__label">
                            Да
                        </h4>
                    </label>

                    <label className="age-radio-button">
                        <input type="radio" name='age' value='young' className="age-radio-button__input"/>

                        <div className="age-radio-button__custom-checkbox"/>

                        <h4 className="age-radio-button__label">
                            Нет
                        </h4>
                    </label>
                </div>
            </div>
        </>

    );
}

export default AgeInput;