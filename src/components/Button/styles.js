import styled from "styled-components";

export const Container = styled.button`
    padding: 10px 60px;
    border-radius: 10px;
    color: ${({color}) => color || "#fff"};
    background: ${({background}) => background || "#fff"};
    cursor: pointer;

    font-size: 25px;
    font-weight: 600;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    gap: 8px;

    border: none;
    transition: all 300ms ease;
    box-shadow: 5px 7px 20px 4px rgba(0,0,0,0.62);

    &:hover {
        transform: translateY(-3px);
        box-shadow: 5px 7px 20px 4px rgba(0,0,0,0.8);
    }
`;