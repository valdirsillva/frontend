import styles from './card.module.css';

import images from '../images/restaurant1.png'


export function Card() {
    return (
        <div className={styles.panel}>
            <div className={styles.panelTitle}>
                <h3>Restaurantes</h3>
            </div>

            <div className={styles.panelContent}>
                <div className={styles.overlay}>
                    <div className={styles.itemImage}>
                        <a href="">
                            <img src={images} alt="" />
                            <span>Flor de juá</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}