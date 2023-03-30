import React, {useState} from 'react';
import CardTemplate from "../CardTemplate/CardTemplate";
import PopularExcursionsData from "../../../../data/PopularExcursionsData";
import cardStyle from './ChooseYourTourCards.module.sass'
import style from './ChooseYourTour.module.sass';

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
        const baseClass = style.button
        return activeCategory === category ? `${baseClass} ${style.activeCategory}`: baseClass
    }

    return (
        <section className={style.chooseYourTour}>
            <div className={style.chooseSection}>
                <h1 className={style.title}>
                    Выбери свой тур
                </h1>

                <div className={style.select}>
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

            <div className={style.cardSection}>
                {PopularExcursionsData.map((info, index) =>
                        <CardTemplate info={info} key={index} cardStyles={cardStyle}/>)}
            </div>
        </section>
    )
}

export default ChooseYourTour;