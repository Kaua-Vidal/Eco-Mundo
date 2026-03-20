import styled from "styled-components";

export const Container = styled.div`
    padding: 0px 10px;
    max-width: 1200px;
    margin: 0 auto;
`

export const Title = styled.h1`
    font-size: 48px;
    margin-bottom: 60px;
    text-align: center;

    color: #000;
`

export const Section = styled.div`
    margin-bottom: 80px;
`

export const VideoWrapper = styled.div`
    position: relative;
    width: 100%;
    padding-top: 56.25%;

    iframe {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        border-radius: 16px;
    }
`

export const Description = styled.p``