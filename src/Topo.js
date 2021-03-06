import styled from "styled-components"

export default function Topo(props){
    
    return(
     <TopoStyle>
         <Logo2>Trackit</Logo2>
         <img src={props.foto} alt="foto-usuario"></img>
     </TopoStyle>   
    )
}

const TopoStyle = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    width: 100vw;
    background-color: #126BA5;
    padding: 0 10px;
    box-shadow: 0px 4px 4px 0px #00000026;
    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    };
`

const Logo2= styled.p`
    font-family: 'Playball', cursive;
    font-size: 39px;
    color: #ffffff;
`