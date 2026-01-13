import styles from './pages.module.css'

function Home () {
    return(
        <div>
            <h1 className={styles.textoAlt}>HOME</h1>
            <p className={styles.texto}>Conteúdo da home</p>
        </div>
    )
}

export default Home