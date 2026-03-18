import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    height: 100px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 300ms ease;

    &:hover {
        transform: translateY(-2px);
    }
`;

export const Title = styled.h3`
    font-size: 25px;
`;

export const Image = styled.img`
    margin-right: 25px;
    width: 80px;
`;

export const Description = styled.p``;