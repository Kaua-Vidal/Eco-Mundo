import styled from "styled-components";

export const Container = styled.div`
    background-image: url(${(props) => props.$image});
    height: 100vh;
    width: 100%;

    background-size: cover;
    background-position: center;

    display: flex;
    align-items: center;
    justify-content: center;


`

export const Overlay = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 30px;

    flex-direction: column;

    background: rgba(0,0,0,0.6)
    
`

export const Title = styled.h1`
    color: #fff;
    font-weight: 400;
    text-align: center;
`