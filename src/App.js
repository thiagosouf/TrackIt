import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login"
import Cadastro from "./Cadastro"
import Habitos from "./Habitos"
import Hoje from "./Hoje"
import Historico from "./Historico"
import { useState } from "react";

export default function App() {
    const [codigo, setCodigo] = useState('');
    
    return (
        <>
            <BrowserRouter>
                {/* <Logo /> */}
                <Routes>
                    <Route path="/" element={<Login setCodigo={setCodigo}/>} />
                    <Route path="/cadastro" element={<Cadastro/>} />
                    <Route path="/habitos" element={<Habitos />} />
                    <Route path="/hoje" element={<Hoje codigo={codigo}/>} />
                    <Route path="/historico" element={<Historico codigo={codigo} />} />
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