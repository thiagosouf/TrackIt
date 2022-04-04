import Topo from "./Topo"
import ListarHabitos from "./ListarHabitos"
import styled from 'styled-components';
import Footer from "./Footer";
import { useState } from "react";
import Conteudo from "./Conteudo";


export default function Habitos(props){ 
    const {codigo} = props
    const [ conteudo, setConteudo] = useState("");
    
    return(
        <Corpo> 
               <Topo foto={codigo.image}/>
               <Painel>
                   <TopoPainel>
                        <p>Meus hábitos</p>
                        <Plus onClick={()=>setConteudo(<Conteudo setConteudo={setConteudo} token={codigo.token}/>)}><p>+</p></Plus>
                   </TopoPainel>
                     {conteudo}
                     <ListarHabitos token={codigo.token} conteudo={conteudo}/>
                   
               </Painel>
               <Footer></Footer>

        </Corpo>
    )
}

const Corpo = styled.div`
    background-color: #e5e5e5;
    font-family: 'Lexend Deca', sans-serif;
    min-height: 100vh;
    padding: 98px 0;
`
const TopoPainel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 23px;
    color: #126BA5;
    margin-bottom: 20px;
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