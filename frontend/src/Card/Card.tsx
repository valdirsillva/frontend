import styles from './card.module.css';
import Item from './Item';
import { api } from '../Services/api';
import { useEffect, useState } from 'react';


export function Card() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {

        async function getRestaurants() {
            const response = await api.get('restaurants')

            console.log(response);
        }

    }, []);

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