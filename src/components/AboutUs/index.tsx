import {
    MontserratTitle,
    Container,
    MontserratP,
    WrapperCard,
    Card,
    HorizontMarging,
    VerticalMarging,
    Image,
    Wrapper
} from "./about-us.styles"

import noiva from '../../assets/noiva.jpg'
import noivo from '../../assets/noivo.jpg'
import {AnimatedComponent} from "../Animations";
import {useEffect} from "react";
import {useReadyStore} from "../../ready.store.ts";

export function AboutUs() {
    const {makeAboutUsReady} = useReadyStore();
    useEffect(() => {
        makeAboutUsReady();
    }, [makeAboutUsReady]);
    return (
<Wrapper id={"quem-somos"}>
        <Container>

            <MontserratTitle>
                Ele perguntou e ela disse sim!
            </MontserratTitle>
            <MontserratP>Em Holambra, com o pôr do sol se aproximando e cercados por campos de flores, ele fez uma das perguntas mais importantes de suas vidas: “Quer casar comigo?”
            </MontserratP>
            <MontserratP>Com o coração acelerado e os olhos cheios de emoção, ela sorriu... e disse sim! Um "sim" que marca o início de um novo capítulo, construído com cumplicidade, carinho e um amor que cresce a cada dia. Agora, com a bênção de Deus, seguem juntos para viver essa nova fase da vida.
            </MontserratP>
            <AnimatedComponent animationType={'FadeInLeft'}>
                <WrapperCard>
                    <Image src={noivo} alt={"Michel dos Santos Kuguio"}/>
                    <Card>
                        <HorizontMarging/>
                        <VerticalMarging/>
                        <MontserratTitle>Michel</MontserratTitle>
                        <MontserratP> Michel tem uma energia radiante, capaz de iluminar tudo ao seu redor. Seu jeito alegre e divertido contagia a todos, transformando qualquer momento em algo mais leve e especial. Ele é um homem inteligente, gentil e dono de um coração imenso.

                            Ao seu lado, cada dia é preenchido com boas conversas, risadas sinceras e gestos de carinho. Tive a sorte de encontrar em uma única pessoa amor, amizade e companheirismo. É muito bom compartilhar a vida com você, te amo.
                        </MontserratP>
                    </Card>

                </WrapperCard>
            </AnimatedComponent>
            <AnimatedComponent animationType={'FadeInRight'} >
            <WrapperCard invert={true}>
                <Image src={noiva} alt={"Carolina Tavares Oliveira"} invert={true}/>
                <Card invert={true}>
                    <HorizontMarging/>
                    <VerticalMarging/>
                    <MontserratTitle>Carol</MontserratTitle>
                    <MontserratP>A Carol é uma mulher incrível, doce e meiga, sempre cheia de energia, capaz de cativar a todos com sua alegria. Ela carrega a inocência de uma menina, mas também a força de uma guerreira. Sua inteligência, determinação e companheirismo tornam impossível não admirar essa mulher. Eu orei tanto a Deus para que ela existisse, e Ele me entregou esse presente precioso que é a Carol!
                    </MontserratP>
                </Card>
            </WrapperCard>
            </AnimatedComponent>
        </Container>
</Wrapper>
    )
}
