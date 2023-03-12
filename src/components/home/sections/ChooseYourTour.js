import React, {useState} from 'react';
import CardCreating from "../CardCreating";
import PopularExcursionsData from "../../../data/PopularExcursionsData";

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
                {PopularExcursionsData.map((info, index) =>
                        <CardCreating info={info} key={index} cardName={'tour'}/>)}
            </div>
        </section>
    )
}

export default ChooseYourTour;