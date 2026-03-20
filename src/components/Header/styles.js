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
    width: 100px;
    font-weight: bold;
    fill: #fff;
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