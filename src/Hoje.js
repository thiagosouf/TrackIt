import Topo from "./Topo"
import styled from 'styled-components';
import { useState ,useEffect } from 'react';
import Footer from "./Footer";
import axios from 'axios';
import ListarHoje from "./ListarHoje";

export default function Hoje(props) {
    console.log("entrou aqui")
    const {codigo} = props;
    console.log(codigo)
    const [habitosHoje, setHabitosHoje] = useState([]);


    const Authorization = {
        headers: {
            Authorization: `Bearer ${codigo.token}`
        }
    }
    

    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", Authorization);
        promise.then(response => {
            const { data } = response;
            console.log(data);
            setHabitosHoje(data);
        });
        promise.catch(err => alert("deu ruim :("));
    },[])
    console.log(habitosHoje)
    return (
        <Corpo>
            <Topo foto={codigo.image} />
            <Painel>
                <TopoPainel>
                    <p>Segunda, 17/05</p>
                    <span>Nenhum hábito concluido ainda</span>
                </TopoPainel>
                <ListarHoje token={codigo.token} conteudo={habitosHoje} />
            </Painel>
            <Footer></Footer>

        </Corpo>)
    }

    const Painel = styled.div`
    padding: 0 17px;
`

const Corpo = styled.div`
    background-color: #e5e5e5;
    font-family: 'Lexend Deca', sans-serif;
    height: 100%;
    padding-bottom: 70px;
`
const TopoPainel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 23px;
    color: #126BA5;
    `