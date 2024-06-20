import Favoritos from "pages/Favoritos"
import NotFound from "pages/NotFound"
import PaginaBase from "pages/PaginaBase"
import Player from "pages/Player"

const { default: Inicio } = require("pages/inicio")
const { BrowserRouter, Routes, Route } = require("react-router-dom")

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>   
                 {/*Rutas Anidadas en una sola ruta que es la paginabase  */}
                <Route path="/" element={<PaginaBase/>} >
                    {/* Aca con el index, estamos diciendo que esta ruta va a ser el inicio */}
                    <Route index element={<Inicio />} />
                    <Route path="favoritos" element={<Favoritos />} />
                    <Route path=":id" element={<Player />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>        
        </BrowserRouter>
    )
}

export default AppRoutes