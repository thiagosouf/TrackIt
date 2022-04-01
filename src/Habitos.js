import Topo from "./Topo"
import ListarHabitos from "./ListarHabitos"
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {useLocation } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";
import Conteudo from "./Conteudo";

export default function Habitos(){
    const { state } = useLocation();
    const { nome, foto, token } = state;
    const [ conteudo, setConteudo] = useState("");
    
    return(
        <Corpo> 
               <Topo foto={foto}/>
               <Painel>
                   <TopoPainel>
                        <p>Meus hábitos</p>
                        <Plus onClick={()=>setConteudo(<Conteudo setConteudo={setConteudo} token={token}/>)}><p>+</p></Plus>
                   </TopoPainel>
                     {conteudo}
                     <ListarHabitos token={token} conteudo={conteudo}/>
                   
               </Painel>
               <Footer></Footer>

        </Corpo>
    )
}

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
const Painel = styled.div`
    padding: 0 17px;
    
`
const Plus = styled.button`
    background-color: #52b6ff;
    height: 35px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15%;
    font-size: 27px;
    color: #ffffff;
    border: none;
`
// const SemHabito = styled.span`
// color: #666666;
// font-size: 18px;
// `