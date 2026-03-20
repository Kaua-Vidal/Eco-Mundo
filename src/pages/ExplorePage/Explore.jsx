import { useParams } from "react-router-dom";
import { energias } from '../../data/energias';
import { Container, Description, Section, Title, VideoWrapper } from "./styles";

export default function Explore() {
    const { tipo } = useParams();

    const energia = energias[tipo];

    if (!energia) {
        return <h1>Não encontrado</h1>
    }

    return (
        <Container>
            <Title>{energia.title}</Title>

            {energia.videos.map((video, index) => (
                <Section key={index}>
                    <VideoWrapper>
                        <iframe
                            width="100%"
                            height="730"
                            src={`https://www.youtube.com/embed/${video.id}?${index === 0 ? "autoplay=1&mute=1" : ""
                                }`}
                            title="Youtube video"
                            frameBorder="0"
                            allow="autoplay"
                            allowFullScreen
                        />
                    </VideoWrapper>
                    
                    <Description>{video.description}</Description>

                </Section>
            ))}
        </Container>
    )
}