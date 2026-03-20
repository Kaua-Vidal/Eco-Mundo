import { Button, Container, Image, Title } from "./styles";

export default function Card({img, title, children, onClick}) {
    return (
        <Container >
            <Image src={img}/>
            <Title>{title}</Title>

            <Button onClick={onClick}>{children}</Button>
        </Container>
    )
}