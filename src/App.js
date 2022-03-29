import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Entrar from "./Entrar";
// import Home from "./Home";
// import Logo from "./Logo"
import Login from "./Login"
import Cadastro from "./Cadastro"
import Habitos from "./Habitos"

export default function App() {
    return (
        <>
            <BrowserRouter>
                {/* <Logo /> */}
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/habitos" element={<Habitos />} />
                </Routes>
            </BrowserRouter>

            {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Entrar />} />
                    <Route path="/Home" element={<Home />} />
                </Routes>
            </BrowserRouter> */}
        </>

    )
}