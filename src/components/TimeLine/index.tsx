import styled from "styled-components";

import noiva from '../../assets/noiva.jpg'
import inicio from '../../assets/inicio.jpg'
import primeira_pesca from '../../assets/primeira_pesca.jpg'
import piscina from '../../assets/piscina.jpg'
import piscina2 from '../../assets/piscina2.jpg'
import capitolio from '../../assets/capitolio.jpg'
import alianca from '../../assets/alianca.jpg'
import argentina from '../../assets/argentina.jpg'
import holambra1 from '../../assets/holambra1.jpg'
import holambra2 from '../../assets/holambra2.jpg'
import barrinha from '../../assets/barrinha.jpg'
import cachoeira from '../../assets/cachoeira.jpg'
import natal from '../../assets/natal.jpg'
import noivado from '../../assets/noivado.jpg'

const LabelDate = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    height: 70px;
    width: 70px;
    aspect-ratio: 1;
    background: #ae8472;
    color: #fff;
    position: absolute;
    left: 50%;
    margin-left: -35px;
    top: 50%;
    margin-top: -35px;
    font-family: "Montserrat", "Open Sans", "Raleway", serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    font-size: 12px;
    line-height: 12px;
`
const Content = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 100px;
    font-family: "Montserrat", "Open Sans", "Raleway", serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    font-size: 2rem;
    color: #9f9693;
    text-align: justify;
    h3{
        color: #a8735e;
        font-weight: 500;
        font-size: 3rem;
        margin-bottom: 1rem;
        width: 100%;
        text-align: left;
        text-transform: uppercase;
    }
`
const Container = styled.section`
    display: flex;
    position: relative;
    flex-direction: row;
    margin: 0;
    ${Content}:first-child {
        border-right: 1px solid #f0f0f0;
        border-left: none;
        padding-left: 50px;
        padding-right: 100px;
    }

    &&:nth-child(2n) {
        flex-direction: row-reverse;

        ${Content}:first-child {
            border-right: none;
            border-left: 1px solid #f0f0f0;
            padding-left: 100px;
            padding-right: 50px;
        }

        ${Content}:nth-child(2) {
            padding-left: 50px;
            padding-right: 100px;
        }
    }
`

const Image = styled.img`
    object-fit: cover;
    aspect-ratio: 16 / 9;
    width: 100%;
    object-position: center center;
    border-radius: 5px;
    
`
export const Wrapper = styled.div`
    height: auto;
    max-width: 1200px;
    margin: 0 auto;
`

