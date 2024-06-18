import styles from './Favoritos.module.css'
import Banner from 'components/Banner/Banner'
import Titulo from 'components/Titulo/Titulo'

const Favoritos = () =>{
    return(
        <>
            <Banner img={"favoritos"} color={"#154580"}/>
            <Titulo> <h1>Mis Favoritos</h1></Titulo>
        </>
    )
}

export default Favoritos