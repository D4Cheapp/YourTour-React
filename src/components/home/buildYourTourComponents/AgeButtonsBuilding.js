import React from 'react';

function AgeButtonsBuilding() {
    return (
        <div className="build-tour-age-check">
            <h3 className="build-tour-age-check__title">
                Вам есть 18 лет?
            </h3>

            <div className="age-radio-buttons-container">
                <div className="age-radio-button">
                    <input type="radio" name='age' className="age-radio-button__input"/>

                    <h4 className="age-radio-button__label">
                        Да
                    </h4>
                </div>

                <div className="age-radio-button">
                    <input type="radio" name='age' className="age-radio-button__input"/>

                    <h4 className="age-radio-button__label">
                        Нет
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default AgeButtonsBuilding;