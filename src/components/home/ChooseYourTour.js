import React, {useState} from 'react';
import cardArrow from '../../images/svg/CardsArrow.svg';
import PopularExcursions from "../../data/PopularExcursions";
import '../../sass/home/chooseYourTour.sass';

function ChooseYourTour() {
    const [activeCategory, setActiveCategory] = useState('popular')

    const excursionsTypes = [
        {title : 'Популярные', category: 'popular'},
        {title : 'Авторские', category: 'authorial'},
        {title : 'Походы', category: 'trip'},
        {title : 'Сплавы', category: 'alloy'},
        {title : 'Велопрогулки', category: 'cycling'}
    ]

    function giveActiveButtonClass(category) {
        const baseClass = 'tour-select__button'
        return activeCategory === category ? baseClass + ' active-category' : baseClass
    }

    return (
        <section className="choose-your-tour">
            <div className="choose-section">
                <h1 className="choose-section__title">
                    Выбери свой тур
                </h1>

                <div className="tour-select">
                    {excursionsTypes.map(type => {
                        return (
                            <button className={giveActiveButtonClass(type.category)} key={type.category}
                                        onClick={() => setActiveCategory(type.category)}>
                                {type.title}
                            </button>
                        )
                    })}
                </div>
            </div>

            <div className="card-choosing-section">
                {PopularExcursions.map((info,index) => <CardCreating info={info} key={index}/>)}
            </div>
        </section>
    )
}

function CardCreating({info}) {
    return(
        <div className="tour-card">
            <div className="tour-card-info">
                <h1 className="tour-card-info__title">
                    {info.title}
                </h1>
                <p className="tour-card-info__price">
                    {`от ${info.price.toLocaleString()} руб`}
                </p>
            </div>

            <img className="tour-card__background-image" src={info.image} loading='lazy' alt=""/>
            <div className="tour-card__blackout"/>

            <button className="tour-card__more-button">
                Подробнее <img src={cardArrow} alt='' loading='lazy'/>
            </button>
        </div>
    )
}

export default ChooseYourTour;