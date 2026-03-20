import { Container, Logo, Nav, NavItem } from "./styles";
import LogoImg from '../../assets/logo.png'

export default function Header() {
    return (
        <Container>
            <Logo src={LogoImg}></Logo>

            <Nav>
                <NavItem>Fontes de Energia</NavItem>
                <NavItem>Sustentabilidade</NavItem>
                <NavItem>Curiosidades</NavItem>
            </Nav>
        </Container>
    )
}