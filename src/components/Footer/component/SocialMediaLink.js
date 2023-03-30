import React from "react";
import styles from './SocialMediaLink.modules.sass'

function SocialMediaLink({image, name, link}) {
    return (
        <div className={`${styles.socialMediaContainer} ${styles.socialMediaContainer + name}`}>
            <div className={styles.iconBox}>
                <img src={image} alt={name}/>
            </div>

            <a target='_blank' href={link} className={styles.link}>
                {name}
            </a>
        </div>
    )
}
export default SocialMediaLink