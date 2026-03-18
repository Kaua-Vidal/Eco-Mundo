import { ButtonQuiz, Container, Logo, Nav, NavItem } from "./styles";
import LogoImg from "../../assets/logo.svg";

export default function Header() {
    return (
        <Container>
            <Logo src={LogoImg}></Logo>

            <Nav>
                <NavItem>Fontes de Energia</NavItem>
                <NavItem>Sustentabilidade</NavItem>
                <NavItem>Curiosidades</NavItem>
            </Nav>

            <ButtonQuiz>Quiz</ButtonQuiz>
        </Container>
    )
}