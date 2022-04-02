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
    const [progresso, setProgresso] = useState("Nenhum hábito concluido ainda");
    const diaDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const [porcentagem, setPorcentagem] = useState(0);
    
    function Verdade(valor){
        return valor.done===true
    }
    let total = habitosHoje.filter(Verdade).length/habitosHoje.length;
    console.log("total")
    console.log(total)
    // setPorcentagem(total/habitosHoje.length)


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
                    <span>{progresso}</span>
                </TopoPainel>
                <ListarHoje token={codigo.token} total={total} setPorcentagem={setPorcentagem} conteudo={habitosHoje} />
            </Painel>
            <Footer foto= {codigo.image} token={codigo.token}></Footer>

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
    flex-direction: column;
    font-size: 23px;
    color: #126BA5;
    margin: 28px 0px;
    span{
        font-size: 18px;
        color: #bababa;
    }
    `

//falta fazer o botao check
//falta atualizar o progresso
//falta atualizar listar HJ, sequencia atual e seu recorde (post)
//falta a tela do historico