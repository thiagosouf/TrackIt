import styled from "styled-components"

export default function ListarHoje(props) {
    const { conteudo } = props;
    console.log(conteudo)
    return conteudo.length>0 ?(
        <>
        
            {conteudo.map(dia =>{
                return(
                    <ComHabito>
                    <Nome>
                        <p>{dia.name}</p>
                    </Nome>
                    </ComHabito>
                )
            })}
        
        </>
    ):(
        <SemHabito>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</SemHabito>
    )
}

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
border-radius: 15px;

`
const Nome = styled.span`
display: flex;
justify-content: space-between;
margin: 0;
margin-right: 2%;
`

const SemHabito = styled.span`
color: #666666;
font-size: 18px;
`