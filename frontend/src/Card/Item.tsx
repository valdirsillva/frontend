import { Link } from 'react-router-dom';

import styles from './card.module.css';
import images from '../images/restaurant1.png';

export default function Item() {
    return (
        <>
            <div className={styles.overlay}>
                <div className={styles.itemImage}>
                    <Link to="/details">
                        <img src={images} alt="" />
                        <span>Flor de juá</span>
                    </Link>
                </div>
            </div>

            <div className={styles.overlay}>
                <div className={styles.itemImage}>
                    <Link to="/details">
                        <img src={images} alt="" />
                        <span>Flor de Manjericão</span>
                    </Link>
                </div>
            </div>



        </>
    )
}