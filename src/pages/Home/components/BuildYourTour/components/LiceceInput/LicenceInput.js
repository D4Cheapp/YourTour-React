import React from 'react';
import './LicenceInput.sass';

function LicenceInput() {
    return (
        <label className="licence-agreement">
            <input type="checkbox" className="licence-agreement__checkbox"/>

            <div className="licence-agreement__custom-checkbox"/>

            <p className="licence-agreement__contract">
                Нажимая кнопку, я принимаю условия

                <a href="src/components/home/sections/buildYourTourComponents" className="licence-agreement__link">
                    Лицензионного договора
                </a>
            </p>
        </label>
    );
}

export default LicenceInput;