export function TimeLine(){
    return (<>
        <Wrapper>
        <Container>
            <Content>
                <h3>Corujão</h3>
                <p>
                Nos encontramos pela primeira vez ao vivo no Corujão, um evento de jogos da empresa. Entre risadas, partidas e conversas, tudo se encaixou de vez.

                Naquele dia, tive certeza: era ao lado dele que eu gostaria de estar.</p>
                </Content>
            <Content>
                <Image src={inicio} />
            </Content>
            <LabelDate><span>19/08</span><span>2023</span></LabelDate>
        </Container>
        <Container>
            <Content>
                <h3>Fim de ano</h3>
                <p>
                Passamos a virada do ano juntos em Jaboticabal, onde tive a oportunidade de conhecer a família dele. Foi um dia incrível, repleto de momentos especiais, muitas risadas e, claro, um bom tempo aproveitando a piscina</p>
                </Content>
            <Content>
                <Image src={piscina2} />
            </Content>
            <LabelDate><span>31/12</span><span>2023</span></LabelDate>
        </Container>
        <Container>
            <Content>
                <h3>Namoro</h3>
                <p>
                Ele me pediu em namoro no dia 1º de janeiro, logo após a virada do ano que passamos juntos. Foi um momento especial, o início de um novo ano e também de uma nova fase na nossa história.</p>

            </Content>
            <Content>
                <Image src={alianca} />
            </Content>
            <LabelDate><span>01/01</span><span>2024</span></LabelDate>
        </Container>
        <Container>
            <Content>
                <h3>Guapé</h3>
                <p>
                Ele conheceu minha família e, em uma das nossas viagens, fomos para a roça da minha avó, em Guapé. Foi lá que descobri que ele gostava de pescar, e entre momentos simples e especiais, percebi ainda mais o quanto combinávamos..</p>

            </Content>
            <Content>
                <Image src={primeira_pesca} />
            </Content>
            <LabelDate><span>26/01</span><span>2024</span></LabelDate>
        </Container>
        <Container>
            <Content>
                <h3>Capitólio</h3>
                <p>
                    Fomos para capitólio e para vargem bonita, visitamos cachoeiras e conhecemos o pessoal da vargem bonita</p>

            </Content>
            <Content>
                <Image src={capitolio} />
            </Content>
            <LabelDate><span>17/03</span><span>2024</span></LabelDate>
        </Container>
        <Container>
            <Content>
                <h3>Escarpas do lago</h3>
                <p>
                   Michel conheceu os parentes da minha familia por parte de mãe. Nesse dia era o aniversário da minha mãe.</p>

            </Content>
            <Content>
                <Image src={piscina} />
            </Content>
            <LabelDate><span>27/04</span><span>2024</span></LabelDate>
        </Container>
        <Container>
            <Content>
                <h3>Holambra</h3>
                <p>
                Caminhamos pelos campos floridos de Holambra, visitamos o imponente Moinho Povos Unidos e me deliciei com a culinária holandesa. O charme das ruas, o aroma das flores e a tranquilidade da cidade tornaram o dia inesquecível.  </p>

            </Content>
            <Content>
                <Image src={holambra2} />
            </Content>
            <LabelDate><span>14/07</span><span>2024</span></LabelDate>
        </Container>
        <Container>
            <Content>
                <h3>Bariloche</h3>
                <p>
                Fomos para Bariloche, foi a primeira que viajamos para fora do Brasil. É uma cidade encantadora localizada na Patagônia, Argentina, conhecida por sua beleza natural deslumbrante. Comemoramos o nosso aniversário la no dia 09 de setembro o meu e dia 18 de setembro o do Michel.</p>

            </Content>
            <Content>
                <Image src={argentina} />
            </Content>
            <LabelDate><span>15/09</span><span>2024</span></LabelDate>
        </Container>
        <Container>
            <Content>
                <h3>Noivado</h3>
                <p>
                Ele me pediu em casamento em Holambra, e eu disse sim. Foi um momento mágico e inesquecível, rodeado pela beleza única da cidade, com suas flores e clima acolhedor. A emoção foi indescritível, e a sensação de amor e cumplicidade tornou tudo ainda mais especial.</p>

            </Content>
            <Content>
                <Image src={noivado} />
            </Content>
            <LabelDate><span>22/09</span><span>2024</span></LabelDate>
        </Container>
        <Container>
            <Content>
                <h3>Natal</h3>
                <p>
                Passamos o Natal juntos em Divinópolis, celebrando com a minha família. Foi o nosso primeiro Natal juntos, e a experiência foi verdadeiramente especial.</p>

            </Content>
            <Content>
                <Image src={natal} />
            </Content>
            <LabelDate><span>01/01</span><span>2024</span></LabelDate>
        </Container>
        <Container>
            <Content>
                <h3>Vargem Bonita</h3>
                <p>
                Visitamos as cachoeiras da Vargem Bonita. Com águas cristalinas que caem em quedas d'água exuberantes, o lugar oferece um cenário encantador para os amantes da natureza e do ecoturismo</p>

            </Content>
            <Content>
                <Image src={cachoeira} />
            </Content>
            <LabelDate><span>01/01</span><span>2024</span></LabelDate>
        </Container>
        <Container>
            <Content>
                <h3>Barrinha</h3>
                <p>
                Visitamos Barrinha, uma cidade encantadora no interior de São Paulo, fomos em um pesqueiro, conhecemos o rio mogi guaçu de barco foi uma experiência bem legal.</p>

            </Content>
            <Content>
                <Image src={barrinha} />
            </Content>
            <LabelDate><span>01/01</span><span>2024</span></LabelDate>
        </Container>
        </Wrapper>
    </>)
}
export default TimeLine;