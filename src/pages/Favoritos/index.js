import styles from './index.module.css'
import Banner from 'components/Banner/Banner'
import Card from 'components/Card/Card'
import Titulo from 'components/Titulo/Titulo'
import { useFavoritosContext } from 'context/ContextFavoritos'

const Favoritos = () =>{

    // hook personalizado useFavoritosContext
    const { favorito } = useFavoritosContext()

    return(
        <>
        <Banner img={"fav"} color={"#3B3B3B"}/>
        <div>
        <Titulo><h1>Mis Favoritos</h1></Titulo>

        </div>

        <section className={styles.container}>
          {
            favorito.map( (fav) => {
                return <Card {...fav} key={fav.id}/>
            })
          }
        </section>


      </>
    )
}

export default Favoritos