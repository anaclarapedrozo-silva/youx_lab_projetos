import styles from'./Titulo.module.css'

function Titulo ({titulo, subtitulo}) {
    return(
        <div className={styles.titulo_div}>
            <h1 className={styles.titulo}>{titulo}</h1>
            <p className={styles.subtitulo}>{subtitulo}</p>
        </div>
    )
}

export default Titulo