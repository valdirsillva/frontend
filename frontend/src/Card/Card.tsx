import styles from './card.module.css';
import Item from './Item';

export function Card() {
    return (


        <div className={styles.panel}>
            <div className={styles.panelTitle}>
                <h3>Restaurantes</h3>
            </div>

            <div className={styles.panelContent}>
                <Item />
            </div>
        </div>

    )
}