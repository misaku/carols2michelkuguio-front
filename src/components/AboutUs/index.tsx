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

export function AboutUs() {
    return (
<Wrapper>
        <Container>
            <MontserratTitle>Ele perguntou e ela disse sim!</MontserratTitle>
            <MontserratP>Em meio ao perfume das flores de Holambra, sob um céu pintado pelo pôr do sol, entre campos
                que pareciam saídos de um sonho, ele fez uma das perguntas mais importantes de suas vidas.
            </MontserratP>
            <MontserratP>Com o coração acelerado e os olhos brilhando de emoção, ela sorriu... e disse sim! Um "sim"
                que sela uma história que está sendo escrita com cumplicidade, carinho e um amor que a cada dia
                cresce ainda mais. Agora, um novo capítulo começa, e que ele seja tão lindo quanto aquele dia cheio de
                cores,
                amor e promessas
                eternas
            </MontserratP>

            <WrapperCard>
                <Card>
                    <HorizontMarging/>
                    <VerticalMarging/>
                    <MontserratTitle>Michel</MontserratTitle>
                    <MontserratP> Michel tem uma energia que ilumina tudo ao seu redor. Seu jeito alegre e divertido contagia a todos, tornando qualquer momento mais leve e especial. Ele é um homem admirável, educado, inteligente, gentil e dono de um coração imenso.
                        Ao lado dele, cada dia é repleto de boas conversas, risadas sinceras e gestos de carinho. Tive a sorte de encontrar na mesma pessoa amor, amizade, parceria verdadeira. Ele é o amor da minha vida 


                    </MontserratP>
                </Card>
                <Image src={noivo} alt={"sad"}/>
            </WrapperCard>
            <WrapperCard invert={true}>
                <Image src={noiva} alt={"sad"}/>
                <Card invert={true}>
                    <HorizontMarging/>
                    <VerticalMarging/>
                    <MontserratTitle>Carol</MontserratTitle>
                    <MontserratP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in tellus nec orci
                        eleifend accumsan. Nullam ut ornare metus. Phasellus eu pulvinar purus. Praesent ut tortor
                        eget arcu tempus luctus non non magna. Donec at nisl quis lectus porttitor cursus. Aliquam
                        egestas sagittis auctor. In at lobortis nisl. Nunc at eros quis arcu rutrum eleifend eu eget
                        nibh. Nullam eget posuere nibh. Nam nec nisi sit amet metus egestas rutrum. Pellentesque at
                        ultricies tellus. Sed posuere molestie diam nec pharetra.
                    </MontserratP>
                </Card>

            </WrapperCard>
        </Container>

</Wrapper>

    )
}
