import logo from "./assets/images/logo.png";
import styled from "styled-components";

export default function Logo() {
    return (
        <LogoStyle>
            <img src={logo} alt="Logo" />
        </LogoStyle>
    )
}

const LogoStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 68px;
`