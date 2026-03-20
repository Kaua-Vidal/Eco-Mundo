import bg from "../../assets/fundo.png"
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    background-image: url(${bg});
    background-size: cover;
    background-position: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
`

export const Content = styled.div`
    color: #fff;

    p {
        font-weight: 200;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`