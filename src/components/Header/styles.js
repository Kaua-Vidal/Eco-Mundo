import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 40px;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 1000;
`;


export const Logo = styled.img`
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
`;

export const Nav = styled.nav`
    display: flex;
    gap: 50px;
`;

export const NavItem = styled.a`
    color: #FFF;
    font-family: Inter;
    font-size: 17px;
    font-style: normal;
    font-weight: 200;
    cursor: pointer;

    transition: all 300ms ease;

    &:hover {
        transform: translateY(-2px);
    }

`;

export const ButtonQuiz = styled.button`
    padding: 8px 16px;

    border-radius: 20px;
    border: 1px solid #fff;

    background: transparent;
    color: #fff;

    cursor: pointer;

    transition: all 300ms ease;

    &:hover {
        background: #fff;
        color: black;
    }

`;