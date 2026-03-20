import styled from "styled-components";

export const Section = styled.section`
    position: relative;

    height: 100vh;
    width: 100%;

    display: flex;
    align-items: flex-end;

    transition: all 600ms ease;

    ${({ $isActive}) => 
        $isActive ?
        `
            transform: scale(1);
            z-index: 2;
            opacity: 1;
        ` :
        `
            transform: scale(0.95);
            z-index: 1;
            opacity: 0.7;
        `
    }
`

export const VideoBackground = styled.div`
    position: absolute;
    inset: 0;
    z-index: 1;

    iframe {
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
`

export const Content = styled.div`
    position: absolute;
    bottom: 0;
    z-index: 2;

    width: 100%;
    padding: 60px;

    background: linear-gradient(
    to top,
    rgba(0,0,0,0.8),
    transparent
    );

    color: #fff
`