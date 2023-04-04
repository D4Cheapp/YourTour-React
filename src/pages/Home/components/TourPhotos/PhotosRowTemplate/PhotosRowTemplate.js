import React from "react";
import style from './PhotosRowTemplate.module.sass'

function PhotosRowTemplate({rowInfo}) {
    return(
        <div className={`${style.photosRow} ${style[rowInfo.row]}`}>
            {rowInfo.pictures.map(picture =>
                <img src={picture.src} alt={picture.name} key={picture.name}
                     className={style.image} />)}
        </div>
    )
}

export default PhotosRowTemplate