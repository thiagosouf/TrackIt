import styled from 'styled-components';
import { useState } from "react";

export default function Conteudo() {
    const [habito, setHabito] = useState("");
    const dias = [{ D: "D", valor: 0 }, { D: "S", valor: 1 }, { D: "T", valor: 2 }, { D: "Q", valor: 3 }, { D: "Q", valor: 4 }, { D: "S", valor: 5 }, { D: "S", valor: 6 }];
    let diasSelecionados = []

    function CriarHabito() {
        console.log(habito)
        console.log(diasSelecionados)
    }

    return (
        <DivHabito>
            <NovoHabito>
                <Formulario onSubmit={CriarHabito}>
                    <input type="text" id="habito" placeholder="nome do hábito" value={habito} onChange={e => setHabito(e.target.value)} required></input>
                    <Semana>
                        {dias.map(dia => { return (<DiaSemana dias={diasSelecionados} letra={dia.D} valor={dia.valor}></DiaSemana>) })}
                    </Semana>
                    <Botoes>
                        <BotaoCancelar>Cancelar</BotaoCancelar>
                        <BotaoSalvar type="submit">Salvar</BotaoSalvar>
                    </Botoes>
                </Formulario>


            </NovoHabito>
        </DivHabito>
    )
}


function DiaSemana(props) {
    const [selecionado, setSelecionado] = useState(false);

    return selecionado === false ? (
        <>
            <BotaoOff type="button" value={props.letra} onClick={() => {
                console.log(props.valor)
                props.dias.push(props.valor)
                setSelecionado(true)
                console.log(props.dias)
            }}>{props.letra}</BotaoOff>
        </>
    ) : (<>
        <BotaoOn type="button" value={props.letra} onClick={() => {
            console.log(props.valor)
            props.dias.splice(props.dias.indexOf(props.valor), 1)
            setSelecionado(false)
            console.log(props.dias)
        }}>{props.letra}</BotaoOn>
    </>)
}


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

const DivHabito = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    `
const NovoHabito = styled.div`
height: 180px;
width: 340px;
border-radius: 5px;
background-color: #ffffff;

`
const Formulario = styled.form`
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
margin-top: 33px;

input{
    width: 303px;
    height: 45px;
    margin-bottom: 6px;
    border-radius: 10px;
    font-size: 20px;
    color: black;
    border: 1px solid #d4d4d4;
    margin-left: auto;
    margin-right: auto;
}
input::placeholder{
    color: #dbdbdb;
}
`
const Botoes = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
font-size: 16px;
margin-top: 20px;
margin-left: 148px;
`
const BotaoSalvar = styled.button`
width: 84px;
height: 35px;
background-color: #52b6ff;
border: none;
border-radius: 5px;
color: #ffffff;
margin-right: 15px;
`
const BotaoCancelar = styled.button`
border: none;
color: #52b6ff;
background-color: #ffffff;
margin-right: 15px;
`