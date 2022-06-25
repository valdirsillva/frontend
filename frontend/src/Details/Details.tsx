import styles from './details.module.css'

export function Details() {
    return (
        <div className={styles.container}>
            <div className={styles.contentInfo}>
                <div className={styles.info}>
                    <h3></h3>
                    <span></span>
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

    );
}