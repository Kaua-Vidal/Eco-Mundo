import { Container, Content } from './styles'

export default function Hero({children}) {
    return (
        <Container>
            <Content>
                <h1>Qual Fonte de Energia você gostaria de explorar?</h1>
                <p>Clique para descobrir.</p>
            </Content>

            {children}
        </Container>
    )
}