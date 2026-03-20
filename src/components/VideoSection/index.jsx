import { useInView } from "../../hooks/ObserverHook"
import { Content, Section, VideoBackground } from "./styles";

export default function VideoSection({ video }) {
    const { ref, isVisible } = useInView();

    return (
        <Section ref={ref} $isActive={isVisible}>
            <VideoBackground>
                <iframe src={`https://www.youtube.com/embed/${video.id}?autoplay=${isVisible ? 1 : 0
                    }&mute=1&playsinline=1`}
                    allow="autoplay" />
            </VideoBackground>

            <Content>
                <p>{video.description}</p>
            </Content>
        </Section>
    )
}