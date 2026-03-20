import { Container } from "./styles";

export default function TextSection({description, titleText}) {
    return (
        <Container>
            <h1>{titleText}</h1>
            <p>{description}</p>
        </Container>
    )
}