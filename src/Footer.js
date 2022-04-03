import styled from "styled-components"
import { useNavigate} from "react-router-dom";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



export default function Footer(props){
    const { foto, token, total } = props;
    const percentage = parseInt(total*100);
    const navigate = useNavigate();
    return(
     <FooterStyle>
         <p onClick={()=>navigate("/habitos", { state: {foto: foto , token: token} })}>Hábitos</p>
         <BotaoCentro onClick={()=>navigate("/hoje")}>
            <CircularProgressbar
            value={percentage}
            text={`Hoje`}
            background
            backgroundPadding={6}
            styles={buildStyles({
            backgroundColor: "#3e98c7",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent"
            })}
            >
                <p>Hoje</p>
            </CircularProgressbar>
         </BotaoCentro>
         <p onClick={()=>navigate("/historico")}>Histórico</p>
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
