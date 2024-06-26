import Banner from "components/Banner/Banner"
import Card from "components/Card/Card"
import Titulo from "components/Titulo/Titulo"
// import videos from "data/db.json"
import styles from "./index.module.css"
import { useEffect, useState } from "react"



const Inicio = () =>{

    const [videos, setVideos] = useState([])

    useEffect( () => {
        fetch("https://my-json-server.typicode.com/DylanBenz2000/app-podcast-api/videos")
        .then(response => response.json())
        .then(data => {
            setVideos(data)
        })
    }, [])

    return(
        <>
        {/* Me llevo el componente Cabecera, y el Banner, y los pondre dentro del BrowserRouter
            Ya que al estar dentro del browserRouter las demás rutas, compartirán el mismo Header y Footer.
         */}
        
        <Banner img="relatos" color="#154580"/>
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