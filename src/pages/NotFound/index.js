import styles from './index.module.css'

const NotFound = () => {
    return(
        <div  className={styles.container}>
            <h2 className={styles.error}>404</h2>
            <p className={styles.text_error}>Página no encontrada</p>
        </div>
    )
}
export default NotFound