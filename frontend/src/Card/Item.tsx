import { Link } from 'react-router-dom';
import styles from './card.module.css';

import { api } from '../Services/api';
import { useEffect, useState } from 'react';

type Restaurant = {
    id: string,
    image: string,
    name: string,
    opening_hours: string,
    payment_method: string,
    price: string
}

export default function Item() {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

    useEffect(() => {
        api.get<Restaurant[]>('restaurants').then(({ data }) => {
            setRestaurants(data)
        })

    }, []);

    return (
        <>
            {restaurants.map(restaurant => {
                let img = `http://localhost:8888/images/`

                return (
                    <div className={styles.overlay} key={restaurant.id}>
                        <div className={styles.itemImage}>
                            <Link to="/details">
                                <img src={`${img}${restaurant.image}`} alt="" />
                                <span>{restaurant.name}</span>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </>
    )
}