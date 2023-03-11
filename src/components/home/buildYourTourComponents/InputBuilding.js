import React from 'react';
import Dropdown from '../../../images/svg/Dropdown.svg'

function InputBuilding() {
    return (
        <>
            <div className='form-input-containers'>
                <InputBuilder title='Имя' name='name' inputParams={{
                    type:'text',
                    placeholder:'Введите Ваше имя',
                    pattern:'[А-я]+'
                }}/>

                <div className='tour-input-box'>
                    <h3 className='tour-input-box__title form-title'>
                        Направление
                    </h3>

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
                    placeholder:'+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _',
                    pattern:'[7|+7|8]{1,2}[(|-]?[0-9]{3}[)|-]?[0-9]{3}[-]?[0-9]{2}[-]?[0-9]{2}'
                }}/>

                <InputBuilder title='Дата от' name='date-from' inputParams={{
                    type: 'text',
                    placeholder:'ДД.ММ.ГГГГ',
                    pattern:'[0-3][0-9][\.|,][0-1][0-9][\.|,][1-2][0-9]{3}'
                }}/>

                <InputBuilder title='Дата до' name='date-before' inputParams={{
                    type: 'text',
                    placeholder: 'ДД.ММ.ГГГГ',
                    pattern: '[0-3][0-9][\\.|,][0-1][0-9][\\.|,][1-2][0-9]{3}'
                }}/>
            </div>

            <div className="building-comment-input">
                <h3 className="building-comment-input__title form-title">
                    Комментарий
                </h3>

                <textarea rows="8" cols="135" className="building-comment-input__comment"/>
            </div>
        </>
    );
}

function InputBuilder({title, name, inputParams}) {
    return (
        <div className='tour-input-box'>
            <h3 className='tour-input-box__title form-title'>
                {title}
            </h3>

            <input className={'tour-input-box__input' + ' tour-input-box__input__' + name} {...inputParams}/>
        </div>
    )
}

export default InputBuilding;