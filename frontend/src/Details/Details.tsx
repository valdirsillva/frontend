import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { api } from '../Services/api';
import styles from './details.module.css'

export function Details() {

    const Restaurant = {
        id: '',
        image: '',
        name: '',
        opening_hours: '',
        payment_method: '',
        price: '',
        description: '',
    }

    const [restaurant, setRestaurants] = useState(Restaurant);

    const [searchParams] = useSearchParams()
    const uuid = searchParams.get('uuid')

    useEffect(() => {
        getRestaurant()
    }, [])

    async function getRestaurant() {
        await api.get(`restaurant/${uuid}`).then(response => {
            setRestaurants(response.data)
        })
    }

    return (

        <div className={styles.container}>
            <div className={styles.contentInfo}>
                <div className={styles.info}>
                    <h3>{restaurant.name}</h3>
                    <main>
                        <Link to="/" className={styles.link}>
                            Voltar
                        </Link>
                    </main>
                </div>
            </div>

            <div className={styles.description}>
                <h1>Descrição</h1>
                <div>{restaurant.description}</div>

                <div className={`${styles.price} `}>
                    <h2>Faixa de preço</h2>
                    <span>{restaurant.price}</span>
                </div>

                <div className={styles.priceBorder}></div>

                <div className={styles.price}>
                    <h2>Horário de Funcionário</h2>
                    <span>{restaurant.opening_hours}</span>
                </div>

                <div className={styles.price}>
                    <h2>Formas de pagamento</h2>
                    <span>{restaurant.payment_method}</span>
                </div>
            </div>
        </div>

    );
}