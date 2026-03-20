import { Container, Overlay, Title } from "./styles";
import {CaretDoubleDownIcon} from "@phosphor-icons/react";

export default function HeroSection ({image, title}){
    return (
        <Container $image={image}>
            <Overlay>
                <Title>Vamos conhecer um pouco mais sobre: <br />
                        {title}
                        
                </Title>
                <CaretDoubleDownIcon color="#e0e0e0" size={40}/>
            </Overlay>
        </Container>
    )
};
