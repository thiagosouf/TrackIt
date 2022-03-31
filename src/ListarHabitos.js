import styled from "styled-components";
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
    }, [])

    console.log(temHabito)
    return temHabito !== null ? (
        <>
            {temHabito.map(habito => 
            <ComHabito>
                <p>{habito.name}</p>
                <Semana>
                    {dias.map(dia => { return (<DiaSemana letra={dia.D} valor={dia.valor}></DiaSemana>) })}
                </Semana>
            </ComHabito>)}
        </>
    ) : (
        <><SemHabito>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</SemHabito></>

    )
}


function DiaSemana(props) {
    const [selecionado, setSelecionado] = useState(false);

    return props.valor === false ? (
        <>
            <BotaoOff type="button" value="" onClick={() => {
                console.log(props.valor)
                props.dias.push(props.valor)
                setSelecionado(true)
                console.log(props.dias)
            }}>{props.letra}</BotaoOff>
        </>
    ) : (<>
        <BotaoOn type="button" value={props.valor} onClick={() => {
            console.log(props.valor)
            props.dias.splice(props.dias.indexOf(props.valor), 1)
            setSelecionado(false)
            console.log(props.dias)
        }}>{props.letra}</BotaoOn>
    </>)
}

const SemHabito = styled.span`
color: #666666;
font-size: 18px;
`
const ComHabito = styled.div`
height: 91px;
width: 340px;
background-color: #ffffff;
color: #666666;
font-size: 20px;
`

const Semana = styled.div`
display: flex;
margin-left: 20px;
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
