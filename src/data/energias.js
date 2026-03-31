import energiaImg from '../assets/energia-eolica-img.jpg'
import solarImg from '../assets/energia-solar-img.jpg'
import hidroImg from '../assets/energia-hidreletrica-img.jpg'
import biomassaImg from '../assets/energia-biomassa-img.jpg'
import fosseisImg from '../assets/energia-combustiveis-fosseis-img.jpg'

export const energias = {
    eolica: {
        title: "Energia Eólica",
        image: energiaImg,
        content: [
            {
                type: "image",
                src: "/images/eolica/eolica1.png",
                description: "Nesta fase, o vento não gerava eletricidade, mas sim trabalho mecânico. 5.000 a.C.: Os egípcios utilizam a energia do vento para impulsionar barcos no Rio Nilo."

            },
            {
                type: "image",
                src: "/images/eolica/eolica2.png",
                description: `Século VII (Pérsia): Surgem os primeiros moinhos de eixo vertical documentados, usados para moer grãos e bombear água.
                                Século XII (Europa): Os moinhos de vento de eixo horizontal (o modelo clássico de "Don Quixote") tornam-se populares na Holanda e Inglaterra para drenagem de pântanos e moagem`

            },
            {
                type: "image",
                src: "/images/eolica/eolica3.png",
                description: `1887 (Escócia): James Blyth constrói a primeira turbina eólica que gera eletricidade para iluminar sua casa de campo.
                            1888 (EUA): Charles Brush cria uma turbina gigante de 12 kW em Cleveland. Tinha 144 pás de cedro e funcionou por 20 anos.
                            1890s (Dinamarca): Poul la Cour descobre que turbinas com poucas pás girando rápido são mais eficientes para gerar eletricidade do que as de muitas pás. Ele é considerado o pai da aerodinâmica eólica moderna.
                            `
            },
            {
                type: "image",
                src: "/images/eolica/eolica4.png",
                description: `1941 (EUA): A primeira turbina de escala de megawatt (1.25 MW) é conectada à rede elétrica em Vermont, mas falha após algumas centenas de horas de uso devido à falta de materiais resistentes na época.`
            },
            {
                type: "image",
                src: "/images/eolica/eolica5.jpg",
                description: `1980: O primeiro parque eólico do mundo é instalado em New Hampshire (EUA), composto por 20 turbinas pequenas.`
            },
            {
                type: "image",
                src: "/images/eolica/eolica6.png",
                description: `1991 (Dinamarca): É instalado o primeiro parque eólico offshore (no mar) do mundo, em Vindeby.
1992 (Brasil): É instalada a primeira turbina eólica do Brasil em Fernando de Noronha (PE), um projeto piloto com apenas 75 kW.
`
            },
            {
                type: "image",
                src: "/images/eolica/eolica7.png",
                description: `2023 - 2024: Lançamento de turbinas colossais. A MySE 16-260 (China) torna-se uma das maiores do mundo, com um diâmetro de rotor de 260 metros, capaz de abastecer 36.000 residências com uma única unidade.
                             2026 (Hoje): A energia eólica é a fonte de energia renovável que mais cresce no mundo, com foco total em eólica flutuante (em águas profundas onde não se alcança o fundo do mar).
                        `
            },
            {
                type: "video",
                id: "PHdrLRcOGCA",
                titleVideo: "SUBIMOS num GERADOR EÓLICO",
                description: "SUBIMOS num GERADOR EÓLICO"
            },
        ],
    },
    solar: {
        title: "Energia Solar",
        image: solarImg,
        content: [
            {
                type: "image",
                src: "/images/solar/solar1.png",
                description: "Antiguidade e Iluminismo: Antes das placas de silício, a humanidade usava espelhos e lentes para concentrar o calor."
            },
            {
                type: "image",
                src: "/images/solar/solar2.png",
                description: "1767: Horace de Saussure inventa a primeira caixa solar térmica, um protótipo do aquecedor solar, atingindo 110°C."
            },
            {
                type: "image",
                src: "/images/solar/solar3.png",
                description: "Século XIX: A descoberta do efeito fotovoltaico, onde a ciência entende que a luz pode gerar corrente elétrica."
            },
            {
                type: "image",
                src: "/images/solar/solar4.png",
                description: "1883: Charles Fritts constrói a primeira célula solar sólida usando selênio revestido com uma fina camada de ouro."
            },
            {
                type: "image",
                src: "/images/solar/solar5.png",
                description: "1954: Daryl Chapin, Calvin Fuller e Gerald Pearson criam a primeira célula solar de silício nos Bell Labs."
            },
            {
                type: "image",
                src: "/images/solar/solar6.png",
                description: "1958: O Vanguard I torna-se o primeiro satélite a usar energia solar, tecnologia ideal para o espaço."
            },
            {
                type: "image",
                src: "/images/solar/solar7.png",
                description: "(alterar)2021-2026: A era das Perovskitas e células tandem busca quebrar barreiras de eficiência em laboratório."
            },
            {
                type: "image",
                src: "/images/solar/solar8.png",
                description: "2026 (Hoje): A energia solar ultrapassa 40 GW de capacidade instalada no Brasil entre usinas e telhados."
            },
            {
                type: "video",
                id: "_W1nQT7az8c",
                titleVideo: "COMO FUNCIONA uma USINA SOLAR",
                description: "Explicação técnica sobre o funcionamento de uma usina solar fotovoltaica."
            },
        ],
    },
    hidreletrica: {
        title: "Energia Hidrelétrica",
        image: hidroImg,
        content: [
            {
                type: "image",
                src: "/images/hidro/hidro1.png",
                description: "Antiguidade e Idade Média: Rodas d'água verticais eram usadas na China para moer grãos e na fundição de ferro."
            },
            {
                type: "image",
                src: "/images/hidro/hidro2.png",
                description: "Século XI: O Domesday Book registra mais de 5.600 moinhos de água na Inglaterra para diversos fins industriais."
            },
            {
                type: "image",
                src: "/images/hidro/hidro3.jpg",
                description: "1878: William Armstrong cria o primeiro projeto hidrelétrico do mundo em sua casa de campo para uma lâmpada de arco."
            },
            {
                type: "image",
                src: "/images/hidro/hidro4.png",
                description: "1882: Entra em operação a primeira usina hidrelétrica central do mundo em Appleton, Wisconsin."
            },
            {
                type: "image",
                src: "/images/hidro/hidro5.png",
                description: "1895: Tesla e Westinghouse inauguram a usina do Niágara, marco da transmissão de energia em Corrente Alternada."
            },
            {
                type: "image",
                src: "/images/hidro/hidro6.png",
                description: "1936: Conclusão da Represa Hoover, na época a maior estrutura de concreto e produtora de energia do mundo."
            },
            {
                type: "image",
                src: "/images/hidro/hidro7.png",
                description: "1973: Início da construção de Itaipu Binacional, marco da engenharia brasileira e paraguaia."
            },
            {
                type: "image",
                src: "/images/hidro/hidro8.png",
                description: "2012: A Usina de Três Gargantas na China torna-se a maior hidrelétrica do mundo em capacidade instalada."
            },
            {
                type: "video",
                id: "If6K_GHmwmQ",
                titleVideo: "USINAS HIDRELÉTRICAS REVERSÍVEIS",
                description: "Vídeo sobre a solução de usinas reversíveis para o armazenamento de energia."
            }
        ],
    },
    biomassa: {
        title: "Biomassa",
        image: biomassaImg,
        content: [
            {
                type: "image",
                src: "/images/biomassa/biomassa1.png",
                description: "Pré-História: O domínio do fogo e a queima de madeira permitiram aquecimento, proteção e cozimento de alimentos."
            },
            {
                type: "image",
                src: "/images/biomassa/biomassa2.png",
                description: "Séculos XVIII e XIX: A madeira era o principal combustível para as máquinas a vapor e as primeiras locomotivas."
            },
            {
                type: "image",
                src: "/images/biomassa/biomassa3.png",
                description: "1975: Lançamento do Proálcool no Brasil, tornando a cana-de-açúcar protagonista da matriz energética."
            },
            {
                type: "image",
                src: "/images/biomassa/biomassa4.png",
                description: "2020-2026: Consolidação do Etanol de 2ª Geração (E2G) e produção de Biometano a partir de resíduos."
            },
            {
                type: "video",
                id: "M7Rm6YVWF_Q",
                titleVideo: "O que é Biomassa? #5 - Energy Lab",
                description: "Vídeo educativo explicando o conceito e as aplicações da biomassa."
            },
            {
                type: "video",
                id: "uSHfWQfkPcY",
                titleVideo: "Discover Leoben’s Biomass Logistic and Trade Centre",
                description: "Vídeo educativo mostrando uma industria de Leoben na Estíria na Áustria Central."
            },
            {
                type: "video",
                id: "LhKUpAeL_xE",
                titleVideo: "Energia limpa: biomassa vai gerar mais energia ao país",
                description: "Uma reportagem Especial do Sistema da Rede Bandeirantes de Televisão que ajuda a entender mais as vantagens e os desafios dessa energia"
            },
        ],
    },
    fosseis: {
        title: "Combustíveis Fósseis",
        image: fosseisImg,
        content: [
            {
                type: "image",
                src: "/images/fosseis/fosseis1.jpg",
                description: "Formação: O carvão, petróleo e gás resultam de milhões de anos de decomposição de matéria orgânica sob pressão."
            },
            
            {
                type: "image",
                src: "/images/fosseis/fosseis2.jpg",
                description: "Revolução Industrial: Fábricas e máquinas a vapor movidas a carvão mineral impulsionaram a economia global."
            },
            {
                type: "image",
                src: "/images/fosseis/fosseis3.jpg",
                description: "1859: Edwin Drake perfura o primeiro poço de petróleo comercial moderno na Pensilvânia."
            },
            {
                type: "text",
                titleText: "O Dilema da Descarbonização em 2026",
                description: "Hoje o mundo vive o movimento de descarbonização. O objetivo é substituir fontes fósseis por limpas e usar tecnologias de captura de carbono (CCS) para mitigar danos ambientais, buscando o 'Net Zero' sem colapsar a economia global."
            },
            {
                type: "text",
                titleText: "Por que ainda usamos?",
                description: `A "Vantagem": Eles possuem uma densidade energética altíssima. Um pequeno volume de diesel consegue mover um caminhão pesado por quilômetros, algo que as baterias atuais ainda lutam para fazer com a mesma eficiência. Além disso, a infraestrutura global (postos, refinarias, navios) já está pronta.
                                O "Custo": Além do aquecimento global, a extração fóssil é finita. Estamos consumindo em 200 anos o que a Terra levou 300 milhões de anos para estocar. Isso gera dependência econômica e conflitos geopolíticos por reservas.`
            },
            {
                type: "video",
                id: "vOuuZJ5d4Ks",
                titleVideo: "Como funciona uma PLATAFORMA de PETRÓLEO",
                description: "Visita técnica explicando a extração de petróleo em plataformas offshore."
            },
            {
                type: "video",
                id: "acziFI4YpNw",
                titleVideo: "Navio de petróleo em 360",
                description: "Observe o navio de petróleo da St Malo Deepwater Oil Project com uma visão 360!"
            },
            {
                type: "video",
                id: "ihg51zECxdo",
                titleVideo: "Base de petróleo na amazonia",
                description: "Observe a base de petróleo na Amazônia"
            },
        ],
    }
}

