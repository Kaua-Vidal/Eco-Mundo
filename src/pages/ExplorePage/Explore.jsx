import { useParams } from "react-router-dom";
import { energias } from '../../data/energias';
import VideoSection from "../../components/VideoSection";
import { Container } from "./styles";

export default function Explore() {

    const { tipo } = useParams();
    const energia = energias[tipo];

    if (!energia) {
        return <h1>Não encontrado</h1>
    }

    return (
        <Container>
            {energia.videos.map((video) => (
                <VideoSection key={video.id} video={video}/>
            ))}
        </Container>
    )
}