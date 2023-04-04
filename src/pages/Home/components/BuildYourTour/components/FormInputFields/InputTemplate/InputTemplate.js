import React, {useState} from "react";
import InputMask from "react-input-mask";
import style from './InputTemplate.module.sass'

function InputTemplate({title, name, inputParams}) {

    const [inputValue, setInputValue] = useState()

    function onInputChange(event) {
        setInputValue(event.target.value)
    }

    return (
        <div className={style.inputBox}>
            <h5 className='form-title'>
                {title}
            </h5>

            <InputMask className={`${style.input} ${style.input + name}`} required
                       {...inputParams} onChange={onInputChange} value={inputValue}/>
        </div>
    )
}

export default InputTemplate