import styled from "styled-components";
import {IoTrashOutline} from "react-icons/io5"
import { useState, useEffect } from "react"
import axios from "axios";
const dias = [{ D: "D", valor: 0 }, { D: "S", valor: 1 }, { D: "T", valor: 2 }, { D: "Q", valor: 3 }, { D: "Q", valor: 4 }, { D: "S", valor: 5 }, { D: "S", valor: 6 }];




export default function ListarHabitos(props) {
    const [temHabito, setTemHabito] = useState([]);

    const Authorization = {
        headers: {
            Authorization: `Bearer ${props.token}`
        }
    }

    // ele passa um array days dentro do response / cada habito tem um array days
    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", Authorization);
        promise.then(response => {
            const { data } = response;
            console.log(data);
            setTemHabito(data);
        });
        promise.catch(err => alert("deu ruim :("));
    },[])

    console.log(temHabito)
    return temHabito != null ? (
        <>
            {temHabito.map(habito =>
                <ComHabito>
                    <Nome>{habito.name}<IoTrashOutline onClick={()=>{<ExcluirHabito id={habito.id} token={props.token}/>}}/></Nome>
                    <Semana>
                        {dias.map(dia => { return (<DiaSemana letra={dia.D} valor={dia.valor} diasRecebidos={habito.days}></DiaSemana>) })}
                    </Semana>
                </ComHabito>)}
        </>
    ) : (
        <><SemHabito>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</SemHabito></>

    )
}


function DiaSemana(props) {
    let verificador = props.diasRecebidos.find(dia => dia === props.valor)

    return verificador != undefined ? (
        <>
            <BotaoOn type="button" value={props.valor}>{props.letra}</BotaoOn>
        </>
    ) : (
        <>
            <BotaoOff type="button" value={props.valor}>{props.letra}</BotaoOff>
        </>
    )
}

function ExcluirHabito(props){
    console.log("entrou aqui")
    const Authorization = {
        headers: {
            Authorization: `Bearer ${props.token}`
        }
    }
    const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}`, Authorization);
    promise.then(response => {
        console.log(response.data);
    });
    promise.catch(err => alert("deu ruim :("));
}

const SemHabito = styled.span`
color: #666666;
font-size: 18px;
`
const ComHabito = styled.div`
height: 95px;
width: 95%;
background-color: #ffffff;
color: #666666;
font-size: 20px;
margin-bottom: 20px;
padding-left: 5%;
display: flex;
flex-direction: column;
justify-content: space-evenly;

`
const Nome = styled.span`
display: flex;
justify-content: space-between;
margin: 0;
margin-right: 2%;
`
const Semana = styled.div`
display: flex;
`
const BotaoOff = styled.button`
    background-color: #ffffff;
    height: 30px;
    width: 30px;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    color: #d4d4d4;
    font-size: 20px;
    margin-right: 4px;
`

const BotaoOn = styled.button`
    background-color: #cfcfcf;
    height: 30px;
    width: 30px;
    border-radius: 5px;
    border: 1px solid #cfcfcf;
    color: #ffffff;
    font-size: 20px;
    margin-right: 4px;
`