import Topo from "./Topo"
import Footer from "./Footer";
import styled from 'styled-components';

export default function Historico(props) {
    const {codigo} = props;
    return(
        <Corpo>
            <Topo foto={codigo.image} />
            <Painel>
                <TopoPainel>
                    <p>Histórico</p>
                </TopoPainel>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Painel>
            <Footer foto= {codigo.image} token={codigo.token} total={0}></Footer>
        </Corpo>
    )
}

const Painel = styled.div`
padding: 0 17px;
color: #666666;
font-size: 18px;
`

const Corpo = styled.div`
background-color: #e5e5e5;
font-family: 'Lexend Deca', sans-serif;
min-height: 80vh;
padding: 40px 0;
`
const TopoPainel = styled.div`
display: flex;
flex-direction: column;
font-size: 23px;
color: #126BA5;
margin: 28px 0px;
span{
    font-size: 18px;
    color: #bababa;
}
`