import Cabecera from "components/Cabecera/Cabecera"
import FavoritosProvider from "context/ContextFavoritos"
import Container from "components/Container/Container"
import Pie from "components/Pie/Pie"
import { Outlet } from "react-router-dom"

const PaginaBase = () => {
    return (
        <main>
            <Cabecera />
            <FavoritosProvider>
                <Container>
                    {/* Outlet va a generar una ruta padre, la cual se va a encargar
                        de manejar todas las demás rutas.
                     */}
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Pie />
        </main>
    )
}

export default PaginaBase