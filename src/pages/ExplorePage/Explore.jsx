import { useParams } from "react-router-dom";
import { energias } from '../../data/energias';
import VideoSection from "../../components/VideoSection";
import { Container } from "./styles";
import HeroSection from "../../components/HeroSection";
import TextSection from "../../components/TextSection";


export default function Explore() {

    const { tipo } = useParams();
    const energia = energias[tipo];

    if (!energia) {
        return <h1>Não encontrado</h1>
    }



    return (
            <Container>

                <HeroSection 
                    image={energia.image} 
                    title={energia.title} />

                {energia.content.map((item, index) => {
                    if (item.type === "video") {
                        return <VideoSection key={index} video={item} />
                    }

                    if (item.type === "text") {
                        return <TextSection key={index} description={item.description} titleText={item.titleText}/>
                    }

                    return null;
                    
                })}
            </Container>
    )
}