import styled from "styled-components"

export const Content = styled.div`
    position: absolute;
    bottom: 0;
    z-index: 2;

    width: 91%;

    pointer-events: none;

    padding: 100px;
    

    background: linear-gradient(
    to top,
    rgba(0,0,0,0.8),
    transparent
    );

    color: #fff;
`


export const Container = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    padding: 70px;
    margin-bottom: 30px;

    img {
        height: 100vh;
        width: 100%;

        position: relative;
    }
`