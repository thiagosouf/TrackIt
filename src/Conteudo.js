import styled from 'styled-components';
import { useState } from "react";

export default function Conteudo(){
    const [habito, setHabito] = useState("");
    

    return(
        <DivHabito>
            <NovoHabito>
                    <Formulario>
                    <input type="text" id="habito" placeholder="nome do hábito" value={habito} onChange={e => setHabito(e.target.value)} required></input>
                    {/* <input type="password" id="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} required></input> */}
                    
                    
                    </Formulario>
                    <Botoes>
                        <BotaoCancelar type="submit">Cancelar</BotaoCancelar>
                        <BotaoSalvar type="submit">Salvar</BotaoSalvar>
                        
                    </Botoes>
            </NovoHabito>
        </DivHabito>
    )
}

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
const Botoes = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
font-size: 16px;
margin-top: 26px;
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