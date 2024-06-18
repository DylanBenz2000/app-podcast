import Banner from "components/Banner/Banner"
import Card from "components/Card/Card"
import Titulo from "components/Titulo/Titulo"
import videos from "data/db.json"
import styles from "./index.module.css"


const Inicio = () =>{
    return(
        <>
        {/* Me llevo el componente Cabecera, y el Banner, y los pondre dentro del BrowserRouter
            Ya que al estar dentro del browserRouter las demás rutas, compartirán el mismo Header y Footer.
         */}
        
        <Banner img="home" color="#154580"/>
        <Titulo><h1>Un lugar para guardar tus capitulos favoritos</h1></Titulo>
        

        <section className={styles.container}>
            {
                videos.map( (video) => {
                    return <Card key={video.id} {...video} />
                })
            }
        </section>
    
        </>
    )
}

export default Inicio