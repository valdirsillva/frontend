import style from '../header/header.module.css'

export default function Header() {
    return (
        <div className={style.content}>
            <header className={style.adminHeader}>
                <nav className={style.navbarNav}>
                    <ul className={style.navbar}>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">RESTAURANTES</a></li>
                        <li><a href="#">RESERVAS</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}