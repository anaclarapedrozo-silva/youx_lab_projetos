import styles from './Frase.module.css'
import { useState } from 'react'

function SeuNome({setNome}) {
    return(
        <div>
            <p className={styles.fraseContent}>Digite o seu nome: </p>
            <input type='text' placeholder='Digite o seu nome' className={styles.inputName} onChange={(e) => setNome(e.target.value)}/>
        </div>
    )
}

export default SeuNome