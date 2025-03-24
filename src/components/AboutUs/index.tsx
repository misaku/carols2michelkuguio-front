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
                <Image src={noivo} alt={"sad"}/>
                <Card>
                    <HorizontMarging/>
                    <VerticalMarging/>
                    <MontserratTitle>Michel</MontserratTitle>
                    <MontserratP> Michel tem uma energia que ilumina tudo ao seu redor. Seu jeito alegre e divertido contagia a todos, tornando qualquer momento mais leve e especial. Ele é um homem admirável, educado, inteligente, gentil e dono de um coração imenso.
                        Ao lado dele, cada dia é repleto de boas conversas, risadas sinceras e gestos de carinho. Tive a sorte de encontrar na mesma pessoa amor, amizade, parceria verdadeira. Ele é o amor da minha vida 


                    </MontserratP>
                </Card>

            </WrapperCard>
            <WrapperCard invert={true}>
                <Image src={noiva} alt={"sad"} invert={true}/>
                <Card invert={true}>
                    <HorizontMarging/>
                    <VerticalMarging/>
                    <MontserratTitle>Carol</MontserratTitle>
                    <MontserratP>A Carol é uma mulher incrível, doce e meiga, sempre cheia de energia, capaz de cativar a todos com sua alegria. Ela carrega a inocência de uma menina, mas também a força de uma guerreira. Sua inteligência, determinação e companheirismo tornam impossível não admirar essa mulher. Eu orei tanto a Deus para que ela existisse, e Ele me entregou esse presente precioso chamado Carolina!
                    </MontserratP>
                </Card>

            </WrapperCard>
        </Container>

</Wrapper>

    )
}
