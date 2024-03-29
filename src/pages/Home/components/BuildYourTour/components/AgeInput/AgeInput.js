import React from 'react';
import style from './AgeInput.module.sass'

function AgeInput({confirmAgeRef}) {
    return (
        <>
            <div className={style.ageCheck}>
                <h5 className="form-title">
                    Вам есть 18 лет?
                </h5>

                <div className={style.buttonsBox}>
                    <label className={style.button}>
                        <input type="radio" name='age' value='adult'
                               className={style.input} ref={confirmAgeRef}/>

                        <div className={style.customCheckbox}/>

                        <h4 className={style.label}>
                            Да
                        </h4>
                    </label>

                    <label className={style.button}>
                        <input type="radio" name='age' value='young' className={style.input}/>

                        <div className={style.customCheckbox}/>

                        <h4 className={style.label}>
                            Нет
                        </h4>
                    </label>
                </div>
            </div>
        </>

    );
}

export default AgeInput;