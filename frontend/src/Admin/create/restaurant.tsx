import { ChangeEvent, FormEvent, useState } from 'react'
import Header from '../header/header'
import style from '../create/restaurant.module.css'

import { api } from '../../Services/api'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

export default function Restaurant() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState<File | string>('')
    const [description, setDesctiption] = useState('')
    const [opening_hours, setOpennigHours] = useState('')
    const [payment_method, setPaymentMethod] = useState('')

    // Quando uma imagem for selecionada
    function onChangeSelectedImage(event: ChangeEvent<HTMLInputElement>) {
        if (!event.target.files) return;

        const restaurantImage = event.target.files[0]

        setImage(restaurantImage)
    }

    async function handleCreateRestaurant(event: FormEvent) {
        event.preventDefault()

        let data = new FormData()

        data.append('image', image)
        data.append('name', String(name))
        data.append('price', String(price))
        data.append('description', String(description))
        data.append('opening_hours', String(opening_hours))
        data.append('payment_method', String(payment_method))

        await api.post('restaurant', data)
            .then(response => {
                // Limpa campos do formulário
                reset()

                console.log("Restaurante cadastrado ", response.status)
            })
            .catch(error => console.log(error))
    }

    function reset() {
        setName('')
        setImage('')
        setDesctiption('')
        setOpennigHours('')
        setPaymentMethod('')
        setPrice('')
    }

    function handleClickButton() {
        toast.success('Restaurante cadastrado com sucesso !')
    }

    return (
        <>
            <Header />

            <ToastContainer />

            <div className={style.container}>
                <div className={style.contentHeader}>
                    <h1>Novo Restaurante</h1>

                </div>
                <form className={style.form} method="post" onSubmit={(e) => handleCreateRestaurant(e)} encType="multipart/form-data">
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
                        <label>Faixa de Preço </label>
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
                            onChange={onChangeSelectedImage}
                        />
                    </div>

                    <div className={style.groupInput}>
                        <button
                            type="submit"
                            name="salvar"
                            onClick={handleClickButton}
                            className={style.buttonAdd}
                        >Salvar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}