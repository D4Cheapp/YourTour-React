import React from 'react';
import DropDownArrow from '../../../images/svg/DropDownArrow.svg'

function InputBuilding() {
    return (
        <div className='tour-input'>
            <InputBuilder title='Имя' name='name' inputParams={{
                type:'text',
                placeholder:'Введите ваше имя',
                pattern:'[А-я]+'
            }}/>

            <div className='tour-input-box'>
                <h3 className='tour-input-box__title'>
                    Направление
                </h3>

                <img className='tour-input-box__select-arrow' src={DropDownArrow} alt=''/>

                <select className='tour-input-box__city-select' required>
                    <option value='' selected>Куда хотите ехать?</option>
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
                placeholder:'+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _',
                pattern:'[7|+7|8]{1,2}[(|-]?[0-9]{3}[)|-]?[0-9]{3}[-]?[0-9]{2}[-]?[0-9]{2}'
            }}/>

            <InputBuilder title='Дата от' name='date-from' inputParams={{
                type: 'date',
                placeholder:'ДД.ММ.ГГГГ',
                pattern:'[0-3][0-9][\.|,][0-1][0-9][\.|,][1-2][0-9]{3}'
            }}/>

            <InputBuilder title='Дата до' name='date-before' inputParams={{
                type: 'date',
                placeholder: 'ДД.ММ.ГГГГ',
                pattern: '[0-3][0-9][\\.|,][0-1][0-9][\\.|,][1-2][0-9]{3}'
            }}/>
        </div>
    );
}

function InputBuilder({title, name, inputParams}) {
    return (
        <div className='tour-input-box'>
            <h3 className='tour-input-box__title'>
                {title}
            </h3>

            <input className={'tour-input-box__input' + ' tour-input-box__input__' + name} {...inputParams}/>
        </div>
    )
}

export default InputBuilding;