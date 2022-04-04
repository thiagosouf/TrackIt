import styled from "styled-components"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "./Logo"
import ReactLoading from 'react-loading';


export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    function FazerLogin(event) {
        event.preventDefault();
    
        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
            email: email,
            password: password
        });
        setLoading(true);
    
        requisicao.then(response => {
            props.setCodigo(response.data);
            
            navigate("/hoje", { state: {foto: response.data.image , token: response.data.token} });
            // , state:{nome: nome, email: email, foto: foto});
            // { state: { nome: nome, dia: dia.date, hora: assentos.name, assento: lugaresReservados, nome: nome, cpf: cpf } });
        });
        requisicao.catch(err => {alert("Usuario ou senha incorretos");setLoading(false);});
        
    }
    

    return (
        <TelaDeLogin>
            <Logo />
            <Formulario onSubmit={FazerLogin}>

                <input type="email" id="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} required></input>
                <input type="password" id="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} required></input>
                {loading? <BotaoGrande><ReactLoading type="bubbles" color="#fff" /></BotaoGrande> : <BotaoGrande type="submit">Login</BotaoGrande>}
            </Formulario>
            <Link to="/cadastro"><p>Não tem uma conta? Cadastre-se!</p></Link>
        </TelaDeLogin>
    )
}

const Formulario = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 33px;
font-size: 20px;

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
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
border: none
`
const TelaDeLogin = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
a{
    font-size: 18px;
    color: #52b6ff;

}
`
