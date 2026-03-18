import Card from "../Card";
import { Container } from "./styles";
import FontesDeEnergiaImg from '../../assets/FontesDeEnergia-img.svg'
import DicasSustentaviesImg from '../../assets/dicas-sustentaveis.svg'
import CuriosidadesImg from '../../assets/curiosidades-img.svg'

export default function CardGrid() {
    return (
        <Container>
            <Card 
            img={FontesDeEnergiaImg}
            title="Fontes de Energia"/>
            <Card img={DicasSustentaviesImg}
            title="Dicas Sustentáveis"/>
            <Card img={CuriosidadesImg}
            title="Curiosidades"/>
        </Container>
    )
}