import styled from "styled-components"
import { BsCheckLg } from "react-icons/bs"
import axios from "axios";


export default function ListarHoje(props) {
    const { conteudo, token, setPorcentagem } = props;
    const cor = `#8FC549`;
    const Authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }



    function SelecionarBotao(diaId) {

        const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${diaId}/check`, {}, Authorization);
        requisicao.then(response => {
            setPorcentagem(`s${diaId}`)



        });
        requisicao.catch(err => alert("Não foi possível marcar o hábito"));
    }

    function DesmarcarBotao(diaId) {


        const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${diaId}/uncheck`, {}, Authorization);
        requisicao.then(response => {
            setPorcentagem(`d${diaId}`)



        });
        requisicao.catch(err => alert("Não foi possível desmarcar o hábito"));
    }
    return conteudo.length > 0 ? (
        <>

            {conteudo.map(dia => {
                return (
                    <ComHabito>
                        <InfoHabito>
                            <Nome>
                                {dia.name}
                            </Nome>

                            <InfoHJ>Sequencia atual: <span style={{ color: dia.done ? `${cor}` : `` }}>{dia.currentSequence} dias</span></InfoHJ>
                            <InfoHJ>Seu recorder: <span style={{ color: (dia.done && dia.currentSequence === dia.highestSequence) ? `${cor}` : `` }}>{dia.highestSequence} dias</span></InfoHJ>
                        </InfoHabito>
                        {dia.done ? (
                            <CheckHabito style={{ backgroundColor: `${cor}` }} onClick={() => { DesmarcarBotao(dia.id) }}><BsCheckLg /></CheckHabito>)
                            :
                            <CheckHabito onClick={() => { SelecionarBotao(dia.id) }}><BsCheckLg /></CheckHabito>
                        }


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
width: 100%;
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

const CheckHabito = styled.button`
height: 69px;
width: 69px;
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