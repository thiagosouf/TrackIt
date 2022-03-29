import Topo from "./Topo"
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./Footer";

export default function Habitos(props){
    const { state } = useLocation();
    const { nome, foto, token } = state;
    return(
        <Corpo>
               <Topo foto={foto}/>
               <Painel>
                   <TopoPainel>
                        <p>Meus hábitos</p>
                        <Plus><p>+</p></Plus>
                   </TopoPainel>
                   <SemHabito>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</SemHabito>   
               </Painel>
               <Footer></Footer>

        </Corpo>
    )
}

const Corpo = styled.div`
    background-color: #e5e5e5;
    font-family: 'Lexend Deca', sans-serif;
    height: 100vh;
`
const TopoPainel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 23px;
    color: #126BA5;
    `
const Painel = styled.div`
    padding: 0 17px;
    
`
const Plus = styled.div`
    background-color: #52b6ff;
    height: 35px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15%;
    font-size: 27px;
    color: #ffffff;
`
const SemHabito = styled.span`
color: #666666;
font-size: 18px;
`