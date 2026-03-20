import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 30rem;
    background: rgba(255,255,255,0.8);
    border-radius: 12px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    text-align: center;

    backdrop-filter: blur(10px);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    transition: all 300ms ease;

    &:hover {
        transform: translateY(-2px);
    }
`;

export const Title = styled.h3`
    color: #fff;
    font-size: 25px;
    position: absolute;
    font-weight: 200;
    text-shadow: 0px 0px 5px rgba(0,0,0,1);

`;

export const Image = styled.img`
    pointer-events: none;
    user-select: none;
`;

export const Button = styled.button`
    padding: 20px 80px;
    background: none;
    border: 1px solid #000;
    border-radius: 5px;
    cursor: pointer;
    transition: all 300ms ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0px 7px 20px rgba(0,0,0,0.3);
    }
`;