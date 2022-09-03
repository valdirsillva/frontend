import { FormEvent, useState } from 'react'
import Header from '../header/header'
import style from '../create/restaurant.module.css'
import { api } from '../../Services/api'

export default function Restaurant() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [description, setDesctiption] = useState('')
    const [opening_hours, setOpennigHours] = useState('')
    const [payment_method, setPaymentMethod] = useState('')

    function handleCreateRestaurant(e: FormEvent) {
        e.preventDefault()

        api.post('restaurant', {
            name, price, description, opening_hours, payment_method, image
        })
            .then(function (response) {
                console.log(response)
            }).catch(function (error) {
                console.log(error)
            })
    }


    return (
        <>
            <Header />

            <div className={style.container}>
                <div className={style.contentHeader}>
                    <h1>Novo Restaurante</h1>
                </div>
                <form className={style.form} onSubmit={(e) => handleCreateRestaurant(e)}>
                    <div className={style.groupInput}>
                        <label >Nome do restaurante</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Nome do restaurante"
                        />
                    </div>

                    <div className={style.groupInput}>
                        <label >Descrição</label>
                        <input
                            type="text"
                            name="description"
                            value={description}
                            onChange={e => setDesctiption(e.target.value)}
                            placeholder="Descrição"
                        />
                    </div>

                    <div className={style.groupInput}>
                        <label>Preço</label>
                        <input
                            type="text"
                            name="price"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                            placeholder="Faixa de preço por pessoa"
                        />
                    </div>

                    <div className={style.groupInput}>
                        <label>Horário de Funcionamento</label>
                        <input
                            type="text"
                            name="opening_hours"
                            value={opening_hours}
                            onChange={e => setOpennigHours(e.target.value)}
                            placeholder="Horário de funcionamento"
                        />
                    </div>

                    <div className={style.groupInput}>
                        <label>Forma de pagamentos</label>
                        <input
                            type="text"
                            name="payment_method"
                            value={payment_method}
                            onChange={e => setPaymentMethod(e.target.value)}
                            placeholder="Horário de funcionamento"
                        />
                    </div>

                    <div className={style.groupInput}>
                        <label>Imagem</label>
                        <input
                            type="file"
                            name="image"
                            value={image}
                            onChange={e => setImage(e.target.value)}
                        />
                    </div>

                    <div className={style.groupInput}>
                        <button type="submit" name="salvar" className={style.buttonAdd}>Salvar</button>
                    </div>
                </form>
            </div>
        </>
    )
}