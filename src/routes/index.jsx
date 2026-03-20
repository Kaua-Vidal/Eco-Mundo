import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Explore from "../pages/ExplorePage/Explore"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/explorar/:tipo' element={<Explore/>}/>
            </Routes>
        </BrowserRouter>
    )
}