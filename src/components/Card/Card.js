import styles from './Card.module.css'
import iconFavorito from './iconFavorito.png'

const Card = ({ id, capa, titulo }) =>{
    return(
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.card} />
            <h2>{titulo}</h2>
            <img src={iconFavorito} alt='Icono Favorito' className={styles.iconoFav}/>
        </div>
    )
}

export default Card