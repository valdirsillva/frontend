import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { api } from '../Services/api';
import styles from './details.module.css'

type Restaurant = {
    id: string,
    image: string,
    name: string,
    opening_hours: string,
    payment_method: string,
    price: string
}

export function Details() {

    const [restaurant, setRestaurants] = useState<Restaurant[]>([])
    const [searchParams] = useSearchParams()
    const uuid = searchParams.get('uuid')

    useEffect(() => {
        api.get(`restaurant/${uuid}`)
            .then(({ data }) => {

                setRestaurants(data)

            }).catch(err => {
                console.log(`Erro ao listar restaurantes. ${err.message}`)
            })

    }, [])

    console.log(restaurant);


    return (
        <>

            {restaurant.map(item => {
                <div className={styles.container}>
                    <div className={styles.contentInfo}>
                        <div className={styles.info}>
                            <h3></h3>
                            <main>
                                <Link to="/" className={styles.link}>
                                    Voltar
                                </Link>
                            </main>
                        </div>
                    </div>

                    <div className={styles.description}>
                        <h1>Descrição</h1>
                        <div>O Mamma Mia é um restaurante especializado em culinária italiana e vinhos</div>

                        <div className={`${styles.price} `}>
                            <h2>Faixa de preço</h2>
                            <span>De R$ 40 a R$ 70 por pessoa</span>
                        </div>

                        <div className={styles.priceBorder}></div>

                        <div className={styles.price}>
                            <h2>Horário de Funcionário</h2>
                            <span>De terça à domingo, das 17:00 às 23:00</span>
                        </div>

                        <div className={styles.price}>
                            <h2>Formas de pagamento</h2>
                            <span>Dinheiro, cartão de crédito e débito</span>
                        </div>
                    </div>
                </div>
            })}

        </>

    );
}