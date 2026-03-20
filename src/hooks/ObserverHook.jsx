import { useEffect, useRef, useState } from "react";

export function useInView() {
    const ref = useRef(null); //Referencia do Elemento que será visto
    const [isVisible, setIsVisible] = useState(false); //Onde definimos se está visivel ou não

    useEffect(() => { //UseEffect é de quando a página for iniciada
        const observer = new IntersectionObserver(  //API do navegador para detectar a visibilidade de elementos
                ([entry]) => {  //Aqui definimos a entrada
                    setIsVisible(entry.isIntersecting)  //Se a entrada que chegar for TRUE => Elemento visivel
                },                                      //Se a entrada que chegar for FALSE => Elemento saiu da tela
                {
                    threshold: 0.6  //Definimos quanto o elemento precisa estar visível
                }
            );

            if (ref.current) observer.observe(ref.current) //Se existe um elemento autal, ele começa a observar
        }, []);

        return { ref, isVisible };
}