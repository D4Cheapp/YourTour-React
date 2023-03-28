import {Link, useNavigate} from "react-router-dom";
import CardArrow from "../../images/svg/CardsArrow.svg";
import React from "react";

function CardCreating({info, cardName}) {
    const navigator = useNavigate()

    return(
        <div className={`${cardName}-card base-card`}>
            <div className={`${cardName}-card-info base-card-info`}>
                <h1 className={`${cardName}-card-info__title base-card-info__title`}>
                    {info.title}
                </h1>

                <p className={`${cardName}-card-info__description base-card-info__description`}>
                    {info?.price ? `от ${info.price.toLocaleString()} руб` : info.description}
                </p>
            </div>

            <img className={`${cardName}-card__background-image base-card__background-image`}
                 src={info.image} loading='lazy' alt=""/>

            <div className="base-card__blackout"/>

            <div className={`${cardName}-card-links-container base-card-links-container`}>
                <button className={`${cardName}-card__more-button base-card__more-button`}
                        onClick={() => navigator(`/tours`)}>
                    Подробнее <img src={CardArrow} alt='' loading='lazy'/>
                </button>

                {info?.socialMedia &&
                    <div className={`base-card-social-media`}>
                        {info.socialMedia.map(media =>
                            <Link target='_blank' to={media.link} key={media.name} className={`base-card-social-media__link`}>
                                {media.name}
                            </Link>)}
                    </div>
                }
            </div>

        </div>
    )
}

export default CardCreating