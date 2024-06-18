import Cabecera from "components/Cabecera/Cabecera"
import Container from "components/Container/Container"
import Pie from "components/Pie/Pie"
import Favoritos from "pages/Favoritos"

const { default: Inicio } = require("pages/inicio")
const { BrowserRouter, Routes, Route } = require("react-router-dom")

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Cabecera />

            <Container>
                <Routes>    
                    <Route path="/" element={<Inicio />} />
                    <Route path="/favoritos" element={<Favoritos />} />
                </Routes>        
            </Container>


            <Pie/>
        </BrowserRouter>
    )
}

export default AppRoutes