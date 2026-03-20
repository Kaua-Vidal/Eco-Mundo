import { Container, Logo, Nav, NavItem } from "./styles";
import LogoImg from '../../assets/logo.png'

export default function Header() {

    return (
        <Container>
            <Logo src={LogoImg}></Logo>

            <Nav>
                <NavItem to='/'>Início</NavItem>
                <NavItem to='/sobre'>Sobre</NavItem>
            </Nav>
        </Container>
    )
}