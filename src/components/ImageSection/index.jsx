import { Content, Container } from "./styles";

export default function ImageSection({ description, image }) {
    return (
        <Container>
            <img src={image}></img>
            <Content>{description}</Content>
        </Container>
    )
}