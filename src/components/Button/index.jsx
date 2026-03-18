import { Container } from "./styles";

export default function Button({children, background, color}) {
    return <Container background={background} color={color}>{children}</Container>
};