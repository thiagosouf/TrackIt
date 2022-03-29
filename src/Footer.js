import styled from "styled-components"

export default function Footer(){
    
    return(
     <FooterStyle>
         <p>Hábitos</p>
         <BotaoCentro><p>Hoje</p></BotaoCentro>
         <p>Histórico</p>
     </FooterStyle>   
    )
}

const FooterStyle = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
color: #52b6ff;
background-color: #ffffff;
height: 70px;
width: 100vw;
font-size: 18px;
position: fixed;
bottom: 0;
`

const BotaoCentro = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #52b6ff;
height: 91px;
width: 91px;
color: #ffffff;
margin-bottom: 40px;
border-radius: 50%;
`
