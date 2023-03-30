import React, {useEffect, useRef} from 'react';
import style from './AgeInput.module.sass'

function AgeInput({setAgeValidation}) {
    const confirmAgeButton = useRef()

    useEffect(() => {
        setAgeValidation(confirmAgeButton)
    },[])

    return (
        <>
            <div className={style.ageCheck}>
                <h5 className="form-title">
                    Вам есть 18 лет?
                </h5>

                <div className={style.buttonsBox}>
                    <label className={style.button}>
                        <input type="radio" name='age' value='adult' className={style.input}
                               ref={confirmAgeButton} required/>

                        <div className={style.customCheckbox}/>

                        <h4 className={style.label}>
                            Да
                        </h4>
                    </label>

                    <label className={style.button}>
                        <input type="radio" name='age' value='young' className={style.input} required/>

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