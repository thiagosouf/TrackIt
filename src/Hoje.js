import Topo from "./Topo"
import styled from 'styled-components';
import { useState ,useEffect } from 'react';
import Footer from "./Footer";
import axios from 'axios';
import ListarHoje from "./ListarHoje";
import dayjs from "dayjs";




export default function Hoje(props) {
    console.log("entrou aqui")
    const {codigo} = props;
    console.log(codigo)
    const [habitosHoje, setHabitosHoje] = useState([]);
    const diaDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const [porcentagem, setPorcentagem] = useState(0);
    const progresso = ("Nenhum hábito concluido ainda");
    function Verdade(valor){
        return valor.done===true
    }
    let total = 0
    habitosHoje.length>0? 
    total = habitosHoje.filter(Verdade).length/habitosHoje.length
    :
    total = 0;
    console.log("total")
    console.log(total)

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
    },[porcentagem])
    console.log("habitos hoje")
    console.log(habitosHoje)
    console.log("dayjs")
    console.log(dayjs().day())
    console.log("porcentagem")
    console.log(porcentagem)


    return (
        <Corpo>
            <Topo foto={codigo.image} />
            <Painel>
                <TopoPainel>
                    {diaDaSemana[dayjs().day()]}, {dayjs().format("DD/MM")}
                    {total === 0 ? (
                        <span>{progresso}</span>
                        ):(
                            <span style={{color: `#8FC549`}}>{parseInt(total*100)}% concluído</span>
                        )
                    }
                </TopoPainel>
                <ListarHoje token={codigo.token} total={total} setPorcentagem={setPorcentagem} conteudo={habitosHoje} />
            </Painel>
            <Footer foto= {codigo.image} token={codigo.token} total={total}></Footer>

        </Corpo>)
    }

    const Painel = styled.div`
    padding: 0 17px;
`

const Corpo = styled.div`
    background-color: #e5e5e5;
    font-family: 'Lexend Deca', sans-serif;
    min-height: 80vh;
    padding: 70px 0;
`
const TopoPainel = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 23px;
    color: #126BA5;
    margin: 28px 0px;
    span{
        font-size: 18px;
        color: #bababa;
    }
    `