import styled from "styled-components"
import { useNavigate} from "react-router-dom";

export default function Footer(){
    const navigate = useNavigate();
    return(
     <FooterStyle>
         <p>Hábitos</p>
         <BotaoCentro onClick={()=>navigate("/hoje")}><p>Hoje</p></BotaoCentro>
         
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
/* p{
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 10px solid #52b6ff;
    border-left-color: #FFFFFF;
} */
`
