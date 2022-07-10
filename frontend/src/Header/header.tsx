import { Fragment } from "react"
import { Card } from "../Card/Card"
import styles from "./header.module.css"

export function Header() {
    return (
        <Fragment>
            <div className={styles.flexContainer}>
                <header className={styles.flexHeaderTop}>

                </header>
                <div className={styles.textLeft}>
                    <h3>Descubra novos sabores</h3>
                    <span>Aqui eu converso com você sobre nossa proposta</span>
                </div>

                <div className={styles.inputSearch}>
                    <div className={styles.content}>
                        <span className="material-icons">search</span>
                        <input type="search" name="" placeholder="" />
                    </div>
                </div>
            </div>

            <Card />
        </Fragment>

    )
}