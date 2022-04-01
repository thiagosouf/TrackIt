import styled from "styled-components"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "./Logo"

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function FazerLogin(event) {
        event.preventDefault();
    
        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
            email: email,
            password: password
        });
    
        requisicao.then(response => {
            console.log(response.data);
            console.log(response.data.name)
            console.log(response.data.image)
            console.log(response.data.token)
            props.setCodigo(response.data);
            alert("Seu Login foi realizado com sucesso!");
            
            navigate("/habitos", { state: {nome: response.data.name, foto: response.data.image , token: response.data.token} });
            // , state:{nome: nome, email: email, foto: foto});
            // { state: { nome: nome, dia: dia.date, hora: assentos.name, assento: lugaresReservados, nome: nome, cpf: cpf } });
        });
        requisicao.catch(err => alert("deu ruim :("));
    }
    

    return (
        <TelaDeLogin>
            <Logo />
            <Formulario onSubmit={FazerLogin}>

                <input type="email" id="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} required></input>
                <input type="password" id="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} required></input>
                <BotaoGrande type="submit">Entrar</BotaoGrande>
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

input{
    width: 303px;
    height: 45px;
    margin-bottom: 6px;
    border-radius: 10px;
    font-size: 20px;
    color: black;
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
