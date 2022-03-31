import styled from "styled-components";
import { useState } from "react";



export default function ListarHabitos(){
    const [temHabito, setTemHabito] = useState(false);
    return !temHabito?(
    <>
        <SemHabito>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</SemHabito>
    </>
    ):(
        <></>
    )
}

const SemHabito = styled.span`
color: #666666;
font-size: 18px;
`