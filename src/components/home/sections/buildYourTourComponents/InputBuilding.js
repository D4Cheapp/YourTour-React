import React from 'react';
import Dropdown from '../../../../images/svg/Dropdown.svg'

function InputBuilding() {
    function dateRefactoring(event) {
        const dateContainer = event.target
        const value = dateContainer.value

        const shouldAddDot  = [2,5].includes(value.length)
        const shouldDelete = [3,6].includes(value.length) && event.key === 'Backspace'

        if (shouldAddDot){
            dateContainer.value = value + '.'
        }

        if (shouldDelete){
            event.preventDefault()
            dateContainer.value = value.substring(0,value.length-2)
        }
    }

    function numberRefactoring(event) {
        const numberContainer = event.target
        const value = numberContainer.value

        const isInvalidRegion = value.length === 0 && [8,7].includes(+event.key)
        const shouldDelete = [3,7,11,14].includes(value.length) && event.key === 'Backspace'

        if (isInvalidRegion){
            event.preventDefault()
            numberContainer.value = '+7'
        }

        if (value.length === 2) {
            numberContainer.value = value + '('
        }
        if (value.length === 6) {
            numberContainer.value = value + ')'
        }
        if ([10, 13].includes(value.length)) {
            numberContainer.value = value + '-'
        }

        if (shouldDelete){
            event.preventDefault()
            numberContainer.value = value.substring(0,value.length-2)
        }
    }

    return (
        <>
            <div className='form-input-containers'>
                <InputBuilder title='Имя' name='name' inputParams={{
                    type:'text',
                    placeholder:'Введите Ваше имя',
                    pattern:'[А-я]+'
                }}/>

                <div className='tour-input-box'>
                    <h5 className='tour-input-box__title form-title'>
                        Направление
                    </h5>

                    <select className='tour-input-box__city-select' style={{backgroundImage: `url(${Dropdown})`}} required>
                        <option value='' defaultValue>Куда хотите ехать</option>
                        <option value='Paris'>Париж</option>
                        <option value='London'>Лондон</option>
                        <option value='HongKong'>Гонконг</option>
                    </select>
                </div>

                <InputBuilder title='Email' name='email' inputParams={{
                    type:'email',
                    placeholder:'example@mail.com',
                    pattern:'\\w+@+\\w+\\.+\\w+'
                }}/>

                <InputBuilder title='Телефон' name='telephone' inputParams={{
                    type:'tel',
                    maxLength: 16,
                    onKeyDown: numberRefactoring,
                    placeholder:'+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _',
                    pattern:'[7|+7|8]{1,2}[(|-]?[0-9]{3}[)|-]?[0-9]{3}[-]?[0-9]{2}[-]?[0-9]{2}'
                }}/>

                <InputBuilder title='Дата от' name='date-from' inputParams={{
                    type: 'text',
                    maxLength: 10,
                    placeholder:'ДД.ММ.ГГГГ',
                    onKeyDown: dateRefactoring,
                    pattern:'[0-3][0-9][\.|,][0-1][0-9][\.|,][1-2][0-9]{3}'
                }}/>

                <InputBuilder title='Дата до' name='date-before' inputParams={{
                    type: 'text',
                    maxLength: 10,
                    placeholder: 'ДД.ММ.ГГГГ',
                    onKeyDown: dateRefactoring,
                    pattern: '[0-3][0-9][\\.|,][0-1][0-9][\\.|,][1-2][0-9]{3}'
                }}/>
            </div>

            <div className="building-comment-input">
                <h5 className="building-comment-input__title form-title">
                    Комментарий
                </h5>

                <textarea rows="8" cols="135" className="building-comment-input__comment"/>
            </div>
        </>
    );
}

function InputBuilder({title, name, inputParams}) {
    return (
        <div className='tour-input-box'>
            <h5 className='tour-input-box__title form-title'>
                {title}
            </h5>

            <input className={'tour-input-box__input' + ' tour-input-box__input__' + name} {...inputParams}/>
        </div>
    )
}

export default InputBuilding;