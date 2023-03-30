import React from "react";
import {Link, useNavigate} from "react-router-dom";
import CardArrow from "../../../../images/svg/CardsArrow.svg";
import style from './CardTemplate.module.sass';

function CardTemplate({info, cardStyles}) {
    const navigator = useNavigate()

    return(
        <div className={`${cardStyles.card} ${style.card}`}>
            <div className={`${cardStyles.info} ${style.info}`}>
                <h1 className={`${cardStyles.title} ${style.title}`}>
                    {info.title}
                </h1>

                <p className={`${cardStyles.description} ${style.description}`}>
                    {info?.price ? `от ${info.price.toLocaleString()} руб` : info.description}
                </p>
            </div>

            <img className={`${cardStyles.image} ${style.backgroundImage}`}
                 src={info.image} loading='lazy' alt={info.name}/>

            <div className={style.blackout}/>

            <div className={cardStyles.links}>
                <button className={`${cardStyles.moreButton} ${style.moreButton}`}
                        onClick={() => navigator(`/tours`)}>
                    Подробнее <img src={CardArrow} alt='' loading='lazy'/>
                </button>

                {info?.socialMedia &&
                    <div className={style.socialMedia}>
                        {info.socialMedia.map(media =>
                            <Link target='_blank' to={media.link} key={media.name} className={style.socialMediaLink}>
                                {media.name}
                            </Link>)}
                    </div>
                }
            </div>

        </div>
    )
}

export default CardTemplate