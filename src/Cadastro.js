import styled from "styled-components"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "./Logo"


export default function Cadastro() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");
    const navigate = useNavigate();

    function FazerCadastro(event) {
        event.preventDefault();

        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
            email: email,
            name: nome,
            image: foto,
            password: password
        });

        requisicao.then(response => {
            alert("Seu cadastro foi realizado com sucesso!");
            navigate("/");
        });
        requisicao.catch(err => alert("deu ruim :("));
    }

    return (
        <TelaDeLogin>
            <Logo />
            <Formulario onSubmit={FazerCadastro}>

                <input type="email" id="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} required></input>
                <input type="password" id="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} required></input>
                <input type="text" id="nome" placeholder="nome" value={nome} onChange={e => setNome(e.target.value)} required></input>
                <input type="text" id="foto" alt="foto" placeholder="foto" value={foto} onChange={e => setFoto(e.target.value)} required></input>

                <BotaoGrande type="submit">Cadastrar</BotaoGrande>
            </Formulario>
            <Link to="/"><p>Já tem uma conta? Faça login!</p></Link>
        </TelaDeLogin>
    )
}

const Formulario = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 33px;

input{
    width: 303px;
    height: 45px;
    margin-bottom: 6px;
    border-radius: 10px;
    font-size: 20px;
    color: black;
    border: 1px solid #b0b0b0;
}
input::placeholder{
    color: #dbdbdb;
}
`

const BotaoGrande = styled.button`
width: 303px;
height: 45px;
background-color: #52b6ff;
color: #ffffff;
border-radius: 10px;
margin-bottom: 25px;
font-size: 20px;
border: none
`
const TelaDeLogin = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-size: 20px;
a{
    font-size: 20px;
    color: #52b6ff;
    
}
`
