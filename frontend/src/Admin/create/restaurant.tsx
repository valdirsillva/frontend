import Header from '../header/header'
import style from '../create/restaurant.module.css'

export default function Restaurant() {
    return (
        <>
            <Header />

            <div className={style.container}>
                <form className={style.form}>

                    <div className={style.groupInput}>
                        <label >Nome do restaurante</label>
                        <input type="text" name="name" placeholder="Nome do restaurante" />
                    </div>

                    <div className={style.groupInput}>
                        <label >Descrição</label>
                        <input type="text" name="description" placeholder="Descrição" />
                    </div>

                </form>
            </div>
        </>
    )
}