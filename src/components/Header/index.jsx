import { ButtonQuiz, Container, Logo, Nav, NavItem } from "./styles";

export default function Header() {
    return (
        <Container>
            <Logo>EcoMundo</Logo>

            <Nav>
                <NavItem>Fontes de Energia</NavItem>
                <NavItem>Sustentabilidade</NavItem>
                <NavItem>Curiosidades</NavItem>
            </Nav>

            <ButtonQuiz>Quiz</ButtonQuiz>
        </Container>
    )
}