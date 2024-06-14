import Cabecera from "components/Cabecera/Cabecera"
import Pie from "components/Pie/Pie"
import Banner from "components/Banner/Banner"
import Titulo from "components/Titulo/Titulo"


const Inicio = () =>{
    return(
        <>
        <Cabecera />
        <Banner img="home" color="#154580"/>
        <Titulo><h1>Un lugar para guardar tus capitulos favoritos</h1></Titulo>

        <Pie/>

        </>
    )
}

export default Inicio