import eolica from '../../assets/eolica.png'
import solar from '../../assets/solar.png'
import hidreletrica from '../../assets/hidreletrica.png'
import biomassa from '../../assets/biomassa.png'
import fosseis from '../../assets/fosseis.png'
import Card from '../Card'
import { Container } from './styles'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
import { useNavigate } from 'react-router-dom'

const CarouselComponent = Carousel.default || Carousel;

export default function HorizontalCarousel() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 150, // 👈 mostra card cortado
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2,
            partialVisibilityGutter: 150,
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
            partialVisibilityGutter: 150,
        },
    };

    const navigate = useNavigate();

    return (
        <Container>
            <CarouselComponent
                responsive={responsive}
                infinite={true}
                partialVisible={true}
                draggable={true}
                swipeable={true}
                itemClass="carousel-item"
            >

                <Card img={eolica} title="Eólica" onClick={() => navigate("/explorar/eolica")}>Explorar</Card>
                <Card img={solar} title="Solar" onClick={() => navigate("/explorar/solar")}>Explorar</Card>
                <Card img={hidreletrica} title="Hidrelétrica" onClick={() => navigate("/explorar/hidreletrica")}>Explorar</Card>
                <Card img={biomassa} title="Biomassa" onClick={() => navigate("/explorar/biomassa")}>Explorar</Card>
                <Card img={fosseis} title="Combustíveis Fósseis" onClick={() => navigate("/explorar/fosseis")}>Explorar</Card>
            </CarouselComponent>
        </Container>
    )
}