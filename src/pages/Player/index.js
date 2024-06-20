import Banner from 'components/Banner/Banner'
import styles from './index.module.css'
import Titulo from 'components/Titulo/Titulo'
import { useParams } from 'react-router-dom'
// import videos from "data/db.json"
import NotFound from 'pages/NotFound'
import { useEffect, useState } from 'react'


const Player = () => {

    const [video, setVideo] = useState([])


    const parametros = useParams()

    useEffect( () => {
        fetch(`https://my-json-server.typicode.com/DylanBenz2000/app-podcast-api/videos?id=${parametros.id}`)
        .then(response => response.json())
        .then(data => {
            setVideo(...data)
        })
    },[])

    // const video = videos.find( (video) => {
    //     return video.id === Number(parametros.id)
    // })

    console.log(video)

    // Si no hay video entonces retorna el componente notFound
    // Y si hay retornara entonces todo lo del return de abajo del banner, titulo, etc

    if(!video){
        return <NotFound />
    }

    return(

        <>
            <Banner img="play" color="#58b9ae"/>
            <Titulo><h1>Player</h1></Titulo>

            <section className={styles.container}>
            <iframe 
                width="100%" 
                height="100%" 
                src={video.link} 
                title={video.titulo} 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
            </section>

        </>

    )   
}

export default Player