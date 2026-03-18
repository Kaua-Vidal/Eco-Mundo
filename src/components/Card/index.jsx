import { Container, Description, Image, Title } from "./styles";

export default function Card({img, title, description}) {
    return (
        <Container>
            <Image src={img}/>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Container>
    )
}