import Button from "../Button";
import { Container } from "./styles";
import { MagnifyingGlassIcon, PlusCircleIcon, PlayCircleIcon } from "@phosphor-icons/react"

export default function ActionButtons() {
    return (
        <Container>
            <Button background="#417DCF"><MagnifyingGlassIcon weight="bold"/>Explorar</Button>
            <Button background="#515E72"><PlusCircleIcon/>Sobre</Button>
            <Button background="#59B731"><PlayCircleIcon/>Iniciar Quiz</Button>
        </Container>
    )
}