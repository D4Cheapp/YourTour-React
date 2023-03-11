import React from 'react';
import SectionTitle from "./SectionTitle";
import {TourGallery} from "../../data/TourGallery";

function TourPhotos() {
    return (
        <section className='tour-photos'>
            <SectionTitle title='Фотографии путешествий' />

            <div className="photos-section">
                <PhotosRowCreate rowInfo={{
                    row: 'first-row',
                    pictures: TourGallery.slice(0,4)
                }}/>

                <PhotosRowCreate rowInfo={{
                    row: 'second-row',
                    pictures: TourGallery.slice(4,9)
                }}/>

                <PhotosRowCreate rowInfo={{
                    row: 'third-row',
                    pictures: TourGallery.slice(9,13)
                }}/>
            </div>
        </section>
    );
}

function PhotosRowCreate({rowInfo}) {
    return(
        <div className={`${rowInfo.row}-photos`}>
            {rowInfo.pictures.map(picture =>
                <img src={picture.src} alt={picture.name}
                     className={`${rowInfo.row}-photos__image 
                        ${rowInfo.row}-photos__image__${picture.name}`} key={picture.name}/>)}
        </div>
    )
}

export default TourPhotos;