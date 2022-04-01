import styled from "styled-components"
import {BsCheckLg} from "react-icons/bs"

export default function ListarHoje(props) {
    const { conteudo } = props;
    console.log("conteudo de hj")
    console.log(conteudo)
    return conteudo.length > 0 ? (
        <>

            {conteudo.map(dia => {
                return (
                    <ComHabito>
                        <InfoHabito>
                            <Nome>
                                {dia.name}
                            </Nome>

                            <InfoHJ>Sequencia atual: {dia.currentSequence} dias</InfoHJ>
                            <InfoHJ>Seu recorder: {dia.highestSequence} dias</InfoHJ>
                        </InfoHabito>
                        <CheckHabito><BsCheckLg/></CheckHabito>
                    </ComHabito>
                )
            })}

        </>
    ) : (
        <SemHabito>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</SemHabito>
    )
}

const ComHabito = styled.div`
height: 95px;
width: 90%;
background-color: #ffffff;
color: #666666;
font-size: 20px;
margin-bottom: 20px;
padding-left: 5%;
padding-right: 5%;
display: flex;
justify-content: space-between;
align-items: center;

border-radius: 15px;

`
const Nome = styled.span`
margin: 0;
margin-right: 2%;
margin-bottom: 5px;
`
const InfoHJ = styled.span`
margin-right: 2%;
font-size: 13px;
color: #666666;
`

const SemHabito = styled.span`
color: #666666;
font-size: 18px;
`

const CheckHabito= styled.div`
height: 69px;
width: 69px;
background-color: #EBEBEB;
border: 1px solid #e7e7e7;
border-radius: 10%;
display: flex;
justify-content: center;
align-items: center;
font-size: 40px;
color: #ffffff;
`

const InfoHabito = styled.div`
width: 208px;
display: flex;
flex-direction: column;`